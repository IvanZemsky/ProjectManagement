import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./app/styles/reset.css";
import { router } from "./app";
import { theme } from "./shared/theme/theme";

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
   </ThemeProvider>
);
