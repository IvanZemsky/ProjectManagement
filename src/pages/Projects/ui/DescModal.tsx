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
            <Typography>You can see all your projects on this page.</Typography>
            <Typography>
               You can also create new project. The main parts of project are its team
               and tasks.
            </Typography>
            <Typography>
               Team of a project is formed from executors. Team also includes lead of project if they are specified
            </Typography>
         </Stack>
      </BaseModal>
   )
}
