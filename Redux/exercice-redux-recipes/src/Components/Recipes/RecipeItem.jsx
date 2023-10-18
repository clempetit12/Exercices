import { useDispatch, useSelector } from "react-redux"
import { deleteRecipe } from "./recipeSlice"
import axios from "axios"
import { BASE_DB_URL } from "../../firebaseConfig"
import { useNavigate } from "react-router-dom"

const RecipeItem = (props) => {

    const idRecipe = props.idRecipe
    const recipe = props.recipe
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const editHandler = () => {

    }


    return (
        <>
            <div className="card row">
                <div className="card-header g-4 row">
                    <div className="d-flex text-center align-items">
                        <span className="display-4 align-items">
                            {recipe.title}
                        </span>
                        <div className="ms-auto">
                            <button className="btn btn-outline-danger">{recipe.prepTime} <i class="bi bi-cloud-fog-fill"></i></button>
                        </div>
                        <div className="ms-2">
                            <button className="btn btn-outline-warning">{recipe.cookTime} <i class="bi bi-fire"></i></button>
                        </div>
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
                            </div>
                            <div>
                                <hr />
                                <div className="d-flex">
                                <div className="ms-auto">
                                <button onClick={() => editHandler} className="btn btn-warning">Edit <i class="bi bi-pen"></i></button>
                                </div>
                               <div className="ms-2">
                               <button onClick={() => deleteHandle(recipe.id)} className="btn btn-danger" >Delete <i class="bi bi-trash3"></i> </button>
                               </div>
                               
                                </div>
                             
                            </div>
                        </div>
                 

                </div>
            </div>


        </>
    )
}


export default RecipeItem