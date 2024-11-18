import { SxProps } from "@mui/material"

type Transform = {
   x: number
   y: number
   scaleX: number
   scaleY: number
}

export const getTransformSx = (transform: Transform | null): SxProps | undefined => {
   if (!transform) return

   return {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
      zIndex: 20,
      cursor: "grabbing",
   }
}
