import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Switch, ScrollView, SectionList } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, setSelectedPokemon } from './PokemonSlice';


export default function Pokedex({ navigation }) {

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const selectedPokemon = useSelector(state=> state.pokemons.selectedPokemon)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPokemons())



            ;
    }, [dispatch])

    function navigateDetails (pokemon) {
        console.log("bouton press");
        dispatch(setSelectedPokemon(pokemon))
        
        navigation.navigate("Details")
    }

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
/*     const setBackgroundColor = (type) => {
        switch (type) {
            case 'flying':
                return 'lightblue';
            case 'poison':
                return 'rgba(255, 102, 102, 0.5)';
            case 'water':
                return 'blue';
            case 'fighting':
                return 'orange';
            case 'fire':
                return 'red';

            default:
                return 'rgba(165, 129, 82, 0.5)';
        }
    } */

    useEffect(() => {
        console.log("selectedpokemon",selectedPokemon);
    },[selectedPokemon])

    return (
        <SafeAreaView >


            <FlatList
                data={pokemons}
                initialNumToRender={5}
                windowSize={10}
                extraData={pokemons}
                maxToRenderPerBatch={5}
                numColumns={2}
                renderItem={(pokemon) => (
                    <TouchableOpacity onPress={() => navigateDetails(pokemon.item)  } >
                        <View style={[styles.card, { backgroundColor: setBackgroundColor(pokemon.item.detailsData.types[1]?.type?.name) }]}>
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

                    </TouchableOpacity>






                )}
                keyExtractor={(item) => item.mainData.name}
            />



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