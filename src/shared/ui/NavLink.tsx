import { Button, ButtonProps } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

type Props = {
  to: string;
} & ButtonProps

export const NavLink = ({ children, to, ...props }: Props) => {
  const location = useLocation();

  const isActive = location.pathname.includes(to);

  return (
    <Button
      component={Link}
      to={to}
      color={isActive ? "white" : "primary"}
      variant="contained"
      size="large"
      sx={{justifyContent: 'flex-start'}}
      {...props}
    >
      {children}
    </Button>
  );
};