import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsPokemons, setSelectedPokemon } from '../screens/PokemonSlice';

export default function CardPokemon({navigation, item, name, types, url }) {
  

  const dispatch = useDispatch()
  function navigateDetails (item) {
    console.log("bouton press");
    dispatch(setSelectedPokemon(item))
    
    navigation.navigate("Details")
}




  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigateDetails(item)} >
        <View style={[styles.card, /* { backgroundColor: setBackgroundColor(item.detailsData.types[1]?.type?.name) } */]}>
          <Text>{name}</Text>
          <FlatList
            data={types}

            renderItem={({ item }) => (
              <View>
                <Text >{item.type.name}</Text>
              </View>

            )}
            keyExtractor={(item) => item.type.name}
          />
          <Image
            style={styles.image}
            width={200}
            height={200}
            source={{
              uri:`${url}`,
            }}
          />
        </View>

      </TouchableOpacity>

    </View>
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
  column: {
    flexDirection: 'column',
  },
  image: {
    width: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    height: 100, // Set a fixed height for the image
  },
});
