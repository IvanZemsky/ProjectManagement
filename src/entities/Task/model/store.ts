import { autorun, makeAutoObservable, toJS } from "mobx"
import { v4 as uuidv4 } from "uuid"
import { CreateTaskDto, Task, UpdateTaskDto } from "./types"
import { executorStore } from "@/entities/Executor/@x/task"
import { SpecialValues } from "@/shared/constants"
import { AppStorage } from "@/shared/lib"
import { GetData } from "@/shared/model"

class TaskStore {
   tasks: Task[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadTasks()
      this.autosaveState() 
   }

   private loadTasks() {
      this.tasks = AppStorage.get<Task[]>("tasks") || []
      this.isInitialized = true
   }

   getById = (id: string | undefined) => {
      return this.tasks.find((task) => task.id === id) || null
   }

   getByProjectId = (projectId: string) => {
      return this.tasks.filter((task) => task.projectId === projectId)
   }

   getAllWithExecutor = (executorId: string, page?: number, limit?: number): GetData<Task> => {
      const filtered = this.tasks.filter(task => task.assignee?.id === executorId || task.team.includes(executorId))
      const totalCount = filtered.length
      if (limit === undefined || page === undefined) {
         return { data: filtered, totalCount }
      }
      const startIndex = (page - 1) * limit
      const paginated = filtered.slice(startIndex, startIndex + limit)
      return { data: paginated, totalCount }
   }

   updateOne = (taskId: string, dto: UpdateTaskDto) => {
      const isUnspecified = dto.assigneeId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.assigneeId)

      const updatedTask = this.tasks.find((task) => task.id === taskId)
      if (updatedTask) {
         Object.assign(updatedTask, dto, { assignee: executor })
         return updatedTask
      }
      return null
   }

   update = (updatedTask: Task) => {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
         this.tasks[index] = updatedTask
         return updatedTask
      }
      return null
   }

   create = (dto: CreateTaskDto) => {
      const isUnspecified = dto.assigneeId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.assigneeId)

      const newTask: Task = {
         id: uuidv4(),
         projectId: dto.projectId,
         name: dto.name,
         description: dto.description,
         assignee: executor,
         team: [],
         status: dto.status,
      }

      this.tasks.push(newTask)
      return newTask
   }

   delete = (id: string) => {
      this.tasks = this.tasks.filter((task) => task.id !== id)
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<Task[]>("tasks", this.tasks)
         }
      })
   }
}

export const taskStore = new TaskStore()
