import { Stack, Typography } from "@mui/material"
import { CreateTaskForm } from "./CreateTaskForm"

type Props = {}
export const CreateTask = ({}: Props) => {
   return (
      <Stack spacing={2}>
         <Typography variant="h1">New task</Typography>
         <CreateTaskForm />
      </Stack>
   )
}
