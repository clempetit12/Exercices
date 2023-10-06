import { useContext,useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext' 

const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {
 
 const {completeed} = props
    const context = useContext(TodoContext)
    const {idTodo, tasks} = props
    const foundTask = context.tasks.find(t => t.id === idTodo)

    const [taskStatus, setTaskStatus] = useState(completeed)

 

    const changeStatus = () => {
        console.log("change status");
        const currentIndex = status.indexOf(taskStatus);
        console.log(currentIndex);
        const newIndex = (currentIndex + 1) % status.length;
        console.log(newIndex);
        const newStatus = status[newIndex];
        console.log(newStatus);
        setTaskStatus(newStatus);
       
        
        
     
    }


    return (
        
        <button onClick={changeStatus} value={completeed} className='btn btn-outline-dark'>{taskStatus}</button>
    )
}

export default ButtonStatusComponent



