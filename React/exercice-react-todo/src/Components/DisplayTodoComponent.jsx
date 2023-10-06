import { useContext, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"
import ButtonStatusComponent from "./ButtonStatutComponent"
import { upload } from "@testing-library/user-event/dist/upload"


const DisplayTodoComponent = (props) => {
    const { idTodo, tasks } = props
    const { setTasks } = useContext(TodoContext)
    const context = useContext(TodoContext)
    const foundTask = context.tasks.find(t => t.idTask === idTodo)
    console.log(foundTask);



    const deleteTask = () => {
        const updatedList = context.tasks.filter((task) => task.idTask !== idTodo);
        setTasks(updatedList)
        console.table(updatedList);

    }

    return (
        <>


            <div className="card mb-2">
                <div className="card-body row">
                    <div className="col-2">
                        <span>{foundTask.name}</span>
                    </div>
                    <div className="col-2">
                        <span>{foundTask.deadline}</span>
                    </div>
                    <div className="col-2">
                        <span>{foundTask.completeed} </span>

                    </div>
                    <div className="col-2">
                        <ButtonStatusComponent />
                    </div>
                    <div className="col-2">
                        <span>{foundTask.completeed == "Completeed" ? (<button key={idTodo} onClick={deleteTask} className="btn btn-outline-danger">Delete</button>) : ("")} </span>
                    </div>






                </div>






            </div>




        </>

    )
}

export default DisplayTodoComponent





