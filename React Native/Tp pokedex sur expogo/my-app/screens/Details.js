import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DetailsComponent from '../components/DetailsComponent';

export default function Details() {

  const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon)

  const typeColors = {
    flying: 'lightblue',
    poison: 'rgba(255, 102, 102, 0.5)',
    water: 'blue',
    fighting: 'orange',
    fire: 'red',
    default: 'rgba(165, 129, 82, 0.5)',
  };

  const setBackgroundColor = (type) => {
    return typeColors[type] || typeColors.default;
  };

  useEffect(() => {
    console.log("selectionnepokemondans details", selectedPokemon);
  }, [selectedPokemon])

  return (
    <View>
      <View style={[styles.card, /* { backgroundColor: setBackgroundColor(selectedPokemon.item.detailsData.types[1]?.type?.name) } */]}>
        <Text>{selectedPokemon.mainData.name}  </Text>
        {selectedPokemon.detailsData.types.map((type, index) => (
          <Text key={index}>{type.type.name}</Text>
        ))}
        <Image
          style={styles.image}
          width={200}
          height={200}
          source={{
            uri: selectedPokemon.detailsData.sprites["front_default"]
          }}
        />
        <DetailsComponent selectedPokemon={selectedPokemon}></DetailsComponent>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "150",

  }
})