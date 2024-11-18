import { Breadcrumbs, Link, SxProps, Typography } from "@mui/material"
import { RefObject } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useBreadcrumbs } from "../lib/hooks/useBreadcrumbs"

const setBreadcrumb = (crumb: string, maxLength: number) => {
   return crumb.length >= maxLength ? crumb.substring(0, maxLength - 1) + "..." : crumb
}

const maxCrumbLength = 14

type Props = {
   sx?: SxProps
   sticky?: boolean
   containerRef?: RefObject<HTMLElement>
}

export const PageBreadcrumbs = ({ sticky = false, containerRef, sx }: Props) => {
   const { initialSx, breadcrumbs } = useBreadcrumbs(sticky, containerRef)
   let path = ""

   return (
      <Breadcrumbs aria-label="breadcrumb" sx={{ ...initialSx, ...sx }}>
         {breadcrumbs.map((crumb, i) => {
            const readyCrumb = setBreadcrumb(crumb, maxCrumbLength)
            path += `/${crumb}`

            if (i === breadcrumbs.length - 1) {
               return (
                  <Typography key={crumb + i} color="text.primary" sx={{ fontSize: 15 }}>
                     {readyCrumb}
                  </Typography>
               )
            }

            return (
               <Link
                  key={crumb + i}
                  component={RouterLink}
                  underline="hover"
                  color="inherit"
                  to={path}
                  sx={{ fontSize: 15 }}
               >
                  {readyCrumb}
               </Link>
            )
         })}
      </Breadcrumbs>
   )
}
