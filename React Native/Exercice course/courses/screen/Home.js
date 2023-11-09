import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { addItemToBasket } from './courseSlice';

export default function Home({ navigation, route }) {


const articles = useSelector(state=> state.articles.articles)
   
useEffect(() => {

   console.log(articles);
}, [articles])

    
    return (
        <View style={styles.container}>
            <Button style={styles.myButton} onPress={() => navigation.navigate('AddItem')} title="Ajouter un article +"></Button>


            <FlatList data={articles} renderItem={(article) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: article.item.id, itemName: article.item.itemName, price: article.item.price, quantity: article.item.quantity })} >
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