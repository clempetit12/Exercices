import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { addItemToBasket } from "./courseSlice.js"


export default function AddItem({  navigation }) {



    const [textInputName, setTextInputName] = useState("")
    const [textInputPrice, setTextInputPrice] = useState("")
    const [textInputQuantity, setTextInputQuantity] = useState("")
    const articles = useSelector(state => state.articles.articles)
    const dispatch = useDispatch()
    function recupInputName(enterTextName) {
        setTextInputName(enterTextName)

    }
    function recupInputPrice(enterTextPrice) {
        setTextInputPrice(enterTextPrice)


    }
    function recupInputQuantity(enterTextQuantity) {
        setTextInputQuantity(enterTextQuantity)

    }


    function add() {
       
        dispatch(addItemToBasket({itemName: textInputName, price: textInputPrice, quantity: textInputQuantity}))
        console.log(articles);
    }

    return (

        <View style={styles.centeredContainer}>
            <Text style={styles.title}>Ajouter un article</Text>
            <TextInput style={styles.input} placeholder="Article" onChangeText={recupInputName} value={textInputName}></TextInput>
            <TextInput style={styles.input} placeholder="Prix article" onChangeText={recupInputPrice} value={textInputPrice}></TextInput>
            <TextInput style={styles.input} placeholder="Quantité " onChangeText={recupInputQuantity} value={textInputQuantity}></TextInput>
            <View style={styles.containerButton}>
                <Button style={styles.addButton} title="Ajouter article" onPress={() => {

                    navigation.navigate('Home'), add()

                }}></Button>



            </View>

        </View>




    )
}

const styles = StyleSheet.create({

    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        color: 'black'
    },
    containerButton: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '70%',
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: 300,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        color: "black",
        backgroundColor: "white"

    },

    addButton: {
        borderRadius: 10,
        fontWeight: "bold"
    }


})
