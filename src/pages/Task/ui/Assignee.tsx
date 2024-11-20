import { Executor } from "@/entities/Executor"
import { Stack, Typography, Tooltip, Chip, Avatar } from "@mui/material"

type Props = {
   assignee: Executor | null
}

export const Assignee = ({ assignee }: Props) => {
   return (
      <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap", alignItems: "center" }}>
         {assignee ? (
            <>
               <Typography>Assignee: </Typography>
               <Tooltip title={assignee.position || "Unspecified position"} arrow>
                  <Chip
                     avatar={<Avatar>{assignee.name[0]}</Avatar>}
                     label={assignee.name}
                     sx={{ fontWeight: 400, fontSize: 18, cursor: "pointer" }}
                  />
               </Tooltip>
            </>
         ) : (
            <Typography>Assignee: unspecified</Typography>
         )}
      </Stack>
   )
}
