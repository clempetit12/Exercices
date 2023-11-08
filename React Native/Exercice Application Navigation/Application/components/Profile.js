import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({ navigation, route }) {

    const firstName = route.params.firstName
    const lastname = route.params.lastname
    const phoneNumber = route.params.phoneNumber
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text> <Text style={styles.bold}>Prénom</Text> : {firstName}</Text>
            <Text><Text style={styles.bold}>Nom</Text>  : {lastname}</Text>
            <Text><Text style={styles.bold}>Numéro de téléphone</Text>  : {phoneNumber}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
    

    },
    bold: {
fontWeight: '700',
fontSize: 20
    },
    title : {
        fontSize: 50,
        marginBottom: 50
        
    }
})