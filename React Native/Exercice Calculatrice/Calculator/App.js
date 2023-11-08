import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


import Boutons from './Components/Boutons'

export default function App() {

  const [textInput, setTextInput] = useState("")
  const [expression, setExpression] = useState("")

const updateInput = (value) => {
 
  setTextInput((prevText)=> prevText+value)
}

function handleCalculate (){

    const evaluatedResult = eval(textInput); 
    console.log(evaluatedResult);
    setExpression(evaluatedResult.toString()); 
    console.log(expression);

};

function del () {
  setTextInput((prevText) => prevText.slice(0, -1))
}

function clearInput() {
  setTextInput(" "),
  console.log("input clear");
  setExpression("")
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput style={styles.textInput} value={expression !== '' ? expression : textInput} onChangeText={(text) => updateInput(text)} ></TextInput>
      <View style={styles.container2}>
        <View style={styles.row}>
        <Boutons text="AC" carreGris ={"carreGris"} clearInput={clearInput}  />
        <Boutons text="**" carreGris ={"carreGris"}  updateInput={updateInput}/>
        <Boutons text="%" carreGris ={"carreGris"}  updateInput={updateInput}/>
        <Boutons text="/" carreGris ={"carreGris"}  updateInput={updateInput}/>
        </View>
        <View style={styles.row}>
        <Boutons text="7"rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="8" rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="9"rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="*"  updateInput={updateInput} />
        </View>
        <View style={styles.row}>
        <Boutons text="4" rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="5"rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="6" rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="-" updateInput={updateInput}/>
        </View>
        <View style={styles.row}>
        <Boutons text="1"rondBlanc ={"rondBlanc"}  updateInput={updateInput} />
        <Boutons text="2" rondBlanc ={"rondBlanc"}  updateInput={updateInput} />
        <Boutons text="3" rondBlanc ={"rondBlanc"}  updateInput={updateInput} />
        <Boutons text="+"  updateInput={updateInput} />
        </View>
        <View style={styles.row}>
        <Boutons text="." rondBlanc ={"rondBlanc"}  updateInput={updateInput} />
        <Boutons text="0" rondBlanc ={"rondBlanc"}  updateInput={updateInput}/>
        <Boutons text="Del" rondBlanc ={"rondBlanc"}  del={del} />
        <Boutons text="=" handleCalculate= {handleCalculate} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: 'black',

  },
  title: {
    color: "white",
    padding: 20,
    fontSize: 40
  },
  textInput: {
    width: '80%',
    height: 300,
    color: "white",
    textAlign: "right",
    fontSize:40,
    

  },
  container2: {
    padding: 20,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

