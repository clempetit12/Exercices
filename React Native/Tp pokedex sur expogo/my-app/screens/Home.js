import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {

function pokedex () {
  navigation.navigate("MonPokedex")
}

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        width={2050}
        height={2050}
        source={ require('../assets/pokemonbis.png')  }
      />
      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.navigate("Pokedex")}>
          <View style={[styles.card, { backgroundColor: "#365fab" }]}>
            <Text style={styles.text}>Pokemons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pokedex()}>
          <View style={[styles.card, { backgroundColor: "#ffcc00" }]}>
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
    color: "white",
    fontWeight: '700',
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%"
  },
  image: {
width: 300,
height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  }

})