import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";



export const fetchPokemons = createAsyncThunk(
    "pokemons/fetchPokemons",
    async () => {
        const pokemons = []
            const URL = `https://pokeapi.co/api/v2/pokemon?offset=10&limit=50`
            const response = await fetch(URL)
            const data = await response.json()
            pokemons.push(data)
        return pokemons
        }
    
)



const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: [],
        selectedPokemon : null,
        pokedex: [],
    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        setPokedex: (state, action) => {
            state.pokedex.push(action.payload)
        }

        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
            console.log(state.pokemons);
        })
       
        
    }
}

)

export const { setSelectedPokemon,setPokedex } = pokemonsSlice.actions
export default pokemonsSlice.reducer