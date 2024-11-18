import { TaskStatus, Task } from "@/entities/Task"

export const filterTasksByStatus = (status: TaskStatus, tasks: Task[] | null | undefined) => {
   if (!tasks) return undefined
   return tasks.filter((task) => task.status === status)
}