import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Details() {

  const selectedMeal = useSelector(state => state.meals.selectedMeal)

  useEffect(() => {
    console.log("meal selectionn dans detail", selectedMeal);
  }, [selectedMeal])
  return (
    <ScrollView >
      <View style={styles.container}>
        <Image style={styles.image}
          width={200}
          height={200}
          source={{
            uri: `${selectedMeal.item.imageUrl}`
          }} />
        <Text style={styles.title}>{selectedMeal.item.title}</Text>
        <View style={styles.row}>
          <Text style={styles.mealsDetails} >{selectedMeal.item.duration}  </Text>
          <Text style={styles.mealsDetails} >{selectedMeal.item.complexity}  </Text>
          <Text style={styles.mealsDetails} >{selectedMeal.item.affordability}  </Text>
        </View>
        <Text style={styles.ingredients}>Ingredients</Text>
        <View style={styles.horizontalLine}></View>
        {selectedMeal.item.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}
           <Text style={styles.ingredients}>Steps</Text>
           <View style={styles.horizontalLine}></View>
           {selectedMeal.item.steps.map((ingredient, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: '100%'
  },
  title: {
    color: 'black'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10


  },
  mealsDetails: {
    fontSize: 15,
    textAlign: 'center'
  },
  ingredients: {
    color: "#dbb7a1"
  },
  horizontalLine: {
    borderBottomColor: "#dbb7a1",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: "100%"
  },
  card: {
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    width: "100%",
    height: "5%",
    backgroundColor: "#dbb7a1",
    marginBottom:10
    
  },
  ingredientText:{
    color:'black',
    textAlign: 'center'
  }
})