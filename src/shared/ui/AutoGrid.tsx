import { Box, BoxProps } from "@mui/material"

type Props = {
   minItemWidth?: number | string
   maxItemWidth?: number | string
   spacing?: number | string
} & BoxProps

export const AutoGrid = ({
   minItemWidth = 'auto',
   maxItemWidth = "1fr",
   spacing = 0,
   children,
   sx,
   ...props
}: Props) => {
   return (
      <Box
         sx={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${minItemWidth}, ${maxItemWidth}))`,
            gap: spacing,
            ...sx,
         }}
         {...props}
      >
         {children}
      </Box>
   )
}
