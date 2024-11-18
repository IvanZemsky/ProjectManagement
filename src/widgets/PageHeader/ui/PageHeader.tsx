import { Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = {
 title: string
}
export const PageHeader = ({title, children}: PropsWithChildren<Props>) => {
   return ( 
      <Stack direction="row" spacing={1} sx={{mb: 2}}>
         <Typography variant="h1">{title}</Typography>
         {children}
      </Stack>
   );
}