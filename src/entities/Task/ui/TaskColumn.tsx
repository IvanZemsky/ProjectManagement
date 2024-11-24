import { theme } from "@/shared/theme"
import { Stack, Typography } from "@mui/material"
import { TaskColumnData } from "../model/types"
import { useDroppable } from "@dnd-kit/core"
import { optionsStorage } from "@/shared/model"
import { PropsWithChildren } from "react"

const options = optionsStorage.get()

type Props = {
   column: TaskColumnData
   label: string
   tasksLength: number
}

export const TaskColumn = ({
   column,
   label,
   tasksLength,
   children,
}: PropsWithChildren<Props>) => {
   const { setNodeRef } = useDroppable({ id: column.id })

   return (
      <Stack
         spacing={1}
         sx={{
            height: "100%",
            bgcolor: theme.palette.white.dark,
            borderRadius: 1,
         }}
      >
         <Stack
            direction="row"
            sx={{
               position: "sticky",
               top: options?.breadcrumbs ? 23 : 1,
               bgcolor: "inherit",
               left: 0,
               p: 2,
               pb: "3px",
               borderRadius: "4px 4px 0 0",
               alignItems: "flex-end",
               justifyContent: "space-between",
               zIndex: 2,
               [theme.breakpoints.down("lg")]: {
                  position: "static",
               },
            }}
         >
            <Typography variant="h3">{label}</Typography>
            <Typography>{tasksLength}</Typography>
         </Stack>
         <Stack
            ref={setNodeRef}
            direction={{ lg: "column", xs: "row" }}
            spacing={2}
            sx={{
               overflow: "visible",
               p: 2,
               pt: 0,
               flexGrow: 1,
               [theme.breakpoints.down("lg")]: {
                  overflowX: "scroll",
               },
            }}
         >
            {children}
         </Stack>
      </Stack>
   )
}
