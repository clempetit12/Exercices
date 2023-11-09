import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteArticle } from './courseSlice';

export default function Details({ route, navigation }) {

  const id = route.params.id
  const itemName = route.params.itemName
  const price = route.params.price
  const quantity = route.params.quantity


  const articles = useSelector(state => state.articles.articles)
    const dispatch = useDispatch()

  function deleteItemBasket(id) {
    console.log("delete");
    dispatch(deleteArticle(id))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details article</Text>
      <Text>Article :{itemName}</Text>
      <Text>Prix : {price}</Text>
      <Text>Quantité: {quantity}</Text>
      <Button style={styles.cancelButton} color="red" title="Supprimer article" onPress={() => {

        navigation.navigate('Home'), deleteItemBasket(id)

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