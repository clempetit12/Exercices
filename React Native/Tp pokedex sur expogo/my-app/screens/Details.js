import { StyleSheet, Text, View, Image, Pressable, ScrollView, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailsComponent from '../components/DetailsComponent';
import { setMonPokedex } from './PokemonSlice';

export default function Details() {

  const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon)
  const dispatch = useDispatch()

  const setBackgroundColor = (types) => {
    const typeColors = {
        flying: 'lightblue',
        poison: 'rgba(255, 102, 102, 0.5)',
        water: 'blue',
        fighting: 'orange',
        fire: 'red',
        normal: 'rgba(165, 129, 82, 0.5)',
        bug: "green",
    };
  
    const firstType = types[0]?.type.name;
    return typeColors[firstType] || typeColors.default;
  };

  function addToFavorite(selectedPokemon) {
    console.log("addtofavorite");
dispatch(setMonPokedex(selectedPokemon))
  }

  useEffect(() => {
    console.log('selectionnepokemondans details', selectedPokemon);
  }, [selectedPokemon])

  return (
    <ScrollView>
      
      <View style={[styles.card, { backgroundColor: setBackgroundColor(selectedPokemon.detailsData.types) } ]}>
      <Text style={styles.title}>{selectedPokemon.mainData.name}</Text>
      {selectedPokemon.detailsData.types.map((type, index) => (
          <Pressable style={styles.type} key={index}><Text>{type.type.name}</Text></Pressable>
        ))}
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          width={200}
          height={200}
          source={{
            uri: selectedPokemon.detailsData.sprites["front_default"]
          }}
        />
        <Button color={"#ffcc00"} onPress={()=> addToFavorite(selectedPokemon)}  title={"+ Ajouter aux favoris"}></Button>
        </View>
           
   
      </View>
      <DetailsComponent selectedPokemon={selectedPokemon}></DetailsComponent>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  card: {
    width: "100%",
    height: "150",
    padding: 20
  },
  title: {
    fontSize: 40,
    color: "white",
  },
  type: {
    alignItems: 'center',
    height: 30,
    width: 50,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 5
  },
  image: {
    width: 200,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
   

  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
