import { Executor } from "@/entities/Executor/@x/Project"

export type ProjectData = {
   id: string
   name: string
   description: string
   leadId: string | null
   startDate: string
   endDate: string
}

export type Project = {
   id: string
   name: string
   description: string
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
