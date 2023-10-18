import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { removeUser } from "../auth/authSlice"
import { useEffect } from "react"
import axios from "axios"
import { BASE_DB_URL } from "../../firebaseConfig"
import { adddRecipe, fetchData } from "./recipeSlice"
import RecipeItem from "./RecipeItem"

const RecipeList = () => {

    const recipes = useSelector(state => state.recipe.recipes)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    
useEffect(() => {
    axios.get(`${BASE_DB_URL}/recipelist.json`)
    .then(response => {
      console.log(response.data)
      console.log("useeffect");
      const tab = []
      for (let key in response.data ){
        console.log(response.data[key]);
        tab.push(response.data[key])
       
      }
      dispatch(fetchData(tab))
      console.log(recipes);

    })
    .catch(error => {

      console.error("Erreur :", error)
    })
}, [])
   


  




    return(
        <>
        <h1 className="display-5">Recipe List</h1>
        {user ? (<div><NavLink to={"/addRecipe"} type="button" className="btn btn-success">Add</NavLink> <button onClick={() => dispatch(removeUser())}>Déconnexion</button></div>) : ""}
        <hr />
           {Array.isArray(recipes) ? recipes.map((recipe,key) =>(<RecipeItem recipe={recipe} key={key} idRecipe={recipe.id}/>)) : null}
          
        <hr />

        </>
    )
}

export default RecipeList