import { Stack } from "@mui/material"
import { ExecutorList } from "./ExecutorList"

import { Header } from "./Header"

export const Executors = () => {
   return (
      <Stack sx={{ height: "100%" }}>
         <Header />
         <ExecutorList />
      </Stack>
   )
}
