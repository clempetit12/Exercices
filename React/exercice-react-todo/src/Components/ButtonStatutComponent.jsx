import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import DisplayTodoComponent from './DisplayTodoComponent'

const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {

    const { completeed, deleteTask, maFonction } = props
    const context = useContext(TodoContext)
    const { idTodo, tasks } = props
    const foundTask = context.tasks.find(t => t.id === idTodo)

    const [taskStatus, setTaskStatus] = useState(completeed)
    const [icon, setIcon] = useState("")



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
    useEffect(()=> {
        if(taskStatus == "Completeed"){
            console.log("delete");

           } else {
            console.log("nooo");
           }
    },[taskStatus])
     
     
    
    
      
    
        


    return (
        <>
        <button onClick={changeStatus == "Completeed" ? (<i class="bi bi-x"></i>):(changeStatus)} value={completeed} className='btn btn-outline-dark'>{taskStatus}</button>
       

        </>
            
            
    )
    }

export default ButtonStatusComponent



