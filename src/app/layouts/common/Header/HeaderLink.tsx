import { theme } from "@/shared/theme";
import { Link, LinkProps } from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

type Props = {
   to: string
} & LinkProps

export const HeaderLink = ({to, children, ...props}: Props) => {
   return (
      <Link
         component={RouterLink}
         to={to}
         sx={{
            color: theme.palette.primary.contrastText,
            ...props.sx
         }}
         {...props}
      >
         {children}
      </Link>
   );
};
