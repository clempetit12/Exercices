import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react"

export default function AddItem() {

    const [textInputName,setTextInputName] = useState("")
    const [textInputPrice,setTextInputPrice] = useState("")
    const [textInputQuantity,setTextInputQuantity] = useState("")

    function recupInputName(enterTextName){
        setTextInputName(enterTextName)
 
    }
    function recupInputPrice( enterTextPrice){
        setTextInputPrice(enterTextPrice)
       
     
    }
    function recupInputQuantity( enterTextQuantity){
        setTextInputQuantity(enterTextQuantity)
      
    }
    function addItemToBasket() {
        
    }

  return (
  
    <View style={styles.centeredContainer}>
<TextInput style={styles.input} placeholder="Article" onChangeText={recupInputName} value={textInputName}></TextInput>
<TextInput style={styles.input} placeholder="Prix article" onChangeText={recupInputPrice} value={textInputPrice}></TextInput>
<TextInput style={styles.input} placeholder="Description article" onChangeText={recupInputQuantity} value={textInputQuantity}></TextInput>
<View style={styles.containerButton}>
<Button style={styles.addButton} title="Ajouter article" onPress={addItemToBasket}></Button>



</View>

    </View>




  )
}

const styles = StyleSheet.create({})