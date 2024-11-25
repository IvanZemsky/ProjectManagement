import { Stack, Typography } from "@mui/material"
import { CreatePositionForm } from "./CreatePositionForm"

type Props = {}
export const CreatePosition = ({}: Props) => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1" sx={{ mb: 1 }}>
            New position
         </Typography>
         <CreatePositionForm />
      </Stack>
   )
}
