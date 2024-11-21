import { Executor, executorStore } from "@/entities/Executor"
import { TeamList } from "@/entities/Executor"
import { Task, taskStore } from "@/entities/Task"
import {
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
   Stack,
   Typography,
} from "@mui/material"
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react"

type Props = {
   taskId: string
   setEditedTask: Dispatch<SetStateAction<Task | null>>
}

export const EditTaskTeamForm = ({ taskId, setEditedTask }: Props) => {
   const [isSaved, setIsSaved] = useState(false)

   const task = taskStore.getById(taskId)
   const executors = executorStore.get()

   if (!task || !executors) {
      return <Typography>Error</Typography>
   }

   const taskTeam = executorStore.getManyById(task.team)

   const [team, setTeam] = useState<Executor[]>(taskTeam)

   const handleSelect = (event: SelectChangeEvent<string>) => {
      const selectedId = event.target.value
      const selectedExecutor = executorStore.getById(selectedId)
      if (selectedExecutor) {
         setTeam((prevTeam) => [...prevTeam, selectedExecutor])
      }
   }

   const handleRemoveExecutor = (executorId: string) => {
      setTeam(team.filter((executor) => executor.id !== executorId))
   }

   const availableExecutors = executors.data.filter(
      (executor) =>
         !team.some((member) => member.id === executor.id) &&
         executor.id !== task.assignee?.id,
   )

   useEffect(() => {
      setIsSaved(false)
   }, [team])

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault()
      const newTeam: string[] = team.map((executor) => executor.id)

      setEditedTask({ ...task, team: newTeam })
      setIsSaved(true)
   }

   return (
      <form noValidate onSubmit={handleSubmit}>
         <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
            <FormControl fullWidth>
               <InputLabel id="task-executor-label" size="small">
                  Executor
               </InputLabel>
               <Select
                  id="task-executor"
                  labelId="task-executor-label"
                  label="Executor"
                  size="small"
                  value=""
                  onChange={handleSelect}
                  disabled={!availableExecutors.length}
                  sx={{ alignSelf: "flex-start", width: "100%" }}
               >
                  {availableExecutors.map((executor) => (
                     <MenuItem value={executor.id} key={executor.id}>
                        {executor.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            {team.length ? (
               <TeamList team={team} onDelete={handleRemoveExecutor} links={false} />
            ) : (
               <Typography>Task team is empty now</Typography>
            )}
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
               <Button variant="contained" type="submit">
                  Save
               </Button>
               {isSaved && <Typography color="success">Changes saved.</Typography>}
            </Stack>
         </Stack>
      </form>
   )
}
