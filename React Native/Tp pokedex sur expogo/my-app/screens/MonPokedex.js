import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attrapez les tous !!!</Text>
      <View style={styles.row} >
        <TouchableOpacity onPress={() => navigation.navigate("Pokedex")}>
          <View style={[styles.card, {backgroundColor:"blue"}]}>
            <Text style={styles.text}>Pokemons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MonPokedex")}>
          <View style={[styles.card, {backgroundColor:"green"}]}>
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
    padding: 20

  },
  title: {
fontSize: 40,
marginBottom: 20
  },
  card: {
   width: "100%",
 margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 7,



    marginBottom: 15


  },
  text : {
alignItems: 'center',
justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
   
    

  }
})