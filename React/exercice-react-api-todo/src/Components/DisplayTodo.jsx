import axios from 'axios';


const DisplayTodo = ({ todoList, setupTodoList }) => {

    console.log("display");
    console.log(todoList);


    const edit = (id) => {

        axios.put(`http://localhost:5000/todos/${id}`, { titre: "hello" })
            .then((response) => {
                console.log(response.data)
                const updatedContact = response.data
                setupTodoList((prev) =>
                    prev.map((todo) =>
                        todo.id === id ? updatedContact : todo
                    ))

            })
            .catch(error => {
                console.error("Erreur :", error)
            })
    }


    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/todos/${id}`)
            .then(() => {
                console.log("personne avec id  ")
                setupTodoList(prevTodo => prevTodo.filter(t => t.id !== id))
            })
            .catch(error => {
                console.error("Erreur :", error)
            })


    }


    return (

        <div className="card mb-2 text-right"  >
            <div className="card-body row"></div>

            {todoList.map((todo, index) => (
                <div className="container mb-2">
                    <div className="row">
                    <div className='col-8 ' >{todo.titre} </div> <div class="col-2 ">
                        <button className="btn  btn-outline-warning byn-sm" onClick={() => deleteTodo(todo.id)}> <i class="bi bi-trash3 "></i>Delete</button></div> 
                        <div className="col-2">
                        <button className="btn btn-outline-success" onClick={() => edit(todo.id)} > <i class="bi bi-pencil-fill"></i>Edit</button></div> </div>
                        </div>
                       
                           ))
                    
                          }
               
            </div >

        
    )
}

export default DisplayTodo