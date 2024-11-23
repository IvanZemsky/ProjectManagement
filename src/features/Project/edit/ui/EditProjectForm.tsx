import { executorStore } from "@/entities/Executor"
import { Project, projectStore } from "@/entities/Project"
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

const formatDate = (date: string) => date.split(".").reverse().join("-")

type FormValues = {
   name: string
   description: string
   lead: string
   startDate: string
   endDate: string
}

type Props = {
   projectId: string
   setEditedProject: Dispatch<SetStateAction<Project | null>>
}

export const EditProjectForm = ({ projectId, setEditedProject }: Props) => {
   const [isSaved, setIsSaved] = useState(false)

   const editingProject = projectStore.getById(projectId)

   if (!editingProject) {
      return <Typography>Error</Typography>
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: editingProject.name,
         description: editingProject.description,
         lead: editingProject.lead?.id || SpecialValues.Unspecified,
         startDate: formatDate(editingProject.startDate),
         endDate: formatDate(editingProject.endDate),
      },
   })

   const {
      register,
      handleSubmit,
      getValues,
      setError,
      clearErrors,
      formState,
      reset,
      control,
   } = form
   const { errors } = formState

   const executors = executorStore.get()

   const onSubmit = () => {
      const startDate = getValues("startDate")
      const endDate = getValues("endDate")

      const newValues: FormValues = {
         name: getValues("name"),
         description: getValues("description"),
         lead: getValues("lead"),
         startDate,
         endDate,
      }

      if (new Date(startDate) > new Date(endDate)) {
         setError("endDate", {
            type: "validate",
            message: "End date cannot be earlier than start date.",
         })
         return
      }

      clearErrors("endDate")

      const newProject: Project = {
         ...editingProject,
         ...newValues,
         lead: executorStore.getById(newValues.lead),
      }

      setIsSaved(true)
      setEditedProject(newProject)
      reset(newValues)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <TextField
               id="project-name"
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               error={!!errors.name}
               helperText={errors.name?.message}
               {...register("name", {
                  required: "Name is required.",
               })}
            />

            <TextField
               id="project-description"
               label="Description"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               multiline
               minRows={3}
               maxRows={3}
               {...register("description")}
            />

            <Controller
               control={control}
               name="lead"
               render={({ field }) => (
                  <FormControl fullWidth>
                     <InputLabel id="project-lead-label">Lead</InputLabel>
                     <Select
                        id="project-lead"
                        labelId="project-lead-label"
                        label="Lead"
                        {...field}
                        sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                     >
                        <MenuItem value={SpecialValues.Unspecified} selected>
                           Unspecified
                        </MenuItem>
                        {!!executors?.data.length &&
                           executors.data.map((executor) => (
                              <MenuItem value={executor.id} key={executor.id}>
                                 {executor.name}
                              </MenuItem>
                           ))}
                     </Select>
                  </FormControl>
               )}
            />

            <TextField
               id="project-start-date"
               label="Start date"
               slotProps={{ inputLabel: { shrink: true } }}
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               type="date"
               error={!!errors.startDate}
               helperText={errors.startDate?.message}
               {...register("startDate", {
                  required: "Start date is required.",
               })}
            />

            <TextField
               id="project-end-date"
               label="End date"
               slotProps={{ inputLabel: { shrink: true } }}
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               type="date"
               error={!!errors.endDate}
               helperText={errors.endDate?.message}
               {...register("endDate", {
                  required: "End date is required.",
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
