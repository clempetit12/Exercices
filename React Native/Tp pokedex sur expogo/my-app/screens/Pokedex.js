import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './PokemonSlice';


export default function Pokedex() {

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPokemons())
        console.log("tabpokemon", pokemons);


        ;
    }, [dispatch])

    return (
        <SafeAreaView >

            <TouchableOpacity >
                <FlatList
                    data={pokemons}
                    numColumns={2}
                    renderItem={(pokemon) => (

                        <View style={styles.card}>
                            <Text>{pokemon.item.mainData.name}</Text>
                            <FlatList
                                data={pokemon.item.detailsData.types}
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
                                    uri: pokemon.item.detailsData.sprites["front_default"]
                                }}
                            />



                        </View>



                    )}
                    keyExtractor={(item) => item.mainData.name}
                />
            </TouchableOpacity>


        </SafeAreaView>
    )
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
        width: 100, 
        height: 100, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 10,
        
    },
})