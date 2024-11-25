import { ProjectCard, projectStore } from "@/entities/Project"
import { AutoGrid, BaseList } from "@/shared/ui"
import { Typography } from "@mui/material"
import { useState } from "react"

const limit = 12

export const ProjectList = () => {
   const [page, setPage] = useState(1)
   const projects = projectStore.get(limit, page)

   if (!projects || !projects.data.length) {
      return <Typography>You haven't added any projects yet</Typography>
   }

   return (
      <BaseList
         totalCount={projects.totalCount}
         limit={limit}
         currentPage={page}
         setPage={setPage}
      >
         <AutoGrid minItemWidth="300px" spacing={2}>
            {projects?.data.map((project) => (
               <ProjectCard key={project.id} data={project} />
            ))}
         </AutoGrid>
      </BaseList>
   )
}
