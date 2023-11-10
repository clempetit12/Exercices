import { SafeAreaView,  StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Details() {

  const selectedMeal = useSelector(state => state.meals.selectedMeal)

  useEffect(() => {

  },[selectedMeal])
  return (
   <ScrollView style={styles.container}>
     <Image style={styles.image}
                width={200}
                height={200}
                source={{
                  uri: `${selectedMeal.imageUrl}`
                }} />
                <Text>{selectedMeal.title}</Text>

   </ScrollView>
  )
}

const styles = StyleSheet.create({})