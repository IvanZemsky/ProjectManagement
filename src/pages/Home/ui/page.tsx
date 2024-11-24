import { Routes } from "@/shared/model"
import { BtnLink } from "@/shared/ui"
import { Stack, Typography } from "@mui/material"

import { styles } from "../model/styles"

const { Projects } = Routes

export const Home = () => {
   return (
      <Stack spacing={3} sx={styles.stack}>
         <Typography variant="h1" sx={styles.title}>
            Project Management System
         </Typography>
         <Typography variant="body1" sx={styles.info}>
            Welcome to your Project Management System, where you can efficiently organize,
            monitor, and achieve your project goals. Manage tasks, track progress, and
            collaborate with ease in one seamless platform.
         </Typography>
         <BtnLink variant="contained" color="primary" size="large" to={Projects}>
            Get Started
         </BtnLink>
      </Stack>
   )
}
