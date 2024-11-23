import { projectStore } from "@/entities/Project"
import { Button, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import { observer } from "mobx-react-lite"
import { MouseEventHandler } from "react"

type Props = {
   projectId: string
   projectName: string
   open: boolean
   onClose: MouseEventHandler
   onDelete?: ((...args: any) => any) | null
}
export const DeleteProjectDialog = observer(({
   projectId,
   projectName,
   open,
   onClose,
   onDelete,
}: Props) => {
   const handleDeleteClick = () => {
      projectStore.delete(projectId)
      onDelete && onDelete()
   }

   return (
      <Dialog open={open}>
         <Stack spacing={2} sx={{ p: 2 }}>
            <DialogTitle sx={{ p: 0, fontSize: 20 }}>
               Are you sure you want to delete project '{projectName}'?
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
