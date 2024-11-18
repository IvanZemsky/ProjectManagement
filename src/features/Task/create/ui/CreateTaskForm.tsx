import { executorStore } from "@/entities/Executor"
import { CreateTaskDto, tasksColumns, TaskStatus, taskStore } from "@/entities/Task"
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
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

type FormValues = {
   name: string
   description: string
   assigneeId: string
   status: string
}

export const CreateTaskForm = () => {
   const { projectId } = useParams()

   if (!projectId) {
      return <p>Error</p>
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         description: "",
         assigneeId: SpecialValues.Unspecified,
         status: "to do",
      },
   })

   const navigate = useNavigate()

   const { register, handleSubmit, getValues } = form

   const executors = executorStore.get()

   const onSubmit = () => {
      const task: CreateTaskDto = {
         projectId,
         name: getValues("name"),
         description: getValues("description"),
         assigneeId: getValues("assigneeId"),
         status: getValues("status") as TaskStatus,
      }

      const newTask = taskStore.create(task)
      if (newTask) {
         navigate(setPath("", Routes.Projects, newTask.projectId))
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <TextField
               id="task-name"
               label="Name"
               variant="filled"
               autoFocus
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("name", {
                  required: true,
               })}
            />

            <TextField
               id="task-description"
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
               <InputLabel id="task-assignee-label">Assignee</InputLabel>
               <Select
                  id="task-assignee"
                  labelId="task-assignee-label"
                  label="Assignee"
                  defaultValue={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("assigneeId")}
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

            <FormControl fullWidth>
               <InputLabel id="task-status-label">Status</InputLabel>
               <Select
                  id="task-status"
                  labelId="task-status-label"
                  label="Status"
                  defaultValue="to do"
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("status")}
               >
                  {tasksColumns.map((column) => (
                     <MenuItem
                        key={column.id}
                        value={column.id}
                        selected={column.id === "to do"}
                     >
                        {column.label}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>

            <Button variant="contained" type="submit" sx={{ alignSelf: "flex-start" }}>
               Create
            </Button>
         </Stack>
      </form>
   )
}
