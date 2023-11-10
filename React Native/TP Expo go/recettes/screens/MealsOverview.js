import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedMeal } from './slice/mealsSlice'

export default function MealsOverview({navigation}) {

  const mealsFromCategory = useSelector(state => state.meals.mealsFromCategory)
  const selectedMeal = useSelector(state => state.meals.selectedMeal)
const dispatch = useDispatch()

  function displayDetailsMeals(meals) {
dispatch(setSelectedMeal(meals))
navigation.navigate('Details')

  } 
  useEffect(() => {
    console.log("selecte meal",selectedMeal);
  }, [selectedMeal])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={mealsFromCategory} renderItem={(meals) => {
        return (
          <TouchableOpacity onPress={() => displayDetailsMeals(meals)} >
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
    padding: 10
  },
  image: {
    width: 'auto',
    borderRadius: 20
  },
  card: {
    width: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom:15

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