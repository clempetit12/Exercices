import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"
import { setSelectedPokemon } from "./pokedexSlice"


const PokeDisplay = (props) => {


    const pokedex = props.poke
    const pokeId= props.pokeId
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectedPokemon = useSelector(state => state.pokedex.selectedPokemon)
    
const detailsPokemon = (pokeId) => {
    console.log("details");
    dispatch(setSelectedPokemon(pokedex))
    navigate(`/pokedetails/${pokeId}`)
}


    return (

        <div className="card m-3" style={{ width: '8rem' }} >
            <div className="card-deck">
                <div className="card-header">
                    <img className="card-img-top" src={pokedex.sprites.front_shiny} alt="Card image cap" />
                </div>
             
                <div className="card-body">
                <h5 className="card-title display-7 text-center">#{pokedex.id}</h5>
                    <h5 className="card-title display-7 text-center">{pokedex.name}</h5>

                <div className="car-footer">
                    <button onClick={() => detailsPokemon(pokeId)} className="btn btn-warning">Détails</button>
                </div>
                </div>
               



            </div>
        </div>

    )
}


export default PokeDisplay