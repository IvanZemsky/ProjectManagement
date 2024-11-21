import { TaskCard, taskStore } from "@/entities/Task"
import { AutoGrid, PageBtns } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"
import { useState } from "react"

const limit = 5

type Props = {
   executorId: string
}

export const ExecutorTaskList = ({ executorId }: Props) => {
   const [page, setPage] = useState(1)
   const tasks = taskStore.getAllWithExecutor(executorId, page, limit)

   if (!tasks.data.length) {
      return <Typography>This executor has not yet been assigned to tasks</Typography>
   }

   return (
      <Stack spacing={1}>
         <Typography variant="h3">Assigned to tasks</Typography>
         <Stack spacing={2} sx={{ flexGrow: 1, justifyContent: "space-between" }}>
            <AutoGrid minItemWidth={"270px"} spacing={2}>
               {tasks.data.map((task) => (
                  <TaskCard key={task.id} data={task} />
               ))}
            </AutoGrid>
            <PageBtns
               currentPage={page}
               setPage={setPage}
               itemsCount={tasks.totalCount}
               limit={limit}
            />
         </Stack>
      </Stack>
   )
}
