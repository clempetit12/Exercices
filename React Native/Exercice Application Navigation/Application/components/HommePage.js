import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function HommePage({navigation}) {

    const [contacts, setContacts] = useState([{"firstName": "Lola", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"},
    {"firstName": "Théo", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"},
    {"firstName": "Thomas", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"} ])

  return (
    <View style={styles.container}>
      <FlatList  data={contacts} renderItem={(contact) => {{
        return (
            <Button style={styles.bouton} title={contact.item.firstName} onPress={()=>navigation.navigate('Profile', {firstName: contact.item.firstName, lastname: contact.item.lastname, phoneNumber: contact.item.phoneNumber })}>
              
                    </Button>
        )
        // rajouter keyextractor
      }}}></FlatList> 
      

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       padding:20
   

    },
    bouton: {
        alignItems: 'center',
        padding:20,
        marginBottom:50
       

        
    }
})