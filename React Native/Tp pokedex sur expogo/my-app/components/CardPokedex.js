/* import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsPokemons } from '../screens/PokemonSlice';

export default function CardPokemon({ name, url, id}) {
    const pokemonsDetails = useSelector(
      (state) => state.pokemons.pokemonsDetails
    );
    const dispatch = useDispatch();
  

  
    return (
      <View style={styles.card}>
        <TouchableOpacity>
          <View style={styles.column}>
            <Text>{name}</Text>
            <FlatList
              data={pokemonsDetails.types}
              renderItem={({ item }) => (
                <View>
                  <Text >{item.type.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.type.name}
            />
            {pokemonsDetails?.sprites && pokemonsDetails?.sprites.back_default && (
              <Image
                style={styles.image}
                source={{ uri: pokemonsDetails.sprites.back_default }}
              />
            )}
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
 */