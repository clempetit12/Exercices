import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

import ButtonStatusComponent from "./ButtonStatutComponent"
import { upload } from "@testing-library/user-event/dist/upload"
const status = ['Not Started', 'In progress', 'Completeed']

const DisplayTodoComponent = (props) => {
    const { idTodo, deteTaskCompleted, icon, taskStatus } = props
    const { setTasks, setTaskStatus } = useContext(TodoContext)
    const context = useContext(TodoContext)
    const foundTask = context.tasks.find(t => t.idTask === idTodo)
    console.log(foundTask);

    const [croix, setCroix] = useState("")


    const deleteTask = () => {
        const updatedList = context.tasks.filter((task) => task.idTask !== idTodo);
        setTasks(updatedList)
        console.table(updatedList);


    }
    const deleteTaskCompleted = () => {
        console.log("delee tassss");
    }


    return (
        <>


            <div className="card mb-2" >
            {foundTask.completeed === 'Completeed' && (
                        <icon onClick={deleteTask}>
                            <i class="bi bi-x text-danger"></i>
                        </icon>
                    )}
                <div className="card-body row">
                 
                    <div>{icon}</div>
                    <div className="col-3">
                        <span>{foundTask.name}</span>
                    </div>
                    <div className="col-3">
                        <span>{foundTask.deadline}</span>
                    </div>

                    <div className="col-3">

                        <ButtonStatusComponent completeed={foundTask.completeed} maFonction={deleteTaskCompleted} />

                    </div>
                    <div className="col-3">

                    </div>
                </div>
            </div>
        </>

    )
}


export default DisplayTodoComponent






