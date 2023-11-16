import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardPokemon from '../components/CardPokemon'

export default function MonPokedex() {

  const monPokedex = useSelector(state => state.pokemons.monPokedex)

  useEffect(() => {
console.log("monPokedex", monPokedex);
  }, [monPokedex])

  return (
    <View>
      <Text>MonPokedex</Text>
     <FlatList
                data={monPokedex}
                renderItem={(item) => (

                   
                        <CardPokemon  
                        item={item}>

                        </CardPokemon>

                )}
                keyExtractor={(item) => item.mainData.name}
            /> 
    </View>
  )
}

const styles = StyleSheet.create({})