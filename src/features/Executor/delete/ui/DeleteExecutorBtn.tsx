import { setPath, useModal } from "@/shared/lib"
import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { PointerEventHandler } from "react"
import { DeleteExecutorDialog } from "./DeleteExecutorDialog"
import { Routes } from "@/shared/constants"
import { useNavigate } from "react-router-dom"

type Props = {
   id: string
   name: string
   onPointerDown?: PointerEventHandler<HTMLButtonElement>
   redirectOnDelete?: boolean
}
export const DeleteExecutorBtn = ({
   id,
   name,
   onPointerDown,
   redirectOnDelete = false,
}: Props) => {
   const navigate = useNavigate()

   const redirect = redirectOnDelete
      ? () => navigate(setPath("", Routes.Executors))
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
         <DeleteExecutorDialog
            executorId={id}
            executorName={name}
            open={openModal}
            onClose={handleModalClose}
            onDelete={redirect}
         />
      </>
   )
}
