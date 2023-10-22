import { configureStore } from "@reduxjs/toolkit";
import pokedexSlice from "./Pokedex/pokedexSlice";


export default configureStore({
    reducer : {
        pokedex: pokedexSlice
      
    }
})