import { Button, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
   to: string;
} & ButtonProps;

export const BtnLink = ({ to, children, ...props }: Props) => {
   return (
      <Button component={Link} to={to} {...props}>
         {children}
      </Button>
   );
};
