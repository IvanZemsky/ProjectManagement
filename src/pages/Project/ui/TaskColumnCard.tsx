import { Task, TaskCard } from "@/entities/Task"
import { EditTaskBtn } from "@/features/Task/edit"
import { useDraggable } from "@dnd-kit/core"
import { useState, PointerEvent } from "react"
import { getTransformSx } from "../lib/helpers/getTransformSx"
import { DeleteTaskBtn } from "@/features/Task/delete"
import { useMediaQuery } from "@mui/material"
import { theme } from "@/shared/theme"

type Props = {
   data: Task
   draggable: boolean
}
export const TaskColumnCard = ({ data, draggable }: Props) => {
   const isDragEnabledOnScreen = useMediaQuery(theme.breakpoints.up("lg")) && draggable
   const [isDragEnabled, setIsDragEnabled] = useState(isDragEnabledOnScreen)
   const { id } = data

   const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id,
      disabled: !isDragEnabled,
   })

   const transformSx = getTransformSx(transform)

   const handlePointerDown = (event: PointerEvent) => {
      event.stopPropagation()
      setIsDragEnabled(false)
   }

   const handleEditorClose = () => setIsDragEnabled(true)

   return (
      <TaskCard
         data={data}
         ref={setNodeRef}
         {...listeners}
         {...attributes}
         sx={{ cursor: isDragEnabled ? "grab" : "default", ...transformSx }}
         editBtn={
            <EditTaskBtn
               id={data.id}
               name={data.name}
               onPointerDown={handlePointerDown}
               onEditorClose={handleEditorClose}
            />
         }
         deleteBtn={
            <DeleteTaskBtn
               id={data.id}
               name={data.name}
               onPointerDown={handlePointerDown}
            />
         }
      />
   )
}
