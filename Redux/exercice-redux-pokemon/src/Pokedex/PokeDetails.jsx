import { useDispatch, useSelector } from "react-redux"
import { setMonPokedex } from "./pokedexSlice"
import { useEffect } from "react"

const PokeDetails = () => {

    const selectedPokemon = useSelector(state => state.pokedex.selectedPokemon)
    const dispatch = useDispatch()
    const monPokedex = useSelector(state => state.pokedex.monPokedex)

    const addPokedex = () => {
        dispatch(setMonPokedex(selectedPokemon))

    }

    useEffect(() => {
        console.table(monPokedex);
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="text-center display-7">
                            {selectedPokemon.name}
                        </div>
                        <div className="text-center">
                            <img src={selectedPokemon.sprites.front_shiny} />
                        </div>
                        <div className="text-center">
                            <button onClick={addPokedex} className="btn btn-success "> Add</button>
                        </div>

                    </div>
                    <div className="col-6">
                        <h4>HEIGHT</h4>
                        <span>{selectedPokemon.height}</span>
                        <h4>WEIGHT</h4>
                        <span>{selectedPokemon.weight}</span>
                        <h4>XP</h4>
                        <span>{selectedPokemon.base_experience}</span>
                        <h4>ABILITIES</h4>
                        <span>{selectedPokemon.abilities.map((ability, index) => <button className="btn btn-warning m-2" key={index}>{ability.ability.name}</button>)}</span>
                        <h4>TYPE</h4>
                        <span>{selectedPokemon.types.map((type, index) => <button className="btn btn-primary m-2" key={index}>{type.type.name}</button>)}</span>

                    </div>
                </div>
             
                    {selectedPokemon.moves.map((index,m)=> <button className="btn btn-warning m-2" index={index}>{m.moves}</button>)}

                
            </div>



        </>
    )
}

export default PokeDetails