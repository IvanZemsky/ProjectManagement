import { SxProps } from "@mui/material"
import { useLocation } from "react-router-dom"
import { useCheckYScroll } from "./useCheckYScroll"
import { RefObject } from "react"

const stickySx: SxProps = {
   position: "sticky",
   top: 0,
   left: 0,
   transition: "box-shadow 0.15s linear",
   zIndex: 799,
}

const stickyShadow: SxProps = {
   boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
}

export const useBreadcrumbs = (
   sticky: boolean,
   containerRef?: RefObject<HTMLElement>,
) => {
   const { pathname } = useLocation()
   const hasScroll = useCheckYScroll(1, containerRef)

   const initialSx: SxProps = {
      ...(sticky && stickySx),
      ...(sticky && hasScroll && stickyShadow),
   }

   const breadcrumbs = pathname.split("/").filter(Boolean)

   return { initialSx, breadcrumbs}
}
