import { SxProps } from "@mui/material"

export type GetData<T> = {
   data: T[]
   totalCount: number
}

export type SxStyles<T extends string = string> = {
   [K in T | string]: SxProps
}

export type Options = {
   breadcrumbs: boolean
   tutorials: boolean
   menu: 'left' | 'right'
}
