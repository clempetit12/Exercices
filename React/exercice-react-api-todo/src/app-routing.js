import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./Components/ErrorPage"
import DisplayTodo from "./Components/DisplayTodo"
import FormTodo from "./Components/FormTodo"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
       
      {
        path: "/displaytodo",
        element: <DisplayTodo />
      },
      {
        path: "/formTodo",
        element: <FormTodo />
      },
      {
        path: "/display/edit/:contactId",
        element: <DisplayTodo />
      },
      {
        path: "/display/delete/:contactId",
        element: <DisplayTodo />
      },
    ]
  }
])

export default router