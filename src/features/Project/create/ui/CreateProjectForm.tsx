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
import { useMemo, useState } from "react"
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
   const [dateError, setDateError] = useState(false)

   const navigate = useNavigate()

   const { register, handleSubmit, getValues } = form

   const executors = useMemo(() => executorStore.get(), [])

   const onSubmit = () => {
      const project: CreateProjectDto = {
         name: getValues("name"),
         description: getValues("description"),
         leadId: getValues("leadId"),
         startDate: getValues("startDate"),
         endDate: getValues("endDate"),
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
               {...register("name", {
                  required: true,
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
               {...register("startDate", {
                  required: true,
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
               {...register("endDate", {
                  required: true,
               })}
            />

            <Button variant="contained" type="submit" sx={{ alignSelf: "flex-start" }}>
               Create
            </Button>
         </Stack>
      </form>
   )
}
