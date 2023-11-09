import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteArticle } from './courseSlice';

export default function Details({  navigation }) {

 


  const articles = useSelector(state => state.articles.articles)
  const selectedArticle = useSelector(state => state.articles.selectedArticle)
    const dispatch = useDispatch()

  function deleteItemBasket(id) {
    console.log("delete");
    dispatch(deleteArticle(id))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details article</Text>
      <Text>Article :{selectedArticle.itemName}</Text>
      <Text>Prix : {selectedArticle.price}</Text>
      <Text>Quantité: {selectedArticle.quantity}</Text>
      <Button style={styles.cancelButton} color="red" title="Supprimer article" onPress={() => {

        navigation.navigate('Home'), deleteItemBasket(selectedArticle.id)

      }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    padding: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 20

  }
})