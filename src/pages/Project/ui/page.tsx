import { projectStore } from "@/entities/Project"
import { BtnLink } from "@/shared/ui"
import { PageHeader } from "@/widgets/PageHeader"
import { Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Info } from "./Info"
import { ProjectTasks } from "./ProjectTasks"

type Props = {}
export const Project = ({}: Props) => {
   const { projectId } = useParams()

   if (!projectId) {
      return <Typography>Error</Typography>
   }

   const projectData = projectStore.getById(projectId)
   const team = projectStore.getTeam(projectId)

   if (!projectData) {
      return <Typography>Error</Typography>
   }


   return (
      <Stack spacing={1} sx={{ height: "100%" }}>
         <PageHeader title={projectData.name}>
            <BtnLink to="create-task" variant="contained">
               Add task
            </BtnLink>
         </PageHeader>

         <Info text={projectData.description} team={team}/>

         <ProjectTasks projectId={projectId as string} />
      </Stack>
   )
}
