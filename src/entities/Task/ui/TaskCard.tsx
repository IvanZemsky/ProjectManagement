import { Routes } from "@/shared/constants"
import { BtnLink } from "@/shared/ui"
import GroupIcon from "@mui/icons-material/Group"
import { Card, CardContent, CardProps, Chip, Stack, Typography } from "@mui/material"
import { ReactNode, PointerEvent, forwardRef, Ref } from "react"
import { Task } from "../model/types"
import { setPath } from "@/shared/lib"

type Props = {
   data: Task
   editBtn?: ReactNode
   deleteBtn?: ReactNode
} & CardProps

export const TaskCard = forwardRef(
   ({ data, editBtn, deleteBtn, sx, ...attributes }: Props, ref: Ref<HTMLDivElement>) => {
      const { id, projectId, name, assignee, team } = data
      const taskPath = setPath("", Routes.Projects, projectId, Routes.Tasks, id)

      const handlePointerDown = (event: PointerEvent) => {
         event.stopPropagation()
      }

      let teamSize = team.length
      teamSize = !assignee ? teamSize : teamSize + 1

      return (
         <Card
            ref={ref}
            variant="outlined"
            sx={{
               position: "relative",
               textDecoration: "none",
               ":hover": { boxShadow: 5 },
               zIndex: 1,
               flexShrink: 0,
               ...sx,
            }}
            onClick={(event) => event.stopPropagation()}
            {...attributes}
         >
            <CardContent>
               <Stack spacing={1}>
                  <Typography sx={{ fontWeight: "600" }}>{name}</Typography>
                  <Stack
                     direction="row"
                     spacing={1}
                     sx={{ justifyContent: "space-between" }}
                  >
                     <Typography>{assignee?.name || "Unspecified lead"}</Typography>
                     <Chip label={teamSize} icon={<GroupIcon />} size="small" />
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                     <BtnLink
                        to={taskPath}
                        variant="outlined"
                        size="small"
                        sx={{ alignSelf: "flex-start" }}
                        onPointerDown={handlePointerDown}
                     >
                        Open
                     </BtnLink>

                     {editBtn}
                     {deleteBtn}
                  </Stack>
               </Stack>
            </CardContent>
         </Card>
      )
   },
)
