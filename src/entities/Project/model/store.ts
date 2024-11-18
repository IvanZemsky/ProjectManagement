import { autorun, makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from "uuid"
import { CreateProjectDto, Project } from "./types"
import { executorStore } from "@/entities/Executor/@x/project"
import { SpecialValues } from "@/shared/constants"
import { AppStorage, formatDate } from "@/shared/lib"
import { GetData } from "@/shared/model"

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

   public get = (limit?: number, page?: number): GetData<Project> =>  {
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

   public create = (dto: CreateProjectDto) => {
      const isUnspecified = dto.leadId === SpecialValues.Unspecified
      const executor = isUnspecified ? null : executorStore.getById(dto.leadId)

      const team = executor?.id ? [executor.id] : []

      const project: Project = {
         id: uuidv4(),
         name: dto.name,
         description: dto.description,
         lead: executor,
         team,
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