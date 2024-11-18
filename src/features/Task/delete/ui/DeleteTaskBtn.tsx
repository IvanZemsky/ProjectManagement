import { setPath, useModal } from "@/shared/lib"
import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { PointerEventHandler } from "react"
import { DeleteTaskDialog } from "./DeleteTaskDialog"
import { useNavigate } from "react-router-dom"
import { Routes } from "@/shared/constants"

type Props = {
   id: string
   name: string
   projectId?: string
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
   redirectOnDelete?: boolean
}
export const DeleteTaskBtn = ({
   id,
   projectId,
   name,
   onPointerDown,
   redirectOnDelete = false,
}: Props) => {
   const navigate = useNavigate()

   const redirect =
      redirectOnDelete && projectId
         ? () => navigate(setPath("", Routes.Projects, projectId))
         : null

   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <>
         <Tooltip title="Delete">
            <IconButton
               size="small"
               onPointerDown={onPointerDown}
               onClick={handleModalOpen}
            >
               <DeleteIcon />
            </IconButton>
         </Tooltip>
         <DeleteTaskDialog
            taskId={id}
            taskName={name}
            open={openModal}
            onClose={handleModalClose}
            onDelete={redirect}
         />
      </>
   )
}
