import { theme } from "@/shared/theme/theme"
import { Link, LinkProps, TableCell } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

type Props = {
   to: string
} & LinkProps

export const TableCellLink = ({ to, sx, children }: Props) => {
   return (
      <TableCell
         sx={{
            ":hover": { bgcolor: theme.palette.white.dark },
            cursor: "pointer",
            p: 0,
         }}
      >
         <Link
            component={RouterLink}
            to={to}
            sx={{ display: "block", p: 2, width: "100%", ...sx }}
         >
            {children}
         </Link>
      </TableCell>
   )
}
