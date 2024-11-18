import { BaseModal } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"

type Props = {
   open: boolean
   onClose: () => void
}

export const DescModal = ({ open, onClose }: Props) => {
   return (
      <BaseModal title="Tutorial" open={open} onClose={onClose}>
         <Stack spacing={1} sx={{pl: 0.5}}>
            <Typography>You can see all positions on this page.</Typography>
            <Typography>
               Position can be assigned to executor
            </Typography>
         </Stack>
      </BaseModal>
   )
}
