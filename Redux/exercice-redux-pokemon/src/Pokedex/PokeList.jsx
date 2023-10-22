import { useDispatch, useSelector } from "react-redux"
import PokeDisplay from "./PokeDisplay"
import classes from './pokedex.module.css'

const PokeList = () => {

    const dispatch = useDispatch()
    const pokedex = useSelector(state => state.pokedex.pokedex)
    return (
        <>
            <select className="form-select mt-3" aria-label="Default select example">
                <option selected>Sélectionner une catégorie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className='row my-3'>
                <div className='col-10 offset-1 bg-dark rounded text-light p-3'>
                    <div className='d-flex justify-content-between align-items-center'>

                        <hr />
                        <div className={classes.card} >
                            {pokedex.length === 0 ? (
                                <p>Il n'y a pas de pokemons</p>
                            ) : pokedex.map(poke => <PokeDisplay key={poke.id} poke={poke}  pokeId={poke.id}/>)}



                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default PokeList