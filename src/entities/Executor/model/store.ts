import { SpecialValues } from "@/shared/constants"
import { GetData } from "@/shared/model"
import { autorun, makeAutoObservable } from "mobx"
import { Executor, CreateExecutorDto } from "./types"
import { v4 as uuidv4 } from "uuid"
import { AppStorage } from "@/shared/lib"

class ExecutorStore {
   executors: Executor[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadExecutors()
      this.autosaveState()
   }

   private loadExecutors() {
      this.executors = AppStorage.get<Executor[]>("executors") || []
      this.isInitialized = true
   }

   get = (limit?: number, page?: number): GetData<Executor> | null => {
      const totalCount = this.executors.length
      if (limit === undefined || page === undefined) {
         return { data: this.executors, totalCount }
      }
      const startIndex = (page - 1) * limit
      const filtered = this.executors.slice(startIndex, startIndex + limit)
      return { data: filtered, totalCount }
   }

   getById = (id: string): Executor | null => {
      return this.executors.find((executor) => executor.id === id) || null
   }

   getManyById = (executors: string[]) => {
      return this.executors.filter(executor => executors.includes(executor.id));
   }  

   create = (dto: CreateExecutorDto): Executor | null => {
      const position = dto.position === SpecialValues.Unspecified ? null : dto.position

      const executor: Executor = {
         id: uuidv4(),
         name: dto.name,
         position,
      }

      this.executors.push(executor)
      return executor
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<Executor[]>("executors", this.executors)
         }
      })
   }
}

export const executorStore = new ExecutorStore()
