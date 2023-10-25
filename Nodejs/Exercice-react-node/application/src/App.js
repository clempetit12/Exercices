
import { useEffect, useState } from 'react';
import axios from "axios"


function App() {

  const [todos,setTodos] = useState([])
const [inputVisible, setInputVisible] = (false)

  const editHandler = () => {

  }
  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/todos`)
        .then(response => {
          console.log(response.data);
            setTodos(response.data)
            console.log(todos);
        })
    
        
}, [])


  return (
    <>
    <div>
      <h1>Todos</h1>
   
      { todos.length === 0 ? (
                <p>Il n'y a pas de todos</p>
              ) : todos.map((todo) =><div><li key={todo.id}>{todo.title}</li><button onClick={editHandler}>Edit</button></div> )  }
     

    </div>

    </>
  );

}

export default App;