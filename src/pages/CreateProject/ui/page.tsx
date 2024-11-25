import { Stack, Typography } from "@mui/material"
import { CreateProjectForm } from "./CreateProjectForm"

export const CreateProject = () => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1">New project</Typography>
         <CreateProjectForm />
      </Stack>
   )
}
