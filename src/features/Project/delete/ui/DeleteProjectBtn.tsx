import { useDeleteDialog } from "@/shared/lib"
import { Button, IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { projectStore } from "@/entities/Project"
import { BaseDialog } from "@/shared/ui"

type Props = {
   id: string
   name: string
   redirectOnDelete?: string
}
export const DeleteProjectBtn = ({ id, name, redirectOnDelete }: Props) => {
   const { dialog, handleDeleteClick } = useDeleteDialog(
      () => projectStore.delete(id),
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
            title={`Are you sure you want to delete project '${name}'?`}
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
