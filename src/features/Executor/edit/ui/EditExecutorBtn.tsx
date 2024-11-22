import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import { IconButton, Tooltip } from "@mui/material"
import { EditExecutorForm } from "./EditExecutorForm"
import { PointerEventHandler, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import { Executor, executorStore } from "@/entities/Executor"

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
