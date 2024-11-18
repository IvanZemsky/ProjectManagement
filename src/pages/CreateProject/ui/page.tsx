import { Stack, Typography } from "@mui/material"
import { Form } from "@/features/Project/create/ui/Form"

export const CreateProject = () => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1">New project</Typography>
         <Form />
      </Stack>
   )
}
