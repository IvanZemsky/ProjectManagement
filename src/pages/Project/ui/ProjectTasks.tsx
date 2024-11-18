import { Task, TaskColumn, tasksColumns, taskStore } from "@/entities/Task"
import { theme } from "@/shared/theme"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { Grid2 as Grid } from "@mui/material"
import { filterTasksByStatus } from "../lib/helpers/filterTasksByStatus"
import { TaskColumnCard } from "./TaskColumnCard"
import { observer } from "mobx-react-lite"

type Props = {
   projectId: string
}

export const ProjectTasks = observer(({ projectId }: Props) => {
   const tasks = taskStore.getByProjectId(projectId)

   const handleDragEvent = (event: DragEndEvent) => {
      const { active, over } = event

      if (!over) return

      const taskId = active.id as string
      const newStatus = over.id as Task["status"]

      const updatedTasks = tasks.map((task) =>
         taskId === task.id ? { ...task, status: newStatus } : task,
      )

      taskStore.update(taskId, updatedTasks.find((task) => task.id === taskId)!)
      return updatedTasks
   }

   return (
      <Grid
         container
         spacing={2}
         size="grow"
         sx={{ [theme.breakpoints.down("lg")]: { flexDirection: "column" } }}
      >
         <DndContext onDragEnd={handleDragEvent}>
            {tasksColumns.map((column) => (
               <Grid key={column.id} size="grow" sx={{ height: "100%", flexGrow: 1 }}>
                  <TaskColumn
                     label={column.label}
                     tasksLength={filterTasksByStatus(column.id, tasks)?.length || 0}
                     column={column}
                  >
                     {filterTasksByStatus(column.id, tasks)?.map((task) => (
                        <TaskColumnCard key={task.id} data={task} draggable={true} />
                     ))}
                  </TaskColumn>
               </Grid>
            ))}
         </DndContext>
      </Grid>
   )
})
