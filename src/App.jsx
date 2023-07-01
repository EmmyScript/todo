import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const  App = () => {
   const [showAddTask, setShowAddTask] = useState(true)

const  [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'doctors appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true,

    },

    {
       id: 2,
        text: 'meeting at school',
        day: 'feb 6th at 5:30pm',
        reminder: true,  
    },

    {
        id: 3,
        text: 'food shopping',
        day: 'feb 7th at 1:30pm',
        reminder: false,

    },

   

 
   ])
   // Add Task
   const addTask = (task) => {
    const id = Math.floor(Math.random() *
    10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) 
   }

   // to delete Task
   const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
   }

   // Toggle Reminder
   const toggleReminder = (id) => {
    
    setTasks(tasks.map((task)=>task.id === id
    ? {...task, reminder: !task.reminder} : task))


   }
    return(

 <div className = 'container'>
    <Header onAdd={() => setShowAddTask
    (!showAddTask)}  
    showAdd = {showAddTask}
    />
   { showAddTask && <AddTask onAddNewText={addTask} />}
{tasks.length > 0 ? (
<Tasks tasks = {tasks}
onDelete ={deleteTask} onToggle={toggleReminder}/> ) : (

    'no task to show idoko'

)}
     
 </div>
  )
}

export default App