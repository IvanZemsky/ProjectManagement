import { Position, positionStore } from "@/entities/Position"
import { Button, Stack, TextField, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
   name: string
   description: string
   assigneeId: string
   status: string
}

type Props = {
   positionId: string
   setEditedPosition: Dispatch<SetStateAction<Position | null>>
}

export const EditPositionForm = ({ positionId, setEditedPosition }: Props) => {
   const [isSaved, setIsSaved] = useState(false)

   if (!positionId) return <Typography>Error</Typography>

   const editingPosition = positionStore.getById(positionId)

   if (!editingPosition) {
      return <Typography>Error</Typography>
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: editingPosition.name,
      },
   })

   const { register, handleSubmit, formState, reset, getValues } = form

   const onSubmit = () => {
      const newPosition: Position = {
         ...editingPosition,
         name: getValues("name"),
      }

      setIsSaved(true)
      setEditedPosition(newPosition)
      reset(newPosition)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <TextField
               id="position-name"
               label="Name"
               variant="filled"
               autoFocus
               sx={{ alignSelf: "flex-start", width: "100%" }}
               size="small"
               {...register("name", {
                  required: true,
               })}
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
