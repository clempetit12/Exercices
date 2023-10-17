import { useDispatch, useSelector } from "react-redux"
import { deleteRecipe } from "./recipeSlice"
import axios from "axios"
import { BASE_DB_URL } from "../../firebaseConfig"

const RecipeItem = (props) => {

    const idRecipe = props.idRecipe
    const recipe = props.recipe
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const deleteHandle = (idRecipe) => {
        axios.get(`${BASE_DB_URL}/recipelist.json?auth=${user.idToken}`)
          .then(response => {
            const data = response.data;
            for (let key in data) {
              if (data[key].id === idRecipe) {
                axios.delete(`${BASE_DB_URL}/recipelist/${key}.json?auth=${user.idToken}`)
                  .then(response => {
                    console.log('Objet supprimé avec succès.');
                    dispatch(deleteRecipe(idRecipe));
                  })
                  .catch(error => {
                    console.error('Erreur lors de la suppression de l\'objet :', error);
                  });
              }
            }
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      };
      
      

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
                                <button onClick={() => deleteHandle(recipe.id)} className="btn btn-danger" >Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}


export default RecipeItem