import { executorStore } from "@/entities/Executor"
import { CreateProjectDto, projectStore } from "@/entities/Project"
import { Routes, SpecialValues } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   Stack,
   TextField,
} from "@mui/material"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type FormValues = {
   name: string
   description: string
   leadId: string
   startDate: string
   endDate: string
}

export const CreateProjectForm = () => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         description: "",
         leadId: SpecialValues.Unspecified,
         endDate: "",
         startDate: "",
      },
   })

   const navigate = useNavigate()

   const { register, handleSubmit, getValues, setError, clearErrors, formState } = form
   const { errors } = formState

   const executors = useMemo(() => executorStore.get(), [])

   const onSubmit = () => {
      const startDate = getValues("startDate")
      const endDate = getValues("endDate")

      if (new Date(startDate) > new Date(endDate)) {
         setError("endDate", {
            type: "validate",
            message: "End date cannot be earlier than start date.",
         })
         return
      }

      clearErrors("endDate")

      const project: CreateProjectDto = {
         name: getValues("name"),
         description: getValues("description"),
         leadId: getValues("leadId"),
         startDate,
         endDate,
      }

      const newProject = projectStore.create(project)
      if (newProject) {
         navigate("/" + setPath(Routes.Projects, newProject.id))
      }
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

            <FormControl fullWidth>
               <InputLabel id="project-lead-label">Lead</InputLabel>
               <Select
                  id="project-lead"
                  labelId="project-lead-label"
                  label="Lead"
                  defaultValue={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("leadId")}
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

            <Button variant="contained" type="submit" sx={{ alignSelf: "flex-start" }}>
               Create
            </Button>
         </Stack>
      </form>
   )
}
