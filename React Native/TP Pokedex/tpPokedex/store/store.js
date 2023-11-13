import { configureStore } from "@reduxjs/toolkit";
import pokedexSlice from "./Pokedex/pokedexSlice";
import PokemonSlice from "../screens/PokemonSlice";


export default configureStore({
    reducer : {
        pokemons: PokemonSlice
    }
})