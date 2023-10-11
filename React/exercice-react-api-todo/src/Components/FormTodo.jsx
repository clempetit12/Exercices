import { useRef } from "react"
import axios from 'axios';

const FormTodo = (props) => {
    const taskNameReference = useRef()

    const {todoList, setupTodoList} = props

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const titre = taskNameReference.current.value
        console.table(todoList);
        axios.post("http://localhost:5000/todos",{titre})
        .then(response => {
          console.log(response.data)
          const newList = response.data
          setupTodoList((prevTodo=> [...prevTodo,newList]))
        })
        .catch(error => {
          console.error("Erreur :" ,error)
        })
 
    }
       

    return (

        <form action="#" onSubmit={onSubmitHandler}>
             <h1>To do </h1>
             <hr />
            <div className="input-group mb-3">
                <input type="text" className="form-control"placeholder="Name of the Task" ref={taskNameReference} required />
            
            </div>
            <div>
                <button className="btn mt-2 mb-2 btn-outline-dark">Submit</button>
            </div>

        </form>
    )
}

export default FormTodo