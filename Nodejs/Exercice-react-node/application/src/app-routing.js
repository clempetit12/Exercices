import { createBrowserRouter } from "react-router-dom";



import App from "./App";

import PokeList from "./Components/PokeList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <PokeList/> }, 
      
    
    
        ],
      },
    ]);
  

export default router