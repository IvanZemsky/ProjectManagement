import { Position, positionStore } from "@/entities/Position"
import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Tooltip } from "@mui/material"
import { PointerEventHandler, useState } from "react"
import { EditPositionForm } from "./EditPositionForm"

type Props = {
   id: string
   name: string
   onEditorClose?: (...args: any) => any
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
}

export const EditPositionBtn = ({ id, name, onEditorClose, onPointerDown }: Props) => {
   const [editedPosition, setEditedPosition] = useState<Position | null>(null)

   const handleEditorClose = () => {
      if (editedPosition) {
         positionStore.update(editedPosition)
      }
      onEditorClose && onEditorClose()
   }

   const { openModal, handleModalOpen, handleModalClose } = useModal(
      false,
      handleEditorClose,
   )

   return (
      <>
         <Tooltip title="Edit">
            <IconButton
               size="small"
               onPointerDown={onPointerDown}
               onClick={handleModalOpen}
            >
               <EditIcon />
            </IconButton>
         </Tooltip>
         <BaseModal
            title={`Edit position '${name}'`}
            open={openModal}
            onClose={handleModalClose}
         >
            <EditPositionForm positionId={id} setEditedPosition={setEditedPosition} />
         </BaseModal>
      </>
   )
}
