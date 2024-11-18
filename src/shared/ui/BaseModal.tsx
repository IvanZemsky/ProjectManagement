import { Fade, IconButton, Modal, Paper, Stack, Typography } from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { PropsWithChildren, useEffect } from "react"

type Props = {
   title: string
   open: boolean
   onClose: () => void
}

export const BaseModal = ({
   title,
   open,
   onClose,
   children,
}: PropsWithChildren<Props>) => {
   const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
         onClose()
      }
   }

   useEffect(() => {
      document.addEventListener("keydown", handleEscapeKeyPress)

      return () => {
         document.removeEventListener("keydown", handleEscapeKeyPress)
      }
   }, [])

   return (
      <Modal
         open={open}
         onClose={onClose}
         sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}
         onClick={(e) => e.stopPropagation()}
      >
         <Fade in={open}>
            <Stack
               component={Paper}
               elevation={3}
               spacing={1}
               sx={{ maxWidth: 600, width: "100%", margin: "0 auto", p: 2 }}
            >
               <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
               >
                  <Typography variant="h3">{title}</Typography>
                  <IconButton color="primary" size="small" onClick={onClose}>
                     <CloseRoundedIcon />
                  </IconButton>
               </Stack>
               {children}
            </Stack>
         </Fade>
      </Modal>
   )
}
