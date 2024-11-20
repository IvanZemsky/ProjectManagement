import { executorStore } from "@/entities/Executor"
import { Task, tasksColumns, taskStore, TaskStatus } from "@/entities/Task"
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
import { useParams } from "react-router-dom"

type FormValues = {
   name: string
   description: string
   assigneeId: string
   status: string
}

type Props = {
   taskId: string
   setEditedTask: Dispatch<SetStateAction<Task | null>>
}

export const EditTaskForm = ({ taskId, setEditedTask }: Props) => {
   const [isSaved, setIsSaved] = useState(false)
   const { projectId } = useParams()

   if (!projectId) return <Typography>Error</Typography>

   const editingTask = taskStore.getById(taskId)

   if (!editingTask) {
      return <Typography>Error</Typography>
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: editingTask.name,
         description: editingTask.description,
         assigneeId: editingTask.assignee?.id || SpecialValues.Unspecified,
         status: editingTask.status,
      },
   })

   const { register, handleSubmit, getValues, control, formState, reset } = form

   const executors = executorStore.get()

   const onSubmit = () => {
      const newValues = {
         name: getValues("name").trim(),
         description: getValues("description").trim(),
         assignee: executorStore.getById(getValues("assigneeId")),
         status: getValues("status") as TaskStatus,
      }

      const newTask: Task = {
         ...editingTask,
         ...newValues
      }

      setIsSaved(true)
      setEditedTask(newTask)
      reset(newValues)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <TextField
               id="task-name"
               label="Name"
               variant="filled"
               autoFocus
               sx={{ alignSelf: "flex-start", width: "100%" }}
               size="small"
               {...register("name", {
                  required: true,
               })}
            />

            <TextField
               id="task-description"
               label="Description"
               variant="filled"
               sx={{ alignSelf: "flex-start", width: "100%" }}
               size="small"
               multiline
               minRows={3}
               maxRows={3}
               {...register("description")}
            />

            <Controller
               control={control}
               name="assigneeId"
               render={({ field }) => (
                  <FormControl fullWidth>
                     <InputLabel id="task-assignee-label">Assignee</InputLabel>
                     <Select
                        id="task-assignee"
                        labelId="task-assignee-label"
                        label="Assignee"
                        {...field}
                        sx={{ alignSelf: "flex-start", width: "100%" }}
                     >
                        <MenuItem value={SpecialValues.Unspecified}>Unspecified</MenuItem>
                        {executors?.data.map((executor) => (
                           <MenuItem value={executor.id} key={executor.id}>
                              {executor.name}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               )}
            />

            <Controller
               control={control}
               name="status"
               render={({ field }) => (
                  <FormControl fullWidth>
                     <InputLabel id="task-status-label">Status</InputLabel>
                     <Select
                        id="task-status"
                        labelId="task-status-label"
                        label="Status"
                        {...field}
                        sx={{ alignSelf: "flex-start", width: "100%" }}
                     >
                        {tasksColumns.map((column) => (
                           <MenuItem key={column.id} value={column.id}>
                              {column.label}
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
