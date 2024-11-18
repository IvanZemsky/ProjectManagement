import { Stack, Button, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

type Props = {
   currentPage: number
   setPage: Dispatch<SetStateAction<number>>
   itemsCount: number
   limit: number
   sx?: SxProps
}

export const PageBtns = ({ itemsCount, limit, currentPage, setPage, sx }: Props) => {
   const pageAmount = Math.ceil(itemsCount / limit)
   const pages = Array.from({ length: pageAmount }, (_, item) => item + 1)

   const handlePageClick = (page: number) => () => {
      setPage(page)
   }

   return (
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", ...sx }}>
         {pages.map((page) => (
            <Button
               variant={currentPage === page ? "contained" : "outlined"}
               sx={{ minWidth: 0 }}
               key={page}
               onClick={handlePageClick(page)}
            >
               {page}
            </Button>
         ))}
      </Stack>
   )
}
