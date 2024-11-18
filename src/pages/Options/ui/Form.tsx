import { defaultOptions, optionsStorage } from "@/shared/model"
import { Options } from "@/shared/model/types"
import {
   Button,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   Stack,
   Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"

export const Form = () => {
   const options = optionsStorage.get() || defaultOptions

   const form = useForm<Options>({
      defaultValues: options,
   })

   const { register, formState, control, handleSubmit, getValues, reset } = form
   const [isSaved, setIsSaved] = useState(false)

   useEffect(() => {
      if (formState.isDirty) {
         setIsSaved(false)
      }
   }, [formState.isDirty])

   const handleSetDefault = () => {
      optionsStorage.setDefault()
      reset(defaultOptions)
      setIsSaved(true)
   }

   const onSubmit = () => {
      const newOptions: Options = {
         breadcrumbs: getValues("breadcrumbs"),
         tutorials: getValues("tutorials"),
         menu: getValues("menu"),
      }

      optionsStorage.set(newOptions)
      setIsSaved(true)
      reset(newOptions)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Stack spacing={2}>
            <Stack>
               <Controller
                  name="breadcrumbs"
                  control={control}
                  render={({ field }) => (
                     <FormControlLabel
                        control={
                           <Checkbox {...field} checked={field.value} size="large" />
                        }
                        label="Page breadcrumbs"
                     />
                  )}
               />
               <Controller
                  name="tutorials"
                  control={control}
                  render={({ field }) => (
                     <FormControlLabel
                        control={
                           <Checkbox {...field} checked={field.value} size="large" />
                        }
                        label="Tutorials"
                     />
                  )}
               />
            </Stack>

            <FormControl>
               <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <FormLabel>Menu</FormLabel>
                  <Controller
                     name="menu"
                     control={control}
                     render={({ field }) => (
                        <RadioGroup {...field} row>
                           <FormControlLabel
                              value="left"
                              control={<Radio />}
                              label="Left"
                           />
                           <FormControlLabel
                              value="right"
                              control={<Radio />}
                              label="Right"
                           />
                        </RadioGroup>
                     )}
                  />
               </Stack>
            </FormControl>

            <Button
               variant="contained"
               size="small"
               onClick={handleSetDefault}
               sx={{ alignSelf: "flex-start" }}
            >
               Default settings
            </Button>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
               <Button variant="contained" disabled={!formState.isDirty} type="submit">
                  Save
               </Button>
               {isSaved && (
                  <Typography color="success">
                     Changes saved. Reload page to apply.
                  </Typography>
               )}
            </Stack>
         </Stack>
      </form>
   )
}
