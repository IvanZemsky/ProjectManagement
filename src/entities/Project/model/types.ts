import { Executor } from "@/entities/Executor/@x/project"

export type Project = {
   id: string
   name: string
   description: string
   team: string[] // ids
   lead: Executor | null
   startDate: string
   endDate: string
}

export type CreateProjectDto = {
   name: string
   description: string
   leadId: string
   startDate: string
   endDate: string
}