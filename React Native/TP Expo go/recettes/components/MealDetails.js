import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MealDetails({duration,complexity,affordability,title,imageUrl}) {
    return (
        <View >
            <Image style={styles.image}
                width={200}
                height={200}
                source={{
                    uri: `${imageUrl}`
                }} />

            <Text style={styles.mealsTitle} >{title}  </Text>
            <View style={styles.row}>
                <Text style={styles.mealsDetails} >{duration}  </Text>
                <Text style={styles.mealsDetails} >{complexity}  </Text>
                <Text style={styles.mealsDetails} >{affordability}  </Text>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  
    image: {
      width: '100%'
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    
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