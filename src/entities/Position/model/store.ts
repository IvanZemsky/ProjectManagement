import { autorun, makeAutoObservable } from "mobx"
import { CreatePositionDto, Position } from "./types"
import { AppStorage } from "@/shared/lib"
import { v4 as uuidv4 } from "uuid"

class PositionStore {
   positions: Position[] = []
   isInitialized = false

   constructor() {
      makeAutoObservable(this)
      this.loadPostions()
      this.autosaveState()
   }

   private loadPostions() {
      this.positions = AppStorage.get<Position[]>("positions") || []
      this.isInitialized = true
   }

   public get = (): Position[] => {
      return this.positions
   }

   getById = (id: string | null): Position | null => {
      return this.positions.find((position) => position.id === id) || null
   }

   public getByName = (name: string): Position | null => {
      return this.positions.find((position) => position.name === name) || null
   }

   public create = (dto: CreatePositionDto): Position | null => {
      const isExist = !!this.getByName(dto.name)

      if (isExist) {
         return null
      }

      const position: Position = {
         id: uuidv4(),
         name: dto.name,
      }

      this.positions.push(position)
      return position
   }

   private autosaveState = () => {
      autorun(() => {
         if (this.isInitialized) {
            AppStorage.set<Position[]>("positions", this.positions)
         }
      })
   }
}

export const positionStore = new PositionStore()
