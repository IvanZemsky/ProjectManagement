import { Button, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import { MouseEventHandler, ReactNode } from "react"

type Props = {
   title: string
   open: boolean
   onClose: MouseEventHandler
   actionButtons: ReactNode
}
export const BaseDialog = ({ title, open, onClose, actionButtons }: Props) => {
   return (
      <Dialog open={open}>
         <Stack spacing={2} sx={{ p: 2 }}>
            <DialogTitle sx={{ p: 0, fontSize: 20 }}>{title}</DialogTitle>
            <DialogActions sx={{ p: 0, mt: 0 }}>
               <Button color="primary" variant="contained" onClick={onClose}>
                  Cancel
               </Button>
               {actionButtons}
            </DialogActions>
         </Stack>
      </Dialog>
   )
}
