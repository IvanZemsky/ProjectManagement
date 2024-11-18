import { Box } from "@mui/material";
import CircularProgress, {
   CircularProgressProps,
} from "@mui/material/CircularProgress";

type Props = {} & CircularProgressProps;

export const Loader = ({ ...attributes }: Props) => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexGrow: 1,
         }}
      >
         <CircularProgress {...attributes} />
      </Box>
   );
};
