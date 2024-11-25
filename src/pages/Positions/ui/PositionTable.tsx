import { Executor, executorStore } from "@/entities/Executor"
import { positionStore } from "@/entities/Position"
import { useTablePagination } from "@/shared/lib"
import { theme } from "@/shared/theme"
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
import { observer } from "mobx-react-lite"
import { DeletePositionBtn } from "./deletePosition/DeletePositionBtn"
import { EditPositionBtn } from "./editPosition/EditPositionBtn"

const getExecutorsAmountByPosition = (
   executors: Executor[] | undefined,
   positionId: string,
) => {
   if (!executors) return 0
   return executors.filter((executor) => executor.position?.id === positionId).length
}

type Props = {}
export const PositionTable = observer(({}: Props) => {
   const positions = positionStore.get()
   const executors = executorStore.get()

   const { page, rowsPerPage, visibleRows, handleChangePage, handleChangeRowsPerPage } =
      useTablePagination(positions, 12)

   if (!positions || !positions.length) {
      return <Typography>You haven't added any positions yet</Typography>
   }

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
                     <TableCell sx={{ width: "10px", p: 0.5 }} />
                     <TableCell sx={{ width: "10px", p: 0.5 }} />
                  </TableRow>
               </TableHead>
               <TableBody>
                  {visibleRows.map((position, i) => (
                     <TableRow key={position.name + i} hover>
                        <TableCell>{position.name}</TableCell>
                        <TableCell align="right">
                           {getExecutorsAmountByPosition(executors?.data, position.id)}
                        </TableCell>
                        <TableCell sx={{ width: "10px", p: 0.5 }}>
                           <EditPositionBtn id={position.id} name={position.name} />
                        </TableCell>
                        <TableCell sx={{ width: "10px", p: 0.5 }}>
                           <DeletePositionBtn id={position.id} name={position.name} />
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
})
