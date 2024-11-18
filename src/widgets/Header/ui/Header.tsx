import { Routes } from "@/shared/constants"
import { theme } from "@/shared/theme/theme"
import { AppBar, Toolbar, Link, Stack, SxProps } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import GitHubIcon from "@mui/icons-material/GitHub"
import SettingsIcon from "@mui/icons-material/Settings"
import { IconBtnLink } from "@/shared/ui"
import { setPath } from "@/shared/lib"

const linkSx: SxProps = {
   display: "flex",
   alignItems: "center",
   gap: 0.5,
   color: theme.palette.primary.contrastText,
   fontSize: 14,
}

export const Header = () => {
   return (
      <AppBar position="static" sx={{ zIndex: 800 }}>
         <Toolbar
            variant="dense"
            sx={{
               minHeight: "auto",
               height: "auto",
               paddingY: 1,
            }}
         >
            <Stack
               direction="row"
               spacing={2}
               sx={{ justifyContent: "space-between", flexGrow: 1 }}
            >
               <Link
                  component={RouterLink}
                  to={Routes.Home}
                  sx={{
                     color: theme.palette.primary.contrastText,
                     textTransform: "uppercase",
                  }}
               >
                  App
               </Link>
               <Stack direction="row" spacing={1.5}>
                  <Link
                     href={"https://github.com/IvanZemsky/projects-react-1"}
                     sx={linkSx}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <GitHubIcon fontSize="small" /> GitHub
                  </Link>

                  <IconBtnLink
                     to={setPath("", Routes.Options)}
                     size="small"
                     sx={{ p: 0, color: "primary.contrastText" }}
                  >
                     <SettingsIcon fontSize="small" />
                  </IconBtnLink>
               </Stack>
            </Stack>
         </Toolbar>
      </AppBar>
   )
}
