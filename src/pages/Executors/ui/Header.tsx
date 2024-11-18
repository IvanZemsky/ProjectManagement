import { useModal } from "@/shared/lib"
import { BtnLink, TutorialBtn } from "@/shared/ui"
import { PageHeader } from "@/widgets/PageHeader"
import { DescModal } from "./DescModal"
import { Routes } from "@/shared/constants"

const { Create } = Routes

type Props = {}
export const Header = ({}: Props) => {
   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <PageHeader title="Executors">
         <TutorialBtn onClick={handleModalOpen} />
         <DescModal open={openModal} onClose={handleModalClose} />

         <BtnLink variant="contained" to={Create}>
            New
         </BtnLink>
      </PageHeader>
   )
}
