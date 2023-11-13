import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Fonction pour récupérer les détails d'un Pokémon
export const fetchPokemonDetails = createAsyncThunk(
    'pokemons/fetchPokemonDetails',
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      
      // Sérialisez les données nécessaires
      const serializedDetails = {
        types: data.types.map(type => type.name), // Extrait les noms des types
        // Ajoutez d'autres propriétés au besoin
      };
  console.log(serializedDetails);
      return serializedDetails;
    }
  );
  
  // Fonction pour récupérer la liste de Pokémon avec leurs détails
  export const fetchPokemonsWithDetails = createAsyncThunk(
    'pokemons/fetchPokemonsWithDetails',
    async () => {
      const pokemons = [];
  
      try {
        const pokemonsListURL = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=12';
        const listResponse = await fetch(pokemonsListURL);
        const listData = await listResponse.json();
  
        // Pour chaque Pokémon dans la liste, récupérer les détails
        for (const pokemon of listData.results) {
          const details = await fetchPokemonDetails(pokemon.url);
          pokemons.push({ name: pokemon.name, details });
        }
  
        // Faites quelque chose avec le tableau de pokemons, s'il y a lieu
        console.log("Tableau de pokemons", pokemons);
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
  
      return pokemons;
    }
  );
  
  const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
      pokemons: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPokemonsWithDetails.fulfilled, (state, action) => {
        // Assurez-vous que les détails sont sérialisés avant de les stocker dans l'état
        state.pokemons = action.payload.map(pokemon => ({
          name: pokemon.name,
          details: {
            types: pokemon.details.types,
            // Autres propriétés sérialisables si nécessaire
          },
        }));
      });
      builder.addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        // Vous pouvez gérer ici la mise à jour des détails d'un Pokémon spécifique si nécessaire
      });
    },
  });
  
  export const selectPokemons = (state) => state.pokemons.pokemons;
  
  export default pokemonsSlice.reducer;
  