import { createBrowserRouter } from "react-router-dom";

import Home from "./Components/Home";
import ItemDetails from "./Components/ItemsDetails";
import Basket from "./Components/Basket";
import FormAuth from "./Components/FormAuth";
import AddItemsSecure from "./Components/AddItemsSecure";
import ErrorPage from "./Components/ErroroPage";
import Menu from "./Components/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Home /> },
          {path : "/details/:id", element : <ItemDetails />},
          { path : "/basket", element : <Basket />},
          { path : "/formauth", element : <FormAuth />},
          { path : "/addItems", element : <FormAuth><AddItemsSecure/></FormAuth>}
        
        ],
      },
    ]);
  

export default router

