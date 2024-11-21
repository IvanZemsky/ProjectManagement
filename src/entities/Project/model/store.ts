import { autorun, makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from "uuid"
import { CreateProjectDto, Project, ProjectData } from "./types"
import { SpecialValues } from "@/shared/constants"
import { AppStorage, formatDate } from "@/shared/lib"
import { GetData } from "@/shared/model"
import { executorStore } from "@/entities/Executor/@x/project"
import { taskStore } from "@/entities/Task/@x/project"

class ProjectStore {
   projects: ProjectData[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadProjects()
      this.autosaveState()
   }

   private loadProjects() {
      this.projects = AppStorage.get<ProjectData[]>("projects") || []
      this.isInitialized = true
   }

   private mapToProject(projectData: ProjectData): Project {
      const executor = projectData.leadId
         ? executorStore.getById(projectData.leadId)
         : null

      const { leadId, ...rest } = projectData

      return {
         ...rest,
         lead: executor,
      }
   }

   public get = (limit?: number, page?: number): GetData<Project> => {
      const totalCount = this.projects.length
      const data = this.projects.map((project) => this.mapToProject(project))
      if (limit === undefined || page === undefined) {
         return { data, totalCount }
      }
      const startIndex = (page - 1) * limit
      const filtered = data.slice(startIndex, startIndex + limit)
      return { data: filtered, totalCount }
   }

   public getById = (id: string): Project | null => {
      const project = this.projects.find((project) => project.id === id)
      return project ? this.mapToProject(project) : null
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
         tasksTeam.some(
            (taskExecutor) =>
               executor.id === taskExecutor
         ),
      )

      return team
   }

   getAllWithLead = (
      executorId: string,
      page?: number,
      limit?: number,
   ): GetData<Project> => {
      const filtered = this.projects
         .filter((project) => project.leadId === executorId)
         .map((project) => this.mapToProject(project))
      const totalCount = filtered.length
      if (limit === undefined || page === undefined) {
         return { data: filtered, totalCount }
      }
      const startIndex = (page - 1) * limit
      const paginated = filtered.slice(startIndex, startIndex + limit)
      return { data: paginated, totalCount }
   }

   public create = (dto: CreateProjectDto) => {
      const isUnspecified = dto.leadId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.leadId)

      const project: ProjectData = {
         id: uuidv4(),
         name: dto.name,
         description: dto.description,
         leadId: executor?.id || null,
         startDate: formatDate(dto.startDate),
         endDate: formatDate(dto.endDate),
      }

      this.projects.push(project)
      return this.mapToProject(project)
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<ProjectData[]>("projects", this.projects)
         }
      })
   }
}

export const projectStore = new ProjectStore()
