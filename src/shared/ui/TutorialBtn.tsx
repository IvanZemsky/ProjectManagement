import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import { optionsStorage } from "../model"

const options = optionsStorage.get()

type Props = {} & IconButtonProps
export const TutorialBtn = ({ ...props }: Props) => {
   if (!options?.tutorials) {
      return null
   }

   return (
      <Tooltip title="Tutorial">
         <IconButton sx={{ p: 0.5 }} {...props}>
            <ArticleOutlinedIcon />
         </IconButton>
      </Tooltip>
   )
}
