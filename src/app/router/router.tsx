import { createHashRouter } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { Routes } from "@/shared/model"
import { setPath } from "@/shared/lib"
import { NotFoundPage } from "@/pages/NotFoundPage"
import {
   CreateExecutor,
   CreatePosition,
   CreateProject,
   CreateTask,
   Positions,
   Project,
   Projects,
   Options,
   Home,
   Task,
   Tasks,
   Executor,
   Executors
} from "./lazyPages"

export const router = createHashRouter([
   {
      path: Routes.Home,
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
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
            element: <Executor />
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
            element: <Tasks />
         },
         {
            path: setPath(Routes.Projects, ":projectId", Routes.Tasks, ":taskId"),
            element: <Task />,
         },
      ],
   },
])
