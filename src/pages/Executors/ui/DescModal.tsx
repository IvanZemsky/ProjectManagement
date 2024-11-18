import { BaseModal } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"

type Props = {
   open: boolean
   onClose: () => void
}

export const DescModal = ({ open, onClose }: Props) => {
   return (
      <BaseModal title="Tutorial" open={open} onClose={onClose}>
         <Stack spacing={1} sx={{ pl: 0.5 }}>
            <Typography>You can see all added executors on this page.</Typography>
            <Typography>
               Every executor must have a name. Position of executor may not be specified.
               To assign a position, create it in position page
            </Typography>
            <Typography>Executor can be assigned as project and task lead</Typography>
         </Stack>
      </BaseModal>
   )
}
