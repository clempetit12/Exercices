import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import DisplayTodoComponent from './DisplayTodoComponent'

const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {

    const { completeed, deleteTask} = props


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
    useEffect(()=> {
        if(taskStatus == "Completeed"){
            console.log("delete");
           } else {
            console.log("nooo");
           }
    },[taskStatus])
     

    return (
        <>
        <button onClick={changeStatus} value={completeed} className='btn btn-outline-dark'>{taskStatus}</button>
        {(taskStatus)  === 'Completeed' && (
                        <icon onClick={deleteTask} className="center">
                            <i class="bi bi-x text-danger "></i>
                        </icon>
                    )}

        </>
            
            
    )
    }

export default ButtonStatusComponent



