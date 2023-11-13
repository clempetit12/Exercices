import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonDetails, fetchPokemons, fetchPokemonsWithDetails } from './PokemonSlice';
import CardPokemon from '../components/CardPokemon';

export default function Pokedex() {

  const pokemons = useSelector(state => state.pokemons.pokemons)
  const dispatch = useDispatch()

  const displayPokemons = (id) => {

  }

  useEffect(()=> {
dispatch(fetchPokemonsWithDetails())
;
  },[])

  return (
    <SafeAreaView style={styles.columns}>
            <FlatList data={pokemons} numColumns={2}  renderItem={(pokemon) => {
                return (
                  <CardPokemon name={pokemon.item.name} category={pokemon.item.types} onPress={() => displayPokemons(pokemon.item.id)} >

                  </CardPokemon>
                   
                )
            }}  keyExtractor={(item) => item.name} />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})