import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

import ButtonStatusComponent from "./ButtonStatutComponent"

const status = ['Not Started', 'In progress', 'Completeed']

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
                    <div className="col-3">
                        <span>{foundTask.name}</span>
                    </div>
                    <div className="col-3">
                        <span>{foundTask.deadline}</span>
                    </div>

                    <div className="col-3">
                        <ButtonStatusComponent taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
                    </div>
                    <div className="col-3">
                        {taskStatus === 'Completeed' && (
                         <  icon onClick={deleteTask} className="center">
                           <i class="bi bi-x text-danger "></i>
                       </icon>
                        
                        )}
                    </div>

                </div>
            </div>
        </>

    )
}


export default DisplayTodoComponent






