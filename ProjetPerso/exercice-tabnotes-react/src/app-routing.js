
import ErrorPage from "./Components/ErrorPage";
import TabNotes from "./Components/TabNotes";
import AddNote from "./Components/AddNote";
import AddMater from "./Components/AddMatter";
import AddStudent from "./Components/AddStudent";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <TabNotes /> },
          { path : "/addnote", element : <AddNote />},
          { path : "/addmater", element : <AddMater />},
          { path : "/addstudent", element : <AddStudent/>}
        
        ],
      },
    ]);
  

export default router