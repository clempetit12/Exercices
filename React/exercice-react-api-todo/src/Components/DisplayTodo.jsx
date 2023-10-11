import axios from 'axios';


const DisplayTodo = ({ todoList, setupTodoList }) => {

    console.log("display");
    console.log(todoList);


    const edit = (id) => {
    
        axios.put(`http://localhost:5000/todos/${id}`, { titre: "hello"})
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
                setupTodoList(prevTodo => prevTodo.filter(t=> t.id !== id))
            })
            .catch(error => {
                console.error("Erreur :", error)
            })
       

    }


    return (
        <>
            <div className="card mb-2 text-right"  >
                <div className="card-body row">
                    <div className="col-3 text-center">
                        {todoList.map((todo, index) => (
                            <li key={index}>{todo.titre} <button className="btn  btn-outline-warning" onClick={() => deleteTodo(todo.id)}>Delete</button>  <button className="btn btn-outline-success" onClick={() => edit(todo.id)} >Edit</button> </li>)

                        )}
                    </div>

                </div>

            </div>

        </>

    )
}

export default DisplayTodo