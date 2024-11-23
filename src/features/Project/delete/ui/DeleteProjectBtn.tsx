import { setPath, useModal } from "@/shared/lib"
import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { DeleteProjectDialog } from "./DeleteProjectDialog"
import { Routes } from "@/shared/constants"
import { useNavigate } from "react-router-dom"

type Props = {
   id: string
   name: string
   redirectOnDelete?: boolean
}
export const DeleteProjectBtn = ({ id, name, redirectOnDelete = false }: Props) => {
   const navigate = useNavigate()

   const redirect = redirectOnDelete ? () => navigate(setPath("", Routes.Projects)) : null

   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <>
         <Tooltip title="Delete">
            <IconButton size="small" onClick={handleModalOpen}>
               <DeleteIcon />
            </IconButton>
         </Tooltip>
         <DeleteProjectDialog
            projectId={id}
            projectName={name}
            open={openModal}
            onClose={handleModalClose}
            onDelete={redirect}
         />
      </>
   )
}
