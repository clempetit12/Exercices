import { createBrowserRouter } from "react-router-dom";
import Accueil from "./routes/Accueil";
import ErrorPage from "./routes/ErrorPage";
import Menu from "./routes/Menu";
import Contacts from "./routes/Contacts";
import FormContact from "./routes/FormContact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Accueil /> },
      {path: "/contacts/:param?", element: <Contacts/>},
      {path: "/formContact", element: <FormContact/>}
    
    ],
  },
]);

export default router;
