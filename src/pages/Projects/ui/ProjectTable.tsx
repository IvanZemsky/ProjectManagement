import { projectStore } from "@/entities/Project"
import { useTablePagination } from "@/shared/lib"
import { theme } from "@/shared/theme/theme"
import { TableCellLink } from "@/shared/ui"
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
import { tableHeader } from "../model/table"

type Props = {}

const getTeamLength = (projectId: string) => projectStore.getTeam(projectId)?.length || 0

export const ProjectTable = ({}: Props) => {
   const projects = projectStore.get()

   if (!projects || !projects.data.length) {
      return <Typography>You haven't added any projects yet</Typography>
   }

   const { page, rowsPerPage, visibleRows, handleChangePage, handleChangeRowsPerPage } =
      useTablePagination(projects.data, 12)

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
                     {tableHeader.map((item) => (
                        <TableCell key={item.label} sx={{ py: 1 }} align={item.align}>
                           {item.label}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {visibleRows.map((project, i) => (
                     <TableRow key={project.name + i} hover>
                        <TableCellLink to={project.id}>{project.name}</TableCellLink>
                        <TableCell align="right">
                           {project.lead?.name || "Unspecified"}
                        </TableCell>
                        <TableCell align="right">{getTeamLength(project.id)}</TableCell>
                        <TableCell align="right">{project.startDate}</TableCell>
                        <TableCell align="right">{project.endDate}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[12, 25]}
            component="div"
            count={projects.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Stack>
   )
}
