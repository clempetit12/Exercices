import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetailsPokemons } from '../screens/PokemonSlice'

export default function CardPokemon({ name, url }) {

    const pokemonsDetails = useSelector(state => state.pokemons.pokemonsDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDetailsPokemons(url))
    
            ;
    }, [dispatch,url])




    return (
        <View style={styles.card}>
            <TouchableOpacity>
                <View>
                    <Text>{name}</Text>
                    <FlatList
            data={pokemonsDetails}
            renderItem={({ item }) => (
              <Text key={item.name}>{item.type.name}</Text>
            )}
            keyExtractor={(item) => item.name}
          />
                </View>
                <View>
                    {/* Ajoutez ici votre logique pour afficher l'image */}
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
        borderRadius: 10
    }
})