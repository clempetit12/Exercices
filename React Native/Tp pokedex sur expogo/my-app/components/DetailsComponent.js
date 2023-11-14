import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageComponent from './ImageComponent'

export default function DetailsComponent({ selectedPokemon }) {


    return (
        <SafeAreaView>
            <View style={styles.bigContainer} >
                <Text style={styles.title}>Details</Text>
                <Text>{selectedPokemon.descriptionData.flavorText}</Text>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>Height</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Weight</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.label}>{selectedPokemon.detailsData.height}</Text>
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>{selectedPokemon.detailsData.weight}</Text>
                            </View>



                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Chaine d'évolution</Text>





            <View style={styles.evolutionContainer}>
                <Text style={styles.evolutionItem}>{selectedPokemon.evolutionData.species.name}</Text>
                <ImageComponent url={selectedPokemon.evolutionData.species.url}></ImageComponent>
                {selectedPokemon.evolutionData.evolutions.map((evolutionStep) => (
                    <View key={evolutionStep.species.name} style={styles.evolutionItemContainer}>
                        <Text style={styles.evolutionItem}>{evolutionStep.species.name}</Text>
                        <ImageComponent url={evolutionStep.species.url}></ImageComponent>

                        {evolutionStep.evolves_to.map((nextEvolutionStep) => (
                            <View key={nextEvolutionStep.species.name} style={styles.evolutionItemContainer}>
                                <Text style={styles.evolutionItem}>{nextEvolutionStep.species.name}</Text>
                                <ImageComponent url={nextEvolutionStep.species.url}></ImageComponent>
                            </View>
                        ))}
                    </View>
                ))}
            </View>


        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    bigContainer: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '800'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        flexDirection: 'column',
        height: 80,
        width: 300,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "white",
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 20,
        marginBottom: 10,
        marginTop: 10


    },

    label: {
        marginRight: 10,
        textAlign: 'center',
        fontSize: 15
    },
    evolutionContainer: {
        alignItems: 'center',
    marginBottom: 10,
    },
    evolutionItem: {
        margin: 5,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        marginRight: 10,
    },
})