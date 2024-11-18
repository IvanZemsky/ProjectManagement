import { Routes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import { Navigate, useParams } from "react-router-dom"

export const Tasks = () => {
   const { projectId } = useParams()

   if (!projectId) return <Navigate to={setPath("", Routes.Projects)} replace/>

   return <Navigate to={setPath("", Routes.Projects, projectId)} replace/>
}
