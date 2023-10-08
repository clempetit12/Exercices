import FormTodoComponent from "./Components/FormTodoComponent";
import { TodoContext } from "./Contexts/TodoContext";
import { useState } from 'react'
import Task from "./Models/Task";
import DisplayTodoComponent from "./Components/DisplayTodoComponent";



function App() {


  const [tasks, setTasks] = useState([])
  console.table(tasks);
  return (
    <TodoContext.Provider value={{ tasks, setTasks}}>
      <div className="container p-2">
      <FormTodoComponent />
      <h1>List of Tasks</h1>
      <hr />
        <div className="row mb-2 text-center">
          <div className="col-3">
          <span className="text-center"><b>TaskName</b></span>
          </div>
          <div className="col-3 text-center">
          <span className="text-center"><b>Deadline</b></span>
          </div>
          <div className="col-3 ">
          <span className="text-center"><b>TaskStatus</b></span>
          </div>
          <div className="col-3">
          <span className="text-center"><b>Delete ?</b></span>
          </div>
          </div>
      {tasks.map(task => (
        <>
        <DisplayTodoComponent key={task.idTask} idTodo={task.idTask}/>
    
        </>
        
      ))}
</div>
    </TodoContext.Provider>

  );
}

export default App;


