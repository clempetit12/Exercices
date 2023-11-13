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
        <FlatList
          data={selectedMeal.item.ingredients}
          renderItem={(ingredient) => {
            return (
              <TouchableOpacity>
                <View style={styles.cardIngredient}>
                  <Text style={styles.ingredientText}>{ingredient.item} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
     
        <Text style={styles.ingredients}>Steps</Text>
        <View style={styles.horizontalLine}></View>
        <FlatList
          data={selectedMeal.item.steps}
          renderItem={(steps) => {
            return (
              <TouchableOpacity>
                <View style={styles.card}>
                  <Text style={styles.ingredientText}>{steps.item} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
  },
  image: {
    width: '100%'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500'
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
    color: "#dbb7a1",
    fontWeight: '800',
    fontSize: 20
  },
  horizontalLine: {
    borderBottomColor: "#dbb7a1",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: "80%"
  },
  cardIngredient:{
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dbb7a1",
    marginBottom: 15,
    width: "100%", 
  
  },
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dbb7a1",
    marginBottom: 15,
   
    marginHorizontal: 100

  },
  ingredientText: {
    color: 'black',
    textAlign: 'center'
  }
})