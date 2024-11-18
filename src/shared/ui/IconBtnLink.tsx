import { IconButton, IconButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
   to: string;
} & IconButtonProps

export const IconBtnLink = ({ to, children, ...props }: Props) => {
   return (
      <IconButton component={Link} to={to} {...props}>
         {children}
      </IconButton>
   );
};