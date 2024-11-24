import { CreatePositionForm } from "@/features/Position/create";
import { Box, Typography } from "@mui/material";

type Props = {
 
}
export const CreatePosition = ({}: Props) => {
   return ( 
      <Box>
         <Typography variant="h1" sx={{mb: 1}}>New position</Typography>
         <CreatePositionForm />
      </Box>
   );
}