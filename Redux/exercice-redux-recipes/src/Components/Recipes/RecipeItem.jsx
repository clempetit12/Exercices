import { useDispatch, useSelector } from "react-redux"
import { deleteRecipe } from "./recipeSlice"
import axios from "axios"
import { BASE_DB_URL } from "../../firebaseConfig"

const RecipeItem = (props) => {

    const recipe = props.recipe
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const deleteHandle = () => {
       /*  axios.delete(`${BASE_DB_URL}/recipelist.json?auth=${user.idToken}`) */
       /* axios.delete(`${BASE_DB_URL}/recipelist/${}`)
       .then(response => {
        console.log(response.data)
        console.log("delete");
  
      })
      .catch(error => {
  
        console.error("Erreur :", error)
      })
      */
    }



    return (
        <>
            <div className="card row">
                <div className="card-header g-4 row">
                    <div className="col-4">
                        {recipe.title}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger">{recipe.prepTime}</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-warning">{recipe.cookTime}</button>
                    </div>

                </div>
                <hr />
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <h4>Ingredient</h4>
                            <hr />
                            {recipe.ingredients}
                        </div>
                        <div className="col-8">
                            <h4>Instructions</h4>
                            <hr />
                            {recipe.instructions}

                            <div>
                                <hr />
                                <button className="btn btn-warning">Edit</button>
                                <button onClick={() => deleteHandle()} className="btn btn-danger" >Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default RecipeItem