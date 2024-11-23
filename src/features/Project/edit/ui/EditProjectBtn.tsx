import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import { IconButton, Tooltip } from "@mui/material"
import { EditProjectForm } from "./EditProjectForm"
import { PointerEventHandler, useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import { Project, projectStore } from "@/entities/Project"

type Props = {
   id: string
   name: string
   onEditorClose?: (...args: any) => any
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
}

export const EditProjectBtn = ({ id, name, onEditorClose, onPointerDown }: Props) => {
   const [editedProject, setEditedProject] = useState<Project | null>(null)

   const handleEditorClose = () => {
      if (editedProject) {
         projectStore.update(editedProject)
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
            title={`Edit project '${name}'`}
            open={openModal}
            onClose={handleModalClose}
         >
            <EditProjectForm projectId={id} setEditedProject={setEditedProject} />
         </BaseModal>
      </>
   )
}
