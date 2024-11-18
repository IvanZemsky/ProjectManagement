import { Stack } from "@mui/material"
import { PositionTable } from "./PositionTable"
import { Header } from "./Header"

export const Positions = () => {
   return (
      <Stack sx={{ height: "100%" }}>
         <Header />
         <PositionTable />
      </Stack>
   )
}
