import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import { IconButton, Tooltip } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { EditTaskForm } from "./EditTaskForm"
import { PointerEventHandler, useState } from "react"
import { Task, taskStore } from "@/entities/Task"

type Props = {
   id: string
   name: string
   onEditorClose?: (...args: any) => any
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
}
export const EditTaskBtn = ({ id, name, onEditorClose, onPointerDown }: Props) => {
   const [editedTask, setEditedTask] = useState<Task | null>(null)

   const handleEditorClose = () => {
      if (editedTask) {
         taskStore.update(id, editedTask)
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
            <EditTaskForm taskId={id} setEditedTask={setEditedTask} />
         </BaseModal>
      </>
   )
}