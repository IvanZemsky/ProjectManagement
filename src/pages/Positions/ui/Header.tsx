import { useModal } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { BtnLink, PageHeader, TutorialBtn } from "@/shared/ui"
import { DescModal } from "./DescModal"

const { Create } = Routes

type Props = {}
export const Header = ({}: Props) => {
   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <PageHeader title="Positions">
         <TutorialBtn onClick={handleModalOpen} />
         <DescModal open={openModal} onClose={handleModalClose} />

         <BtnLink variant="contained" to={Create}>
            New
         </BtnLink>
      </PageHeader>
   )
}
