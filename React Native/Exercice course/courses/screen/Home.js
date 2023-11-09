import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { addItemToBasket, setSelectedArticle } from './courseSlice';

export default function Home({ navigation, route }) {


const articles = useSelector(state=> state.articles.articles)
const selectedArticle = useSelector(state => state.articles.selectedArticle)
const dispatch = useDispatch()
   
function detailsFunction(article) {
dispatch(setSelectedArticle(article))
    navigation.navigate('Details')
}
useEffect(() => {
console.log(selectedArticle);
   
}, [ selectedArticle])

    
    return (
        <View style={styles.container}>
            <Button style={styles.myButton} onPress={() => navigation.navigate('AddItem')} title="Ajouter un article +"></Button>


            <FlatList data={articles} renderItem={(article) => {
                return (
                    <TouchableOpacity onPress={() => detailsFunction(article.item)} >
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