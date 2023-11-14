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
      const types = detailsData.types;
      const sprites = detailsData.sprites;
      const weight = detailsData.weight;
      const height = detailsData.height;

      const descriptionResponse = await fetch(detailsData.species.url)
      const descriptionData = await descriptionResponse.json()
      const flavorText = descriptionData.flavor_text_entries[0].flavor_text
      const evolutionsResponse = await (fetch(descriptionData.evolution_chain.url))
      const evolutionData = await evolutionsResponse.json()

      const evolutions = evolutionData.chain.evolves_to
      const species = evolutionData.chain.species
      console.log(evolutions);


      return {
        mainData: pokemon,
        detailsData: {
          types,
          sprites, 
          weight,
           height},
        descriptionData: { flavorText },
        evolutionData: { evolutions, species}

      };
    })
    const detailsResults = await Promise.all(detailsPromises);
    const combinedData = data.results.map((pokemon, index) => ({
      mainData: pokemon,
      detailsData: detailsResults[index].detailsData,
      descriptionData: detailsResults[index].descriptionData,
      evolutionData: detailsResults[index].evolutionData,

    }));
    console.log("combineddata",combinedData);

  



    return combinedData;
   

  }
);


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
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
      console.log("tabpokemons", state.pokemons);



    })


  },
});


export const { setSelectedPokemon, setMonPokedex } = pokemonsSlice.actions
export default pokemonsSlice.reducer
