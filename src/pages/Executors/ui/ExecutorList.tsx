import { ExecutorCard, executorStore } from "@/entities/Executor"
import { AutoGrid, BaseList, } from "@/shared/ui"
import { Typography } from "@mui/material"
import { useState } from "react"

const limit = 16

export const ExecutorList = () => {
   const [page, setPage] = useState(1)
   const executors = executorStore.get(limit, page)

   if (!executors || !executors.data.length) {
      return <Typography>You haven't added any executors yet</Typography>
   }

   return (
      <BaseList
         totalCount={executors.totalCount}
         limit={limit}
         currentPage={page}
         setPage={setPage}
      >
         <AutoGrid minItemWidth={"300px"} spacing={2}>
            {executors?.data.map((executor) => (
               <ExecutorCard key={executor.id} data={executor} />
            ))}
         </AutoGrid>
      </BaseList>
   )
}
