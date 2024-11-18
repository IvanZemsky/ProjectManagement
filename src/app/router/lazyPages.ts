import { lazy } from "react"

export const Home = lazy(() => import("@/pages/Home"))
export const Projects = lazy(() => import("@/pages/Projects"))
export const Project = lazy(() => import("@/pages/Project"))
export const CreateProject = lazy(() => import("@/pages/CreateProject"))
export const CreateTask = lazy(() => import("@/pages/CreateTask"))
export const Executors = lazy(() => import("@/pages/Executors"))
export const CreateExecutor = lazy(() => import("@/pages/CreateExecutor"))
export const CreatePosition = lazy(() => import("@/pages/CreatePosition"))
export const Positions = lazy(() => import("@/pages/Positions"))
export const Options = lazy(() => import("@/pages/Options"))
export const Task = lazy(() => import("@/pages/Task"))
export const Tasks = lazy(() => import("@/pages/Tasks"))
