import { Stack, Typography } from "@mui/material"
import { Form } from "./Form"

export const Options = () => {
   

   return (
      <Stack spacing={1} sx={{ alignItems: "flex-start" }}>
         <Typography variant="h1">Options</Typography>
         <Form />
      </Stack>
   )
}
