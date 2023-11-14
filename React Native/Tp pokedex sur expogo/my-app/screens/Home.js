import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attrapez les tous !!!</Text>
      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.navigate("Pokedex")}>
          <View style={[styles.card, { backgroundColor: "blue" }]}>
            <Text style={styles.text}>Pokemons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MonPokedex")}>
          <View style={[styles.card, { backgroundColor: "green" }]}>
            <Text style={styles.text}>Pokedex</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 40,
    marginBottom: 20
  },
  card: {
    width: 160,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 7,
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: "center",
    alignItems: 'center'

  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  }

})