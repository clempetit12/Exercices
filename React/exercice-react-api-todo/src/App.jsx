import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayTodo from './Components/DisplayTodo';


function App() {
  const navigate = useNavigate()
  const [todoList, setupTodoList] = useState([])

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
<h1>To do</h1>
<button className='btn btn-outline-danger' onClick={addContact}>Add Contact</button>
<Outlet/>
{todoList.length === 0 ? 
      <p>Il n'y a pas de contact dans la base de données !</p> : 
     <DisplayTodo todoList={todoList}/> }



</>
  )
}

export default App;
