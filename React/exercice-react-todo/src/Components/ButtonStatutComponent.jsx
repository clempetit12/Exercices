import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import DisplayTodoComponent from './DisplayTodoComponent'

const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {

    const { taskStatus, setTaskStatus, completeed, deleteTask} = props




   
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
        <button onClick={changeStatus} value={taskStatus} className='btn btn-outline-dark'>{taskStatus}</button>
      

        </>
            
            
    )
    }

export default ButtonStatusComponent



