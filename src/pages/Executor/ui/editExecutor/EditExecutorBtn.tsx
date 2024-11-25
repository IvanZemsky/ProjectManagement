import { Executor, executorStore } from "@/entities/Executor"
import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import EditIcon from "@mui/icons-material/Edit"
import { IconButton, Tooltip } from "@mui/material"
import { PointerEventHandler, useState } from "react"
import { EditExecutorForm } from "./EditExecutorForm"

type Props = {
   id: string
   name: string
   onEditorClose?: (...args: any) => any
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
}

export const EditExecutorBtn = ({ id, name, onEditorClose, onPointerDown }: Props) => {
   const [editedExecutor, setEditedExecutor] = useState<Executor | null>(null)

   const handleEditorClose = () => {
      if (editedExecutor) {
         executorStore.update(editedExecutor)
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
            title={`Edit task '${name}'`}
            open={openModal}
            onClose={handleModalClose}
         >
            <EditExecutorForm executorId={id} setEditedExecutor={setEditedExecutor} />
         </BaseModal>
      </>
   )
}
