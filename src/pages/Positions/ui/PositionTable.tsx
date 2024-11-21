import { Executor, executorStore } from "@/entities/Executor"
import { positionStore } from "@/entities/Position"
import { useTablePagination } from "@/shared/lib"
import { theme } from "@/shared/theme/theme"
import {
   Paper,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
   Typography,
} from "@mui/material"

const getExecutorsAmountByPosition = (
   executors: Executor[] | undefined,
   positionId: string,
) => {
   if (!executors) return 0
   return executors.filter((executor) => executor.position?.id === positionId).length
}

type Props = {}
export const PositionTable = ({}: Props) => {
   const positions = positionStore.get()
   const executors = executorStore.get()

   if (!positions || !positions.length) {
      return <Typography>You haven't added any positions yet</Typography>
   }

   const { page, rowsPerPage, visibleRows, handleChangePage, handleChangeRowsPerPage } =
      useTablePagination(positions, 12)

   return (
      <Stack
         component={Paper}
         elevation={3}
         sx={{ flexGrow: 1, justifyContent: "space-between", overflow: "hidden" }}
      >
         <TableContainer>
            <Table>
               <TableHead sx={{ bgcolor: theme.palette.white.dark }}>
                  <TableRow>
                     <TableCell sx={{ py: 1 }}>Position</TableCell>
                     <TableCell sx={{ py: 1 }} align="right">
                        Executors
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {visibleRows.map((position, i) => (
                     <TableRow key={position.name + i} hover>
                        <TableCell>{position.name}</TableCell>
                        <TableCell align="right">
                           {getExecutorsAmountByPosition(executors?.data, position.id)}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[12, 25]}
            component="div"
            count={positions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Stack>
   )
}
