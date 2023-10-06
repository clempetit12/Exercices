import { useRef, useContext } from "react"
import Task from "../Models/Task"
import { TodoContext } from "../Contexts/TodoContext"

const status = ['Not Started', 'In progress', 'Completeed']

const FormTodoComponent = () => {



    const {setTasks} = useContext(TodoContext)

    const taskNameReference = useRef()
    const deadlineReference = useRef()
    const completeedReference = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const taskName = taskNameReference.current.value
        const deadline = deadlineReference.current.value
        const completeed = completeedReference.current.value

        const newTask = new Task(taskName,deadline,completeed)
        setTasks((prevTasks=> [...prevTasks,newTask]))
     
    }
    return (
       
        <form action="#" onSubmit={onSubmitHandler}>
             <h1>To do </h1>
             <hr />
            <div className="input-group mb-3">
                <input type="text" className="form-control"placeholder="Name of the Task" ref={taskNameReference} required />
                <input type="date" className="form-control" placeholder="Deadline" ref={deadlineReference} required />
                < select id="task" className="form-control" ref={completeedReference}>
                <option value="">Select an options</option>
                    {status.map((s) => (
                        <option value={s}>{s}</option>
                    ))}
                </select>
            </div>
            <div>
                <button className="btn mt-2 mb-2 btn-outline-dark">Submit</button>
            </div>

        </form>

    )
}

export default FormTodoComponent