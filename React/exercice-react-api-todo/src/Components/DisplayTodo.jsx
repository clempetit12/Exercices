import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TodoContext from '../Context/TodoContext';


const DisplayTodo = (props) => {

    const { todoList, setupTodoList } = useContext(TodoContext)
    const { idTodo } = props
    console.log("display");
    console.log(todoList);
    const navigate = useNavigate()

    const foundTodo = todoList.find(t => t.id === idTodo)
    console.log(foundTodo);
    const [isInputVisible, setInputVisible] = useState(false);
    const updatedDataRef = useRef()

    const edit = () => {
        setInputVisible(true)
    }


    const deleteTodo = () => {
        axios.delete(`http://localhost:5000/todos/${idTodo}`)
            .then(() => {
                console.log("personne avec id  ")
                setupTodoList(prevTodo => prevTodo.filter(t => t.id !== idTodo))
                navigate("/")
            })
            .catch(error => {
                console.error("Erreur :", error)
            })


    }

    const handleData = () => {
        const updatedData = updatedDataRef.current.value
        axios.put(`http://localhost:5000/todos/${idTodo}`, { titre: updatedData })
            .then((response) => {
                console.log(response.data)
                setupTodoList((prev) => prev.map((todo) => todo.id === idTodo ?
                    { titre: updatedData } : todo))
                    navigate("/")

            })


            .catch(error => {
                console.error("Erreur :", error)
            })
        setInputVisible(false)



    }


    return (

        <div className="card mb-2 text-right"  >
            <div className="card-body row"></div>
            <div className="container mb-2">
                <div className="row">
                    <div className="col-7">
                        {foundTodo.titre}
                    </div>
                    <div class="col-3 text-center ">
                        <button className='btn btn-outline-danger' onClick={deleteTodo}>Delete <i className="bi bi-trash"></i></button>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-outline-success' onClick={edit}>Edit <i class="bi bi-pencil"></i></button>
                        {isInputVisible && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Saisissez quelque chose"
                                    ref={updatedDataRef}


                                />
                                <button className='btn btn-outline-primary' onClick={handleData}>Confirmer</button>

                            </>

                        )}
                    </div>
                </div>

            </div>


        </div >


    )
}

export default DisplayTodo
