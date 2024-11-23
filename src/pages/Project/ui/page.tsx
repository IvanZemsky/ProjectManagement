import { projectStore } from "@/entities/Project"
import { BtnLink } from "@/shared/ui"
import { PageHeader } from "@/widgets/PageHeader"
import { Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Info } from "./Info"
import { ProjectTasks } from "./ProjectTasks"
import { EditProjectBtn } from "@/features/Project/edit"
import { DeleteProjectBtn } from "@/features/Project/delete"
import { observer } from "mobx-react-lite"

type Props = {}
export const Project = observer(({}: Props) => {
   const { projectId } = useParams()

   const projectData = projectStore.getById(projectId as string)

   if (!projectData || !projectId) {
      return <Typography>Error</Typography>
   }

   return (
      <Stack spacing={1} sx={{ height: "100%" }}>
         <PageHeader title={projectData.name}>
            <BtnLink to="create-task" variant="contained">
               Add task
            </BtnLink>
            <EditProjectBtn id={projectId} name={projectData.name} />
            <DeleteProjectBtn id={projectId} name={projectData.name} redirectOnDelete />
         </PageHeader>

         <Info projectId={projectId} />

         <ProjectTasks projectId={projectId} />
      </Stack>
   )
})
