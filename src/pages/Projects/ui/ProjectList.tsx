import { ProjectCard, projectStore } from "@/entities/Project"
import { AutoGrid, PageBtns } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"
import { useState } from "react"

const limit = 12

type Props = {}

export const ProjectList = ({}: Props) => {
   const [page, setPage] = useState(1)
   const projects = projectStore.get(limit, page)

   if (!projects || !projects.data.length) {
      return <Typography>You haven't added any projects yet</Typography>
   }

   return (
      <Stack spacing={2} sx={{ flexGrow: 1, justifyContent: "space-between" }}>
         <AutoGrid minItemWidth={"300px"} spacing={2}>
            {projects?.data.map((project) => (
               <ProjectCard key={project.id} data={project} />
            ))}
         </AutoGrid>
         <PageBtns
            itemsCount={projects.totalCount}
            limit={limit}
            currentPage={page}
            setPage={setPage}
         />
      </Stack>
   )
}
