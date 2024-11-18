import { Dispatch, SetStateAction, type MouseEvent } from "react"

import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { Routes } from "@/shared/constants"
import { PageHeader } from "@/widgets/PageHeader"
import { AppStorage, useModal } from "@/shared/lib"
import { BtnLink, TutorialBtn } from "@/shared/ui"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"

import { View } from "../model/types"
import { DescModal } from "./DescModal"

const { Create } = Routes

type Props = {
   view: {
      value: View
      set: Dispatch<SetStateAction<View>>
   }
}

export const Header = ({ view }: Props) => {
   const handleViewChange = (_: MouseEvent<HTMLElement>, value: View) => {
      if (value === null || view.value === value) return

      view.set(value)
      AppStorage.set<View>("projectsView", value)
   }

   const { openModal, handleModalOpen, handleModalClose } = useModal(false)

   return (
      <PageHeader title="Projects">
         <TutorialBtn onClick={handleModalOpen} />
         <DescModal open={openModal} onClose={handleModalClose} />

         <BtnLink variant="contained" to={Create}>
            New
         </BtnLink>

         <ToggleButtonGroup
            color="primary"
            value={view.value}
            exclusive
            onChange={handleViewChange}
            sx={{ height: "38px" }}
         >
            <ToggleButton value="cards" aria-label="cards">
               <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="table" aria-label="table">
               <ViewListIcon />
            </ToggleButton>
         </ToggleButtonGroup>
      </PageHeader>
   )
}
