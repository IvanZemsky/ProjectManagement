import { Routes } from "./routes"
import {ReactNode} from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from '@mui/icons-material/Person';
import LanIcon from '@mui/icons-material/Lan';

const { Projects, Executors, Positions} = Routes

interface INavLink {
   to: string
   text: string
   icon: ReactNode
}

export const navLinks: INavLink[] = [
   {
      to: Projects,
      text: 'Projects',
      icon: <AssignmentIcon/>,
   },
   {
      to: Executors,
      text: 'Executors',
      icon: <PersonIcon/>,
   },
   {
      to: Positions,
      text: 'Positions',
      icon: <LanIcon/>,
   },
]