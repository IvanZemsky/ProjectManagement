import { Assignee, executorStore } from "@/entities/Executor"
import { taskStore } from "@/entities/Task"
import { DeleteTaskBtn } from "@/features/Task/delete"
import { EditTaskBtn } from "@/features/Task/edit"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { PageHeader } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { TaskTeamList } from "./TaskTeamList"

export const TaskPage = observer(() => {
   const { projectId, taskId } = useParams()

   const task = taskStore.getById(taskId)

   if (!task || !projectId) {
      return <Typography>Error</Typography>
   }

   const team = executorStore.getManyById(task.team)

   return (
      <Stack spacing={2}>
         <PageHeader title={task.name}>
            <EditTaskBtn id={task.id} name={task.name} />
            <DeleteTaskBtn
               id={task.id}
               name={task.name}
               redirectOnDelete={setPath("", Routes.Projects, projectId)}
            />
         </PageHeader>
         <Typography>{task.description || "No description provided"}</Typography>

         <Assignee assignee={task.assignee} />

         <TaskTeamList taskId={task.id} team={team} />
      </Stack>
   )
})
