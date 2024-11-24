import { Stack } from "@mui/material"
import { blue } from "@mui/material/colors"
import { NavLink } from "@/shared/ui"
import { theme } from "@/shared/theme"
import { navLinks } from "@/shared/model"

export const Navbar = () => {
   return (
      <Stack
         spacing={1}
         sx={{
            flexShrink: 0,
            backgroundColor: blue[600],
            padding: 2,
            pt: 1,
            zIndex: 801,
            [theme.breakpoints.down("md")]: {
               display: "none",
            },
         }}
      >
         {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} startIcon={link.icon}>
               {link.text}
            </NavLink>
         ))}
      </Stack>
   )
}
