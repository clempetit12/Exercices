import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import RecipeForm from "./Recipes/RecipesForm";
import RecipeList from "./Recipes/RecipesList";
import SignForm from "./auth/SignForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          { path: "/", element: <RecipeList /> },
          { path: "/signform", element: <SignForm /> },
          {path : "/addRecipe", element : <RecipeForm/>},
    
        ],
      },
    ]);
  

export default router