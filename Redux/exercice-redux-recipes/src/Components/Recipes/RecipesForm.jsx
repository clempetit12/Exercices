
import { useRef } from "react"

import { adddRecipe } from "./recipeSlice"
import { useDispatch, useSelector } from "react-redux"
import { BASE_DB_URL } from "../../firebaseConfig"



const RecipeForm = () => {
    const user = useSelector(state => state.auth.user)
    const recipes = useSelector(state => state.recipe.recipes)
    const titleRef = useRef()
    const instructionsRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const ingredientsRef = useRef()
    const dispatch = useDispatch()



       

        const submitFormHandler = async (e) => {
            e.preventDefault()
            const title = titleRef.current.value
            const instructions = instructionsRef.current.value
            const cookTime = cookTimeRef.current.value
            const prepTime = prepTimeRef.current.value
            const ingredients = ingredientsRef.current.value
            const newRecipe = {id: Date.now(), title: title, instructions: instructions, cookTime: cookTime, prepTime: prepTime, ingredients: ingredients }
            if (user.idToken) {
                try {
                const response = await fetch(`${BASE_DB_URL}/recipelist.json?auth=${user.idToken}`, {
                    method: "POST",
                       headers: {
                        "Content-Type" : "application/json"
                       } ,
                       body: JSON.stringify(newRecipe)
                    })
                    if (!response.ok){
                        throw new Error("Something went wrong during ")
                    }
                    const data = await response.json()
                    console.log(data);
                    dispatch(adddRecipe(newRecipe))
                    console.log(recipes);
          
                }
            
            catch (error) {
                console.error(error.message)
            }


        }
    }
    

    return(
        <>
        <h1>Ajouter une recette
        </h1>
        <hr />
        <form action="" onSubmit={submitFormHandler}>
            <div>
            <input type="text" placeholder="title" ref={titleRef}/>
            </div>
           <div>
           <input type="text" placeholder="instructions"  ref={instructionsRef}/>
           </div>
           <div>
           <input type="text" placeholder="cookTime" ref={cookTimeRef} />
           </div>
           <div>
           <input type="text" placeholder="prepTime" ref={prepTimeRef} />
           </div>
          <div>
          <input type="text" placeholder="ingredients" ref={ingredientsRef}/>
          </div>
          <button>Add</button>
           
            

        </form>
        </>
    )
}


export default RecipeForm