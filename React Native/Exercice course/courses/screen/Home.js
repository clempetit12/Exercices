import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function Home({navigation}) {

    const [articles, setArticles] = useState([
        {
            "itemName" : "lait",
            "price": 1.5,
            "quantity": 2
        }
    ])
  return (
    <View style={styles.container}>
    <Button style={styles.myButton} onPress={() => navigation.navigate('AddItem')} title="Ajouter un article +"></Button>

   
    <FlatList data={articles} renderItem={(article) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { itemName: article.item.itemName, price: article.item.price, quantity: article.item.quantity})} >
                <Text style={styles.card}>{article.item.itemName}  </Text>
            </TouchableOpacity>
        )
    }} keyExtractor={(item, index) => {
        return index
    }} />
 
    
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        padding: 20,
        marginTop: 20,
        backgroundColor: "blue",
        color: "white",
        borderRadius: 10,
    }
})