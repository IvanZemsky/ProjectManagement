import { Stack, SxProps } from "@mui/material"
import { Dispatch, PropsWithChildren, SetStateAction } from "react"
import { PageBtns } from "./PageBtns"

type Props = {
   totalCount: number
   limit: number
   currentPage: number
   setPage: Dispatch<SetStateAction<number>>
   sx?: SxProps
}

export const BaseList = ({
   totalCount,
   limit,
   currentPage,
   setPage,
   sx,
   children,
}: PropsWithChildren<Props>) => {
   return (
      <Stack spacing={2} sx={{ flexGrow: 1, justifyContent: "space-between", ...sx }}>
         {children}
         <PageBtns
            itemsCount={totalCount}
            limit={limit}
            currentPage={currentPage}
            setPage={setPage}
         />
      </Stack>
   )
}
