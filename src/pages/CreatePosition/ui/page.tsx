import { Box, Typography } from "@mui/material";
import {Form} from "@/features/Position/create/ui/Form";

type Props = {
 
}
export const CreatePosition = ({}: Props) => {
   return ( 
      <Box>
         <Typography variant="h1" sx={{mb: 1}}>New position</Typography>
         <Form />
      </Box>
   );
}