import { useDeleteDialog } from "@/shared/lib"
import { Button, IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { PointerEventHandler } from "react"
import { BaseDialog } from "@/shared/ui"
import { taskStore } from "@/entities/Task"

type Props = {
   id: string
   name: string
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
   redirectOnDelete?: string
}
export const DeleteTaskBtn = ({ id, name, onPointerDown, redirectOnDelete }: Props) => {
   const { dialog, handleDeleteClick } = useDeleteDialog(
      () => taskStore.delete(id),
      redirectOnDelete,
   )

   return (
      <>
         <Tooltip title="Delete">
            <IconButton
               size="small"
               onPointerDown={onPointerDown}
               onClick={dialog.handleModalOpen}
            >
               <DeleteIcon />
            </IconButton>
         </Tooltip>
         <BaseDialog
            title={`Are you sure you want to delete task '${name}'?`}
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
