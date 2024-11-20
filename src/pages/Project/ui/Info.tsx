import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Stack,
} from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { Executor } from "@/entities/Executor"
import { TeamList } from "@/entities/Project/ui/TeamList"
import { theme } from "@/shared/theme"

type Props = {
   text: string
   team: Executor[] | null
}
export const Info = ({ text, team }: Props) => {
   return (
      <Accordion
         disableGutters
         disabled={!text && !team?.length}
         sx={{ border: "1px solid", borderColor: theme.palette.white.dark }}
      >
         <AccordionSummary expandIcon={<ArrowDropDownIcon />} sx={{ fontSize: 18 }}>
            Project information
         </AccordionSummary>
         <AccordionDetails>
            <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
               <Typography>
                  {text ? "Description" : "No description provided"}
               </Typography>
               {team?.length ? <TeamList team={team} /> : "Project team is empty"}
            </Stack>
         </AccordionDetails>
      </Accordion>
   )
}
