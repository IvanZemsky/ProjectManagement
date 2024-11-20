import { autorun, makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from "uuid"
import { CreateProjectDto, Project } from "./types"
import { executorStore } from "@/entities/Executor/@x/project"
import { SpecialValues } from "@/shared/constants"
import { AppStorage, formatDate } from "@/shared/lib"
import { GetData } from "@/shared/model"
import { taskStore } from "@/entities/Task/@x/project"

class ProjectStore {
   projects: Project[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadProjects()
      this.autosaveState()
   }

   private loadProjects() {
      this.projects = AppStorage.get<Project[]>("projects") || []
      this.isInitialized = true
   }

   public get = (limit?: number, page?: number): GetData<Project> => {
      const totalCount = this.projects.length
      if (limit === undefined || page === undefined) {
         return { data: this.projects, totalCount }
      }
      const startIndex = (page - 1) * limit
      const filtered = this.projects.slice(startIndex, startIndex + limit)
      return { data: filtered, totalCount }
   }

   public getById = (id: string) => {
      return this.projects.find((project) => project.id === id) || null
   }

   public getTeam = (projectId: string) => {
      const tasks = taskStore.getByProjectId(projectId)
      const executors = executorStore.get()

      if (!executors) {
         return null
      }

      const tasksExecutors: string[] = tasks.flatMap((task) => task.team)
      const tasksAssignees: string[] = tasks
         .map((task) => task.assignee?.id)
         .filter((value) => value !== undefined)
      const tasksTeam = [...tasksExecutors, ...tasksAssignees]
      const team = executors.data.filter((executor) =>
         tasksTeam.some((taskExecutor) => executor.id === taskExecutor),
      )

      return team
   }

   public create = (dto: CreateProjectDto) => {
      const isUnspecified = dto.leadId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.leadId)

      const project: Project = {
         id: uuidv4(),
         name: dto.name,
         description: dto.description,
         lead: executor,
         startDate: formatDate(dto.startDate),
         endDate: formatDate(dto.endDate),
      }

      this.projects.push(project)
      return project
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<Project[]>("projects", this.projects)
         }
      })
   }
}

export const projectStore = new ProjectStore()
