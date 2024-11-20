import { Executor } from "@/entities/Executor/@x/project"
import { Routes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import { Stack, Tooltip, Chip, Avatar } from "@mui/material"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
   team: Executor[]
   editBtn?: ReactNode
   onDelete?: (...args: any[]) => any
   link?: boolean
}

export const TeamList = ({ team, onDelete, editBtn, link = true }: Props) => {
   return (
      <Stack direction="row" sx={{ flexWrap: "wrap", alignItems: "flex-start", gap: 1 }}>
         {editBtn}
         {team.map((executor) => (
            <Tooltip
               key={executor.id}
               title={executor.position || "Unspecified position"}
               arrow
            >
               <Chip
                  component={link ? Link : "div"}
                  to={link ? setPath("", Routes.Positions, executor.id) : undefined}
                  avatar={<Avatar>{executor.name[0]}</Avatar>}
                  label={executor.name}
                  sx={{ fontWeight: 400, fontSize: 18, cursor: "pointer" }}
                  onDelete={onDelete ? () => onDelete(executor.id) : undefined}
               />
            </Tooltip>
         ))}
      </Stack>
   )
}
