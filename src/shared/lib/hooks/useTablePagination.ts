import { ChangeEvent, useMemo, useState } from "react"

export const useTablePagination = <T>(data: T[], initialRowsPerPage: number) => {
   const [page, setPage] = useState(0)
   const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

   const visibleRows = useMemo(
      () => [...data].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      [data, page, rowsPerPage],
   )

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage)
   }

   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
   }

   return {page, rowsPerPage, visibleRows, handleChangePage, handleChangeRowsPerPage}
}