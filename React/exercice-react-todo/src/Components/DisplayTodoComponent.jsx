import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

import ButtonStatusComponent from "./ButtonStatutComponent"

const DisplayTodoComponent = (props) => {
    const { idTodo } = props
    const { tasks, setTasks } = useContext(TodoContext)

    const foundTask = tasks.find(t => t.idTask === idTodo)
    console.log("idTodo "+ idTodo);
    console.log("foundTask"+foundTask);

    const completeed = foundTask.completeed

    const [taskStatus, setTaskStatus] = useState(completeed)

    const deleteTask = () => {
        console.log("bouton delete");
        const updatedList = tasks.filter((task) => task.idTask !== idTodo);
        setTasks(updatedList)
        console.table(updatedList);


    }
    return (
        <>
            <div className="card mb-2 text-right"  >
                <div className="card-body row">
                   
                    <div className="col-3 text-center">
                        <span>{foundTask.name}</span>
                    </div>
                    <div className="col-3 text-center">
                        <span>{foundTask.deadline}</span>
                    </div>

                    <div className="col-3 text-center">
                        <ButtonStatusComponent taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
                    </div>
                    <div className="col-3 text-center">
                        {taskStatus === 'Completeed' && (
                         <icon onClick={deleteTask}>
                           <i class="bi bi-trash3-fill"></i>
                       </icon>
                        
                        )}
                    </div>

                </div>
            </div>
        </>

    )
}


export default DisplayTodoComponent






