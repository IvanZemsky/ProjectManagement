import type { Position } from "@/entities/Position/@x/Executor"

export type ExecutorData = {
   id: string
   name: string
   positionId: string | null
}

export type Executor = {
   id: string
   name: string
   position: Position | null
}

export type CreateExecutorDto = {
   name: string
   positionId: string | null
}
