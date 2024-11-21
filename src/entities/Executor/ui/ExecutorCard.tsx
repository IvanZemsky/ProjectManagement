import { Card, CardContent, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/constants"
import { Executor } from "../model/types"

type Props = {
   data: Executor
}

export const ExecutorCard = ({ data }: Props) => {
   const { id, name, position } = data

   return (
      <Card
         variant="outlined"
         component={Link}
         to={setPath("", Routes.Executors, id)}
         sx={{ textDecoration: "none", ":hover": { boxShadow: 5 } }}
      >
         <CardContent>
            <Stack spacing={1}>
               <Typography sx={{ fontWeight: 500, fontSize: 20 }}>{name}</Typography>
               <Typography>{position?.name || "Unspecified position"}</Typography>
            </Stack>
         </CardContent>
      </Card>
   )
}
