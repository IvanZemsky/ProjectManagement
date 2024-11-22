import { useModal } from "@/shared/lib"
import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { DeletePositionDialog } from "./DeletePositionDialog"

type Props = {
   id: string
   name: string
}
export const DeletePositionBtn = ({
   id,
   name,
}: Props) => {
   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <>
         <Tooltip title="Delete">
            <IconButton
               size="small"
               onClick={handleModalOpen}
            >
               <DeleteIcon />
            </IconButton>
         </Tooltip>
         <DeletePositionDialog
            positionId={id}
            positionName={name}
            open={openModal}
            onClose={handleModalClose}
         />
      </>
   )
}
