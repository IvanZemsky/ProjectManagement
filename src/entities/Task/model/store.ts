import { autorun, makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from "uuid"
import { CreateTaskDto, Task, TaskData, UpdateTaskDto } from "./types"
import { executorStore } from "@/entities/Executor/@x/task"
import { SpecialValues } from "@/shared/constants"
import { AppStorage } from "@/shared/lib"
import { GetData } from "@/shared/model"

class TaskStore {
   tasks: TaskData[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadTasks()
      this.autosaveState()
   }

   private loadTasks() {
      this.tasks = AppStorage.get<TaskData[]>("tasks") || []
      this.isInitialized = true
   }

   private mapToTask = (taskData: TaskData): Task => {
      const { assigneeId, ...rest } = taskData
      return { ...rest, assignee: executorStore.getById(taskData.assigneeId) }
   }

   private mapToTaskData = (task: Task): TaskData => {
      const { assignee, ...rest } = task
      return { ...rest, assigneeId: task.assignee?.id || null }
   }

   getById = (id: string | undefined): Task | null => {
      const taskData = this.tasks.find((task) => task.id === id) || null
      return taskData ? this.mapToTask(taskData) : null
   }

   getByProjectId = (projectId: string): Task[] => {
      return this.tasks.filter((task) => task.projectId === projectId).map(this.mapToTask)
   }

   getAllWithExecutor = (
      executorId: string,
      page?: number,
      limit?: number,
   ): GetData<Task> => {
      const filtered = this.tasks.filter(
         (task) => task.assigneeId === executorId || task.team.includes(executorId),
      )

      const totalCount = filtered.length

      if (limit === undefined || page === undefined) {
         return { data: filtered.map(this.mapToTask), totalCount }
      }

      const startIndex = (page - 1) * limit
      const paginated = filtered.slice(startIndex, startIndex + limit)

      return { data: paginated.map(this.mapToTask), totalCount }
   }

   update = (updatedTask: Task): Task | null => {
      const team = updatedTask.team.filter(executorId => executorId !== updatedTask.assignee?.id)
      const taskToSave = this.mapToTaskData({...updatedTask, team})

      this.tasks = this.tasks.map((task) =>
         task.id === updatedTask.id ? taskToSave : task,
      )

      return updatedTask
   }

   create = (dto: CreateTaskDto): Task => {
      const isUnspecified = dto.assigneeId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.assigneeId)

      const newTaskData: TaskData = {
         id: uuidv4(),
         projectId: dto.projectId,
         name: dto.name,
         description: dto.description,
         assigneeId: executor?.id || null,
         team: [],
         status: dto.status,
      }

      this.tasks.push(newTaskData)

      return this.mapToTask(newTaskData)
   }

   delete = (id: string): void => {
      this.tasks = this.tasks.filter((task) => task.id !== id)
   }

   public removeNonexistent = (projectId: string) => {
      this.tasks = this.tasks.filter(task => task.projectId !== projectId)
   }

   public removeNonexistentExecutorId = (executorId: string) => {
      this.tasks = this.tasks.map((task) => ({
         ...task,
         assigneeId: task.assigneeId === executorId ? null : task.assigneeId,
         team: task.team.filter((teamExecutorId) => teamExecutorId !== executorId),
      }))
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<TaskData[]>("tasks", this.tasks)
         }
      })
   }
}

export const taskStore = new TaskStore()
