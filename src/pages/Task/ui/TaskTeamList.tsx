import { Executor } from "@/entities/Executor"
import { TeamList } from "@/entities/Project/ui/TeamList"
import { EditTaskTeamChip } from "@/features/Task/editTeam"
import { Stack, Typography } from "@mui/material"

type Props = {
   taskId: string
   team: Executor[]
}

export const TaskTeamList = ({ taskId, team }: Props) => {
   if (!team.length) {
      return (
         <Stack
            spacing={2}
            direction="row"
            sx={{ flexWrap: "wrap", alignItems: "center" }}
         >
            <Typography>Task team is empty now.</Typography>
            <EditTaskTeamChip taskId={taskId} />
         </Stack>
      )
   }

   return <TeamList team={team} editBtn={<EditTaskTeamChip taskId={taskId} />} />
}
