import {FaTrash} from "react-icons/fa"

const Task = ({ task,  onDelete, onToggle}) => {

    const handleToggle = ()=>{
        onToggle(task.id)
       
    }

    return (
        <div className= {`task ${task.reminder ? 'reminder' : ''}`}  onClick={handleToggle}
            >
            <h3> {task.text}
             <FaTrash size={20}
         style={{color: 'red',
        cursor: 'pointer'}}
        onClick ={() =>onDelete(task.id)} 
        />
        </h3> 
            <p>{task.day}</p>
        </div>
    )
}
export default Task
