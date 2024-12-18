import { defaultOptions, optionsStorage } from "@/shared/model"
import { theme } from "@/shared/theme"
import { Loader, PageBreadcrumbs } from "@/shared/ui"
import { Box, Grid2 as Grid, Stack } from "@mui/material"
import { Suspense, useMemo, useRef } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./common/Header/Header"
import { Navbar } from "./common/Navbar/Navbar"

export const RootLayout = () => {
   const scrollContainerRef = useRef<HTMLDivElement>(null)
   const options = useMemo(() => optionsStorage.get() || defaultOptions, [])

   return (
      <Stack sx={{ height: "100vh" }}>
         <Header />
         <Grid container size="grow" sx={{ flexWrap: "nowrap" }}>
            {options.menu !== "right" && <Navbar />}
            <Stack
               ref={scrollContainerRef}
               sx={{
                  flexGrow: 1,
                  overflow: "auto",
                  maxHeight: "calc(100vh - 40px)", // 40px - Header
               }}
            >
               {options.breadcrumbs && (
                  <PageBreadcrumbs
                     sticky
                     sx={{
                        pt: 0.5,
                        pr: 3,
                        pl: 2,
                        bgcolor: theme.palette.primary.contrastText,
                     }}
                     containerRef={scrollContainerRef}
                  />
               )}

               <Box
                  sx={{
                     p: 2,
                     pt: options.breadcrumbs ? 0.5 : 1.5,
                     pr: 3,
                     flexGrow: 1,
                     [theme.breakpoints.down("sm")]: { pr: 2 },
                  }}
               >
                  <Suspense fallback={<Loader size={50} />}>
                     <Outlet />
                  </Suspense>
               </Box>
            </Stack>
            {options.menu === "right" && <Navbar />}
         </Grid>
      </Stack>
   )
}
