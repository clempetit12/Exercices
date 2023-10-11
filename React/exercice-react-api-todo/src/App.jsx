import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayTodo from "./Components/DisplayTodo"
import FormTodo from './Components/FormTodo';




function App() {

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


  return (
<>
<div className="container">
<FormTodo setupTodoList={setupTodoList}/>
 <DisplayTodo  todoList={todoList} setupTodoList={setupTodoList}/>

</div>
  
<h1>Todo</h1>
   <hr />




</>


  
    
  );
}

export default App;
