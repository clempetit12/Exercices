import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";



export const fetchPokedex = createAsyncThunk(
    "pokedex/fetchPokedex",
    async () => {
        const pokedex = []

        for (let i =1; i<10; i++) {
            const URL = `https://pokeapi.co/api/v2/pokemon/${i}`
           
            const response = await fetch(URL)
            const data = await response.json()
           
            pokedex.push(data)
                   
        }
        return pokedex
   
          
        
       
        }
    
)



const pokedexSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokedex: [],
        selectedPokemon : null,
        monPokedex: [],
    
        
       

    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        setMonPokedex: (state, action) => {
            state.monPokedex.push(action.payload)
        },
        setClearMonPokedex: (state, action) => {
            state.monPokedex=action.payload
        }

        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokedex.fulfilled, (state, action) => {
            state.pokedex = action.payload
            console.log(state.pokedex);
        })
       
        
    }
}

)

export const { setSelectedPokemon,setMonPokedex,setClearMonPokedex } = pokedexSlice.actions
export default pokedexSlice.reducer