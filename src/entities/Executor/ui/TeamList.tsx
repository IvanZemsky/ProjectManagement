import { Executor } from "../model/types"
import { Routes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import { Stack, Tooltip, Chip, Avatar } from "@mui/material"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
   team: Executor[]
   excludeId?: string | null
   editBtn?: ReactNode
   onDelete?: (...args: any[]) => any
   links?: boolean
}

export const TeamList = ({ team, excludeId, onDelete, editBtn, links = true }: Props) => {
   const filteredTeam = team.filter(executor => executor.id !== excludeId)

   return (
      <Stack direction="row" sx={{ flexWrap: "wrap", alignItems: "flex-start", gap: 1 }}>
         {editBtn}
         {filteredTeam.map((executor) => (
            <Tooltip
               key={executor.id}
               title={executor.position?.name || "Unspecified position"}
               arrow
            >
               <Chip
                  component={links ? Link : "div"}
                  to={links ? setPath("", Routes.Executors, executor.id) : undefined}
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
