import { executorStore } from "@/entities/Executor"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { PageHeader } from "@/shared/ui"
import { Box, Stack, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { ExecutorProjectList } from "./ExecutorProjectList"
import { ExecutorTaskList } from "./ExecutorTaskList"
import { DeleteExecutorBtn } from "./deleteExecutor/DeleteExecutorBtn"
import { EditExecutorBtn } from "./editExecutor/EditExecutorBtn"

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
               <DeleteExecutorBtn
                  id={executorId}
                  name={executor.name}
                  redirectOnDelete={setPath("", Routes.Executors)}
               />
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
