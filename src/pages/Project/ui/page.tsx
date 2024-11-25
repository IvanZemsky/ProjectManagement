import { projectStore } from "@/entities/Project"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { BtnLink, PageHeader } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { Info } from "./Info"
import { ProjectTasks } from "./ProjectTasks"
import { EditProjectBtn } from "./editProject/EditProjectBtn"
import { DeleteProjectBtn } from "./deleteProject/DeleteProjectBtn"

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
            <DeleteProjectBtn
               id={projectId}
               name={projectData.name}
               redirectOnDelete={setPath("", Routes.Projects)}
            />
         </PageHeader>

         <Info projectId={projectId} />

         <ProjectTasks projectId={projectId} />
      </Stack>
   )
})
