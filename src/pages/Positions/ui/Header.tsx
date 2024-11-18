import { TutorialBtn, BtnLink } from "@/shared/ui"
import { PageHeader } from "@/widgets/PageHeader"
import { DescModal } from "./DescModal"
import { useModal } from "@/shared/lib"
import { Routes } from "@/shared/constants"

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
