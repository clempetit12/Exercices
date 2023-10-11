import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DisplayTodo from './Components/DisplayTodo';
import TodoContext from './Context/TodoContext';


function App() {
  const navigate = useNavigate()

const {todoList,setupTodoList} = useContext(TodoContext)

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
    .then(response => {
      console.log(response.data)
      const data = response.data
      setupTodoList(data)
     console.table(todoList);

    })
    .catch(error => {

      console.error("Erreur :" ,error)
    })
  },[])

  const addContact = () => {
    navigate("/formTodo")
  }

  return (
<>
<div className="container p-2">
<h1>To do</h1>
<button className='btn btn-outline-danger mb-2' onClick={addContact}>Add Contact</button>
<hr />
<h2>To do List</h2>
<Outlet/>
{todoList.length === 0 ? 
      <p>Il n'y a pas de contact dans la base de données !</p> : 
   todoList.map(t => <DisplayTodo todoList={todoList} setupTodoList={setupTodoList} idTodo={t.id}/> )   }

</div>




</>
  )
}

export default App;
