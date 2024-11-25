import { NotFoundPage } from "@/pages/NotFoundPage"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { createHashRouter } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import {
   CreateExecutor,
   CreatePosition,
   CreateProject,
   CreateTask,
   Executor,
   Executors,
   Home,
   Options,
   Positions,
   Project,
   Projects,
   Task,
   Tasks,
} from "./lazyPages"

export const router = createHashRouter([
   {
      path: Routes.Home,
      element: <RootLayout />,
      children: [
         {
            path: "*",
            element: <NotFoundPage />,
         },
         {
            path: Routes.Home,
            element: <Home />,
         },
         {
            path: Routes.Options,
            element: <Options />,
         },
         {
            path: Routes.Projects,
            element: <Projects />,
         },
         {
            path: setPath(Routes.Projects, ":projectId"),
            element: <Project />,
         },
         {
            path: setPath(Routes.Projects, ":projectId", "create-task"),
            element: <CreateTask />,
         },
         {
            path: setPath(Routes.Executors, ":executorId"),
            element: <Executor />,
         },
         {
            path: setPath(Routes.Projects, Routes.Create),
            element: <CreateProject />,
         },
         {
            path: Routes.Executors,
            element: <Executors />,
         },
         {
            path: setPath(Routes.Executors, Routes.Create),
            element: <CreateExecutor />,
         },
         {
            path: Routes.Positions,
            element: <Positions />,
         },
         {
            path: setPath(Routes.Positions, Routes.Create),
            element: <CreatePosition />,
         },
         {
            path: setPath(Routes.Projects, ":projectId", Routes.Tasks),
            element: <Tasks />,
         },
         {
            path: setPath(Routes.Projects, ":projectId", Routes.Tasks, ":taskId"),
            element: <Task />,
         },
      ],
   },
])
