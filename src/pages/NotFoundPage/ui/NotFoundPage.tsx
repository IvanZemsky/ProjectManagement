import { Routes } from "@/shared/model"
import { BtnLink } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"

type Props = {}

export const NotFoundPage = ({}: Props) => {
   return (
      <Stack
         sx={{ alignItems: "center", justifyContent: "center", p: 2, height: "calc(100dvh - 100px)" }}
      >
         <Stack spacing={1}>
            <Typography sx={{ fontSize: 30 }}>Page not found</Typography>
            <BtnLink to={Routes.Home} variant="contained">
               Home
            </BtnLink>
         </Stack>
      </Stack>
   )
}
