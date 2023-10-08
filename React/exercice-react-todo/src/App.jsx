import FormTodoComponent from "./Components/FormTodoComponent";
import { TodoContext } from "./Contexts/TodoContext";
import { useState } from 'react'
import Task from "./Models/Task";
import DisplayTodoComponent from "./Components/DisplayTodoComponent";
import CrossComponent from "./Components/CrossComponent";


function App() {


  const [tasks, setTasks] = useState([])
  console.table(tasks);
  return (
    <TodoContext.Provider value={{ tasks, setTasks}}>
      <div className="container p-2">
      <FormTodoComponent />
      <h1>List of Tasks</h1>
      <hr />
        <div className="row mb-2">
          <div className="col-3">
          <th>TaskName</th>
          </div>
          <div className="col-3">
          <th>deadline</th>
          </div>
          <div className="col-3">
          <th>TaskStatus</th>
          </div>
          <div className="col-3">
          <th>Delete?</th>
          </div>
          </div>
      {tasks.map(task => (
        <>
        <DisplayTodoComponent key={task.idTask} idTodo={task.idTask}/>
         <CrossComponent />
        </>
        
      ))}
</div>
    </TodoContext.Provider>

  );
}

export default App;


