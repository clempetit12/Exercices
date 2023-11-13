import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavouriteMeal } from './slice/mealsSlice'

export default function Favoris({navigation}) {
    const favouriteMeal = useSelector(state => state.meals.favouriteMeal)

  
    const dispatch = useDispatch()
  
    
  
  
    useEffect(() => {
      console.log("selecte meal dans favoris", favouriteMeal);
  
    }, [favouriteMeal])
  
  
    return (
      <SafeAreaView >
        {favouriteMeal? (  <FlatList  data={favouriteMeal} renderItem={({ item}) => {
          return (
            <TouchableOpacity  >
              <View style={styles.container}>
                <View style={styles.card}>
                  <Image style={styles.image}
                    width={200}
                    height={200}
                    source={{
                       uri: `${item.item.imageUrl}`
                    }} />
  
                  <Text style={styles.mealsTitle} >{item.item.title}  </Text>
                  <View style={styles.row}>
                    <Text style={styles.mealsDetails} >{item.item.duration}  </Text>
                    <Text style={styles.mealsDetails} >{item.item.complexity}  </Text>
                    <Text style={styles.mealsDetails} >{item.item.affordability}  </Text>
                  </View>
                </View>
              </View>
  
  
            </TouchableOpacity>
          )
        }} keyExtractor={(item, index) => {
          return item
        }} />): "Il n'y a pas de favoris"}
      
       
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