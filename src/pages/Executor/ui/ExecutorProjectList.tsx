import { ProjectCard, projectStore } from "@/entities/Project"
import { AutoGrid, PageBtns } from "@/shared/ui"
import { Typography, Stack } from "@mui/material"
import { useState } from "react"

const limit = 5

type Props = {
   executorId: string
}

export const ExecutorProjectList = ({ executorId }: Props) => {
   const [page, setPage] = useState(1)
   const projects = projectStore.getAllWithLead(executorId, page, limit)

   if (!projects.data.length) {
      return (
         <Typography>This executor has not yet been appointed project lead</Typography>
      )
   }

   return (
      <Stack spacing={1}>
         <Typography variant="h3">Appointed to projects</Typography>
         <Stack spacing={2} sx={{ flexGrow: 1, justifyContent: "space-between" }}>
            <AutoGrid minItemWidth={"270px"} spacing={2}>
               {projects.data.map((project) => (
                  <ProjectCard key={project.id} data={project} />
               ))}
            </AutoGrid>
            <PageBtns
               currentPage={page}
               setPage={setPage}
               itemsCount={projects.totalCount}
               limit={limit}
            />
         </Stack>
      </Stack>
   )
}
