import { Stack, Typography } from "@mui/material"
import { PropsWithChildren } from "react"
import { theme } from "../theme"

type Props = {
   title: string
}
export const PageHeader = ({ title, children }: PropsWithChildren<Props>) => {
   return (
      <Stack
         direction="row"
         sx={{
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: 2,
         }}
      >
         <Typography
            variant="h1"
            sx={{
               [theme.breakpoints.down("sm")]: {
                  fontSize: 19,
               },
            }}
         >
            {title}
         </Typography>
         <Stack direction="row" spacing={1}>
            {children}
         </Stack>
      </Stack>
   )
}
