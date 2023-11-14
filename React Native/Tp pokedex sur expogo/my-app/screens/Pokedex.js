import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Switch, ScrollView, SectionList } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, setSelectedPokemon } from './PokemonSlice';


export default function Pokedex({ navigation }) {

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const selectedPokemon = useSelector(state => state.pokemons.selectedPokemon)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPokemons())
        console.log("tab pokemons", pokemons)
    }, [dispatch])



    function navigateDetails(item) {
        console.log("bouton press");
        dispatch(setSelectedPokemon(item))

        navigation.navigate("Details")
    }

    
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

    return (
        <SafeAreaView >


            <FlatList
                data={pokemons}
                initialNumToRender={5}
                windowSize={10}
                extraData={pokemons}
                maxToRenderPerBatch={5}
                numColumns={2}
                renderItem={(item) => (

                    <TouchableOpacity onPress={() => navigateDetails(item)} >
                        <View style={[styles.card,  { backgroundColor: setBackgroundColor(item.item.detailsData.types) }]}>
                            <Text>{item.item.mainData.name}</Text>
                            {item.item.detailsData.types.map((type) => (
                                <View key={type.type.name}>
                                    <Text>{type.type.name}</Text>
                                </View>
                            ))}
                            <Image
                                style={styles.image}
                                width={200}
                                height={200}
                                source={{
                                    uri: item.item.detailsData.sprites.front_default
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