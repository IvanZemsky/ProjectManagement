import { executorStore } from "@/entities/Executor"
import { PageHeader } from "@/widgets/PageHeader"
import { Box, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { ExecutorTaskList } from "./ExecutorTaskList"
import { ExecutorProjectList } from "./ExecutorProjectList"
import { EditExecutorBtn } from "@/features/Executor/edit"
import { DeleteExecutorBtn } from "@/features/Executor/delete"
import { observer } from "mobx-react-lite"

export const Executor = observer(() => {
   const { executorId } = useParams()

   const executor = executorStore.getById(executorId)

   if (!executorId || !executor) {
      return <Typography>Error</Typography>
   }

   return (
      <Stack spacing={2}>
         <Box>
            <PageHeader title={executor.name}>
               <EditExecutorBtn id={executorId} name={executor.name} />
               <DeleteExecutorBtn id={executorId} name={executor.name} redirectOnDelete/>
            </PageHeader>
            <Typography>{executor.position?.name || "Unspecified position"}</Typography>
         </Box>
         <Stack spacing={3}>
            <ExecutorTaskList executorId={executorId} />
            <ExecutorProjectList executorId={executorId} />
         </Stack>
      </Stack>
   )
})
