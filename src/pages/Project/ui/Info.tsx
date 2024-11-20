import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Stack,
} from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { TeamList } from "@/entities/Project/ui/TeamList"
import { theme } from "@/shared/theme"
import { projectStore } from "@/entities/Project"
import { observer } from "mobx-react-lite"

type Props = {
   projectId: string
}
export const Info = observer(({ projectId }: Props) => {
   const projectData = projectStore.getById(projectId)
   const team = projectStore.getTeam(projectId)

   if (!projectData) {
      return <Typography>Error</Typography>
   }

   return (
      <Accordion
         disableGutters
         disabled={!projectData.description && !team?.length}
         sx={{ border: "1px solid", borderColor: theme.palette.white.dark }}
      >
         <AccordionSummary expandIcon={<ArrowDropDownIcon />} sx={{ fontSize: 18 }}>
            Project information
         </AccordionSummary>
         <AccordionDetails>
            <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
               <Typography>
                  {projectData.description ? "Description" : "No description provided"}
               </Typography>
               {team?.length ? <TeamList team={team} /> : "Project team is empty"}
            </Stack>
         </AccordionDetails>
      </Accordion>
   )
})
