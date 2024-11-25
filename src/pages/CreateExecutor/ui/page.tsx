import { Stack, Typography } from "@mui/material"
import { CreateExecutorForm } from "./CreateExecutorForm"

export const CreateExecutor = () => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1" sx={{ mb: 1 }}>
            New executor
         </Typography>
         <CreateExecutorForm />
      </Stack>
   )
}
