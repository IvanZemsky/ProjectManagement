import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
   text: string
}
export const Description = ({text}: Props) => {
   return (
      <Accordion disableGutters disabled={!text}>
         <AccordionSummary expandIcon={<ArrowDropDownIcon />} sx={{ fontSize: 18 }}>
            {text ? 'Description' : 'No description was provided'}
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               {text}
            </Typography>
         </AccordionDetails>
      </Accordion>
   )
}
