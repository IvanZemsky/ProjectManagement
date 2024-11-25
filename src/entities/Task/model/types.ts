import { Executor } from "@/entities/Executor/@x/Task"

export type TaskStatus = "to do" | "in progress" | "review" | "done"

export type TaskColumnData = {
   id: TaskStatus
   label: string
}

export type TaskData = {
   id: string
   projectId: string
   name: string
   description: string
   assigneeId: string | null
   team: string[] // ids
   status: TaskStatus
}

export type Task = {
   id: string
   projectId: string
   name: string
   description: string
   assignee: Executor | null
   team: string[] // ids
   status: TaskStatus
}

export type CreateTaskDto = {
   projectId: string
   name: string
   description: string
   assigneeId: string
   status: TaskStatus
}

export type UpdateTaskDto = {
   name: string
   description: string
   assigneeId: string
   status: TaskStatus
}
