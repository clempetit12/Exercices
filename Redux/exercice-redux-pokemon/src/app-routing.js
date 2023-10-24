import { createBrowserRouter } from "react-router-dom";



import App from "./App";
import PokeDetails from "./Pokedex/PokeDetails";
import PokeList from "./Pokedex/PokeList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <PokeList/> }, 
           { path: "/pokedetails/:id", element: <PokeDetails/> }, 
    
    
        ],
      },
    ]);
  

export default router