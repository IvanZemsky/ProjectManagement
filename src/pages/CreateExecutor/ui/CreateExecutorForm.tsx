import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   TextField,
} from "@mui/material"
import { useForm } from "react-hook-form"

import { CreateExecutorDto, executorStore } from "@/entities/Executor"
import { positionStore } from "@/entities/Position"
import { Routes, SpecialValues } from "@/shared/model"
import { setPath } from "@/shared/lib"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"

type FormValues = {
   name: string
   position: string | null
}

type Props = {}
export const CreateExecutorForm = ({}: Props) => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         position: SpecialValues.Unspecified,
      },
   })

   const positions = useMemo(() => positionStore.get(), [])

   const navigate = useNavigate()

   const { register, handleSubmit, getValues } = form

   const onSubmit = () => {
      const executor: CreateExecutorDto = {
         name: getValues("name"),
         positionId: getValues("position"),
      }

      const newExecutor = executorStore.create(executor)
      if (newExecutor) {
         navigate(setPath("", Routes.Executors))
      }
   }

   return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
         <Stack spacing={3}>
            <TextField
               id="executor-name"
               label="Name"
               variant="filled"
               autoFocus
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("name", { maxLength: 35, required: true })}
            />

            <FormControl fullWidth>
               <InputLabel id="position-label">Lead</InputLabel>
               <Select
                  id="position"
                  labelId="position-label"
                  label="Lead"
                  defaultValue={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("position")}
               >
                  <MenuItem value={SpecialValues.Unspecified} selected>
                     Unspecified
                  </MenuItem>
                  {!!positions?.length &&
                     positions.map((position) => (
                        <MenuItem value={position.id} key={position.name}>
                           {position.name}
                        </MenuItem>
                     ))}
               </Select>
            </FormControl>

            <Button
               variant="contained"
               type="submit"
               size="large"
               sx={{ alignSelf: "flex-start" }}
            >
               Create
            </Button>
         </Stack>
      </form>
   )
}
