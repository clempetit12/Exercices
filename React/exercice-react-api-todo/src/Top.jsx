import { RouterProvider } from 'react-router-dom';
import router from './app-routing';
import { useState } from 'react';
import TodoContext from './Context/TodoContext';

function Top() {

    const [todoList, setupTodoList] = useState([])
 


  return (
    <TodoContext.Provider value={{todoList, setupTodoList}}>
      <RouterProvider router={router} />
      </TodoContext.Provider>
  );
}

export default Top;