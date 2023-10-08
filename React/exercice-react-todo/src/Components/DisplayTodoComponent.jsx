import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

import ButtonStatusComponent from "./ButtonStatutComponent"

const DisplayTodoComponent = (props) => {
    const { idTodo, icon } = props
    const { setTasks } = useContext(TodoContext)
    const context = useContext(TodoContext)
    const foundTask = context.tasks.find(t => t.idTask === idTodo)
    console.log(foundTask);

    const completeed = foundTask.completeed

    const [taskStatus, setTaskStatus] = useState(completeed)

    const deleteTask = () => {
        console.log("bouton delete");
        const updatedList = context.tasks.filter((task) => task.idTask !== idTodo);
        setTasks(updatedList)
        console.table(updatedList);


    }
    return (
        <>
            <div className="card mb-2 text-right"  >
                <div className="card-body row">
                    <div>{icon}</div>
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
                         <  icon onClick={deleteTask} >
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






