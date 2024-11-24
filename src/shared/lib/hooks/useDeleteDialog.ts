import { useNavigate } from "react-router-dom"
import { useModal } from "./useModal"

export const useDeleteDialog = (callback: () => any, navigateTo?: string) => {
   const navigate = useNavigate()

   const dialog = useModal(false)

   const handleDeleteClick = () => {
      callback()
      navigateTo && navigate(navigateTo)
   }

   return {
      dialog,
      handleDeleteClick,
   }
}
