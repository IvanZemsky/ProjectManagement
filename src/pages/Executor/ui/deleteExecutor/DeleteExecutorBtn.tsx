import { useDeleteDialog } from "@/shared/lib"
import { Button, IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { BaseDialog } from "@/shared/ui"
import { executorStore } from "@/entities/Executor"

type Props = {
   id: string
   name: string
   redirectOnDelete?: string
}
export const DeleteExecutorBtn = ({ id, name, redirectOnDelete }: Props) => {
   const { dialog, handleDeleteClick } = useDeleteDialog(
      () => executorStore.delete(id),
      redirectOnDelete
   )

   return (
      <>
         <Tooltip title="Delete">
            <IconButton size="small" onClick={dialog.handleModalOpen}>
               <DeleteIcon />
            </IconButton>
         </Tooltip>

         <BaseDialog
            title={`Are you sure you want to delete executor '${name}'?`}
            open={dialog.openModal}
            onClose={dialog.handleModalClose}
            actionButtons={
               <Button color="sensitive" variant="contained" onClick={handleDeleteClick}>
                  Delete
               </Button>
            }
         />
      </>
   )
}
