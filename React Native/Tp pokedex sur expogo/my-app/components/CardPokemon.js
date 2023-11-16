import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsPokemons, setSelectedPokemon } from '../screens/PokemonSlice';

export default function CardPokemon({ navigation, item }) {
  console.log("CardPokemon Props:", item);
  console.log("Sprites object:", item.detailsData.sprites);
  const dispatch = useDispatch()
 
  function navigateDetails(pokemonItem) {
    console.log("bouton press");
    dispatch(setSelectedPokemon(pokemonItem))

    navigation.navigate("Details")
  }
  const setBackgroundColor = (types) => {
    const typeColors = {
      flying: 'lightblue',
      electric: "lightyellow",
      poison: 'rgba(255, 102, 102, 0.5)',
      water: 'blue',
      fighting: 'orange',
      fire: 'red',
      normal: 'rgba(165, 129, 82, 0.5)',
      bug: "green",
      ground: "brown",
      fairy: "#d8b8ff",
      grass: "lightgreen"
    };

    const firstType = types[0]?.type.name;
    return typeColors[firstType] || typeColors.default;
  };



  return (

    <TouchableOpacity onPress={() => navigateDetails(item)}  >
      <View style={[styles.card, { backgroundColor: setBackgroundColor(item.detailsData.types) }]}>

        <Text style={styles.title}>{item.mainData.name}</Text>
        <FlatList
          data={item.detailsData.types}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.type} >{item.type.name}</Text>
            </View>

          )}
          keyExtractor={(item) => item.type.name}
        />
        <Image
          style={styles.image}
          width={200}
          height={200}
          source={{ uri: item.detailsData.sprites["front_shiny"] }}
        />
      </View>

    </TouchableOpacity>


  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  type: {
    
  alignItems: 'center',
  marginBottom: 10,
    width: 'auto',
    padding:5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    justifyContent: 'center',
    
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
  column: {
    flexDirection: 'column',
  },
  image: {
    width: 50,
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,

  },

});
