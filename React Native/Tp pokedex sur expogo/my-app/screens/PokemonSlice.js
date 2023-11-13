import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchDetailsPokemons = createAsyncThunk(
    "pokemons/fetchDetailsPokemons",
    async (url) => {

            const response = await fetch(url)
            const data = await response.json()
        
        return data.types
        }
)

export const fetchPokemons = createAsyncThunk(
    "pokemons/fetchPokemons",
    async () => {

            const URL = `https://pokeapi.co/api/v2/pokemon?offset=10&limit=12`
            const response = await fetch(URL)
            const data = await response.json()
         
        return data.results
        }
    
)

        
  const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
      pokemons: [],
      pokemonsDetails:[],
      selectedPokemon: null,
      monPokedex: []
    },
    reducers: {
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload
        },
        setMonPokedex: (state, action) => {
            state.monPokedex.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload


        })
        builder.addCase(fetchDetailsPokemons.fulfilled, (state, action) => {
            state.pokemonsDetails = action.payload
            
       

        })
       
    },
  });
  

  export const { setSelectedPokemon,setMonPokedex } = pokemonsSlice.actions
  export default pokemonsSlice.reducer
  