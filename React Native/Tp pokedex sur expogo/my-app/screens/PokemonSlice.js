import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async () => {
      const URL = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=50';
      const response = await fetch(URL);
      const data = await response.json();
      const detailsPromises = data.results.map(async (pokemon) => {
        const detailsResponse = await fetch(pokemon.url);
        const detailsData = await detailsResponse.json();
  
        return detailsData;
      });

      const detailsResults = await Promise.all(detailsPromises);
      const combinedData = data.results.map((pokemon, index) => ({
        mainData: pokemon,
        detailsData: detailsResults[index],
       
      }));
 
  
      return combinedData;
    }
  );

        
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
   
       
    },
  });
  

  export const { setSelectedPokemon,setMonPokedex } = pokemonsSlice.actions
  export default pokemonsSlice.reducer
  