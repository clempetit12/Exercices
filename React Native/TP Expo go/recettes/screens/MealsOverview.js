import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavouriteMeal, setSelectedMeal } from './slice/mealsSlice'

export default function MealsOverview({ navigation }) {

  const mealsFromCategory = useSelector(state => state.meals.mealsFromCategory)
  const selectedMeal = useSelector(state => state.meals.selectedMeal)
  const favouriteMeal = useSelector(state => state.meals.favouriteMeal)

  const dispatch = useDispatch()

  function displayDetailsMeals(meals) {
    dispatch(setSelectedMeal(meals))

    navigation.navigate('Details')

  }
  
  function addToFavourite (meals) {
    dispatch(setFavouriteMeal(meals))
  }


  useEffect(() => {
    console.log("selecte meal", selectedMeal);
    console.log("meals favoris", favouriteMeal);

  }, [favouriteMeal])


  return (
    <SafeAreaView >
      <FlatList  data={mealsFromCategory} renderItem={(meals) => {
        return (
          <TouchableOpacity onPress={() => displayDetailsMeals(meals)} >
            <View style={styles.container}>
              <View style={styles.card}>
                <Image style={styles.image}
                  width={200}
                  height={200}
                  source={{
                    uri: `${meals.item.imageUrl}`
                  }} />

                <Text style={styles.mealsTitle} >{meals.item.title}  </Text>
                <View style={styles.row}>
                  <Text style={styles.mealsDetails} >{meals.item.duration}  </Text>
                  <Text style={styles.mealsDetails} >{meals.item.complexity}  </Text>
                  <Text style={styles.mealsDetails} >{meals.item.affordability}  </Text>
  
                
                </View>
                <Button title="+ Ajouter aux favoris"  color={"green"} onPress={() => {addToFavourite(meals)}} > </Button>
             
              </View>
            </View>


          </TouchableOpacity>
        )
      }} keyExtractor={(item, index) => {
        return index
      }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden'
  },

  image: {
    width: 'auto',
   
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10
  },
  card: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 7,
   
    
    marginBottom: 15

  },
  mealsTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  mealsDetails: {
    fontSize: 15,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,


  }
})