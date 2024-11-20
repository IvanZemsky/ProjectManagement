import { useState } from "react"

export const useModal = (isOpen: boolean = false, onClose?: ((...args: any) => any) | null) => {
   const [openModal, setOpenModal] = useState(isOpen)

   const handleModalOpen = () => {
      setOpenModal(true)
   }

   const handleModalClose = () => {
      onClose && onClose()
      setOpenModal(false)
   }

   return { openModal, handleModalOpen, handleModalClose }
}
