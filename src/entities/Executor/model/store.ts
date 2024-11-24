import { SpecialValues } from "@/shared/model"
import { GetData } from "@/shared/model"
import { autorun, makeAutoObservable } from "mobx"
import { Executor, CreateExecutorDto, ExecutorData } from "./types"
import { v4 as uuidv4 } from "uuid"
import { AppStorage } from "@/shared/lib"
import { positionStore } from "@/entities/Position/@x/executor"
import { taskStore } from "@/entities/Task/@x/executor"
import { projectStore } from "@/entities/Project/@x/executor"

class ExecutorStore {
   executors: ExecutorData[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadExecutors()
      this.autosaveState()
   }

   private loadExecutors() {
      this.executors = AppStorage.get<ExecutorData[]>("executors") || []
      this.isInitialized = true
   }

   private mapToExecutor = (executorData: ExecutorData): Executor => {
      const { positionId, ...rest } = executorData
      return { ...rest, position: positionStore.getById(executorData.positionId) }
   }

   private mapToExecutorData = (executor: Executor): ExecutorData => {
      const { position, ...rest } = executor
      return { ...rest, positionId: executor.position?.id || null }
   }

   public get = (limit?: number, page?: number): GetData<Executor> | null => {
      const totalCount = this.executors.length

      if (limit === undefined || page === undefined) {
         return {
            data: this.executors.map(this.mapToExecutor),
            totalCount,
         }
      }

      const startIndex = (page - 1) * limit
      const filtered = this.executors.slice(startIndex, startIndex + limit)
      return {
         data: filtered.map(this.mapToExecutor),
         totalCount,
      }
   }

   public getById = (id: string | undefined | null): Executor | null => {
      const executor = this.executors.find((executor) => executor.id === id) || null
      if (!executor) return null

      return {
         id: executor.id,
         name: executor.name,
         position: positionStore.getById(executor.positionId),
      }
   }

   public getManyById = (ids: string[]): Executor[] => {
      return this.executors
         .filter((executor) => ids.includes(executor.id))
         .map((executor) => ({
            ...executor,
            position: positionStore.getById(executor.positionId),
         }))
   }

   update = (updatedExecutor: Executor): Executor | null => {
      this.executors = this.executors.map((executor) =>
         executor.id === updatedExecutor.id
            ? this.mapToExecutorData(updatedExecutor)
            : executor,
      )

      return updatedExecutor
   }

   public create = (dto: CreateExecutorDto): Executor | null => {
      const positionId =
         dto.positionId === SpecialValues.Unspecified ? null : dto.positionId
      const id = uuidv4()

      const executorData: ExecutorData = {
         id,
         name: dto.name,
         positionId,
      }

      this.executors.push(executorData)
      return this.getById(id)
   }

   delete = (id: string): void => {
      this.executors = this.executors.filter((executor) => executor.id !== id)
      taskStore.removeNonexistentExecutorId(id)
      projectStore.removeNonexistentPositionId(id)
   }

   public removeNonexistentPositionId = (positionId: string) => {
      this.executors.map((executor) => ({
         ...executor,
         positionId: executor.positionId === positionId ? null : executor.positionId,
      }))
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<ExecutorData[]>("executors", this.executors)
         }
      })
   }
}

export const executorStore = new ExecutorStore()
