import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function HommePage({navigation}) {

    const [contacts, setContacts] = useState([{"firstName": "Lola", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"},
    {"firstName": "Théo", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"},
    {"firstName": "Thomas", "lastname": "Petit", "phoneNumber": "03 27 95 06 25"} ])

  return (
    <View>
      <FlatList data={contacts} renderItem={(contact) => {{
        return (
            <Button title={contact.item.firstName} onPress={()=>navigation.navigate('Profile', {firstName: contact.item.firstName, lastname: contact.item.lastname, phoneNumber: contact.item.phoneNumber })}>
              
                    </Button>
        )
      }}}></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})