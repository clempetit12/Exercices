import { useContext,useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext' 

const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {
 
    const context = useContext(TodoContext)
    const {idTodo, tasks} = props
    const foundTask = context.tasks.find(t => t.id === idTodo)


    const [taskStatus, setTaskStatus] = useState(foundTask.completeed);

    const changeStatus = () => {
        console.log("change status");
        const currentIndex = status.indexOf(taskStatus);
        console.log(currentIndex);
        const newIndex = (currentIndex + 1) % status.length;
        const newStatus = status[newIndex];
        setTaskStatus(newStatus);
     
    }


    return (
        
        <button onClick={changeStatus} className='btn btn-outline-dark'>Task Status</button>
    )
}

export default ButtonStatusComponent



