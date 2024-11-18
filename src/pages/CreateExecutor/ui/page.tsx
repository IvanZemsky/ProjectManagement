import { CreateExecutorForm } from "@/features/Executor/create"
import { Box, Typography } from "@mui/material"

export const CreateExecutor = () => {
   return (
      <Box>
         <Typography variant="h1" sx={{ mb: 1 }}>
            New executor
         </Typography>
         <CreateExecutorForm />
      </Box>
   )
}
