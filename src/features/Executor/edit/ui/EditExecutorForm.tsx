import { Executor, executorStore } from "@/entities/Executor"
import { positionStore } from "@/entities/Position"
import { SpecialValues } from "@/shared/constants"
import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   TextField,
   Typography,
} from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { Controller, useForm } from "react-hook-form"

type FormValues = {
   name: string
   position: string
}

type Props = {
   executorId: string
   setEditedExecutor: Dispatch<SetStateAction<Executor | null>>
}

export const EditExecutorForm = ({ executorId, setEditedExecutor }: Props) => {
   const [isSaved, setIsSaved] = useState(false)

   const editingExecutor = executorStore.getById(executorId)

   if (!editingExecutor) {
      return <Typography>Error</Typography>
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: editingExecutor.name,
         position: editingExecutor.position?.id || SpecialValues.Unspecified,
      },
   })

   const { register, handleSubmit, getValues, control, formState, reset } = form

   const positions = positionStore.get()

   const onSubmit = () => {
      const newValues = {
         name: getValues("name").trim(),
         position: getValues("position"),
      }

      const newTask: Executor = {
         ...editingExecutor,
         name: newValues.name,
         position: positionStore.getById(newValues.position),
      }

      console.log(newValues, newTask)

      setIsSaved(true)
      setEditedExecutor(newTask)
      reset(newValues)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <TextField
               id="executor-name"
               label="Name"
               variant="filled"
               autoFocus
               sx={{ alignSelf: "flex-start", width: "100%" }}
               size="small"
               {...register("name", {
                  required: true,
               })}
            />

            <Controller
               control={control}
               name="position"
               render={({ field }) => (
                  <FormControl fullWidth>
                     <InputLabel id="position-label">Position</InputLabel>
                     <Select
                        id="position"
                        labelId="position-label"
                        label="Position"
                        {...field}
                        sx={{ alignSelf: "flex-start", width: "100%" }}
                     >
                        <MenuItem value={SpecialValues.Unspecified}>
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
               )}
            />

            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
               <Button variant="contained" disabled={!formState.isDirty} type="submit">
                  Save
               </Button>
               {isSaved && <Typography color="success">Changes saved.</Typography>}
            </Stack>
         </Stack>
      </form>
   )
}
