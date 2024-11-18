import { taskStore } from "@/entities/Task"
import { DeleteTaskBtn } from "@/features/Task/delete/ui/DeleteTaskBtn"
import { EditTaskBtn } from "@/features/Task/edit/ui/EditTaskBtn"
import { PageHeader } from "@/widgets/PageHeader"
import { Stack, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"

export const TaskPage = observer(() => {
   const { projectId, taskId } = useParams()

   const task = taskStore.getById(taskId)

   if (!task || !projectId) {
      return <Typography>Error</Typography>
   }

   return (
      <Stack spacing={1}>
         <PageHeader title={task.name}>
            <EditTaskBtn id={task.id} name={task.name} />
            <DeleteTaskBtn
               id={task.id}
               name={task.name}
               projectId={projectId}
               redirectOnDelete
            />
         </PageHeader>
         {task.description && <Typography>{task.description}</Typography>}
      </Stack>
   )
})
