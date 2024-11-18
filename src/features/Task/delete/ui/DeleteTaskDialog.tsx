import { taskStore } from "@/entities/Task"
import { Button, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import { observer } from "mobx-react-lite"
import { MouseEventHandler } from "react"

type Props = {
   taskId: string
   taskName: string
   open: boolean
   onClose: MouseEventHandler
   onDelete?: ((...args: any) => any) | null
}
export const DeleteTaskDialog = observer(({
   taskId,
   taskName,
   open,
   onClose,
   onDelete,
}: Props) => {
   const handleDeleteClick = () => {
      taskStore.delete(taskId)
      onDelete && onDelete()
   }

   return (
      <Dialog open={open}>
         <Stack spacing={2} sx={{ p: 2 }}>
            <DialogTitle sx={{ p: 0, fontSize: 20 }}>
               Are you sure you want to delete task '{taskName}'?
            </DialogTitle>
            <DialogActions sx={{ p: 0, mt: 0 }}>
               <Button color="primary" variant="contained" onClick={onClose}>
                  Cancel
               </Button>
               <Button color="sensitive" variant="contained" onClick={handleDeleteClick}>
                  Delete
               </Button>
            </DialogActions>
         </Stack>
      </Dialog>
   )
})
