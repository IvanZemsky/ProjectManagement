import { Stack } from "@mui/material"

import { useState } from "react"
import { Header } from "./Header"
import { View } from "../model/types"
import { ProjectList } from "./ProjectList"
import { ProjectTable } from "./ProjectTable"
import { AppStorage } from "@/shared/lib"

const setDefaultView = () => AppStorage.get<View>("projectsView") || "cards"

export const Projects = () => {
   const [view, setView] = useState<View>(setDefaultView)

   return (
      <Stack sx={{ height: "100%" }}>
         <Header view={{ value: view, set: setView }} />
         {view === "cards" && <ProjectList />}
         {view === "table" && <ProjectTable />}
      </Stack>
   )
}
