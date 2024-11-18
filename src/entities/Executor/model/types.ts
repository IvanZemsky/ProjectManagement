export type Executor = {
   id: string
   name: string
   position: string | null
}

export type CreateExecutorDto = {
   name: string
   position: string | null
}