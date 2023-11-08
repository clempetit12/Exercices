import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Boutons({ text, carreGris, rondBlanc, updateInput, handleCalculate, clearInput, del }) {

  return (
    <TouchableOpacity style={(rondBlanc ? styles.rondBlanc : styles.carreGris)} onPress={() => {
      if (text === "=") {
        handleCalculate();
      } else if (text === "AC") {
        clearInput();
      } else if (text === "Del") {
        del()
      }
      else {
        updateInput(text);
      }
    }}>
      <Text style={styles.text}>{text}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  text: {
    fontSize: 25,
    color: 'black'
  },
  rondBlanc: {
    height: 60,
    width: 60,
    borderRadius: 40,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',

  },
  carreGris: {
    height: 60,
    width: 60,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
})