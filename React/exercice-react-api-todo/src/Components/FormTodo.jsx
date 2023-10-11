import { useRef,useContext } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TodoContext from "../Context/TodoContext";

const FormTodo = () => {
    const taskNameReference = useRef()
    const navigate = useNavigate()

    const {todoList,setupTodoList} = useContext(TodoContext)
   

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const titre = taskNameReference.current.value
        console.table(todoList);
        axios.post("http://localhost:5000/todos",{titre})
        .then(response => {
          console.log(response.data)
          const newList = response.data
          setupTodoList((prevTodo=> [...prevTodo,newList]))
          console.table(todoList);
        
          console.log(todoList);
          
        })
        .catch(error => {
          console.error("Erreur :" ,error)
        })
        navigate("/")
     
       
 
    }
       

    return (

        <form action="#" onSubmit={onSubmitHandler}>
          
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

