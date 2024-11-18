import { ExecutorCard, executorStore } from "@/entities/Executor"
import { AutoGrid, PageBtns } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"
import { useState } from "react"

const limit = 16

type Props = {}

export const ExecutorList = ({}: Props) => {
   const [page, setPage] = useState(1)
   const executors = executorStore.get(limit, page)

   if (!executors || !executors.data.length) {
      return <Typography>You haven't added any executors yet</Typography>
   }

   return (
      <Stack spacing={2} sx={{ flexGrow: 1, justifyContent: "space-between" }}>
         <AutoGrid minItemWidth={"300px"} spacing={2}>
            {executors?.data.map((executor) => (
               <ExecutorCard key={executor.id} {...executor} />
            ))}
         </AutoGrid>
         <PageBtns
            currentPage={page}
            setPage={setPage}
            itemsCount={executors.totalCount}
            limit={limit}
         />
      </Stack>
   )
}
