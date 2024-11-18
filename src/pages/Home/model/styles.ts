import { SxStyles } from "@/shared/model"
import { theme } from "@/shared/theme"

export const styles: SxStyles<"stack" | "title" | "info"> = {
   stack: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      pr: 10,
      [theme.breakpoints.down("lg")]: {
         pr: 0,
      },
   },
   title: {
      fontSize: "3rem",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         fontSize: "2rem",
      },
   },
   info: {
      fontSize: "1.2rem",
      textAlign: "center",
      maxWidth: "600px",
      [theme.breakpoints.down("sm")]: {
         fontSize: "1rem",
      },
   },
}
