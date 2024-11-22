import { CreateProjectForm } from "@/features/Project/create"
import { Stack, Typography } from "@mui/material"

export const CreateProject = () => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1">New project</Typography>
         <CreateProjectForm />
      </Stack>
   )
}
