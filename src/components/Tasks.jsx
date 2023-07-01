/*
import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (  
<>
{tasks.map((task) => (
 <Task key={task.id} task={task}
 onDelete={onDelete} 
 onToggle={onToggle}
 />   
))}
</>
    
  )
}

export default Tasks
*/

//task is to past the object



import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle}) => {
  return (
    <>
    {tasks.map((task) =>(
   <Task key={task.id} 
   task ={task} 
   onDelete = {onDelete}
   onToggle = {onToggle}
   
    />  
    ))}
    </>
  )
}

export default Tasks