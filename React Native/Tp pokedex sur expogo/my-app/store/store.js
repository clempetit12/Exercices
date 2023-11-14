import { configureStore} from "@reduxjs/toolkit";
import PokemonSlice from "../screens/PokemonSlice";



export default configureStore({
    reducer : {
        pokemons: PokemonSlice
    }
})