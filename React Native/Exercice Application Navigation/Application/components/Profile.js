import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile({ navigation, route }) {

    const firstName = route.params.firstName
    const lastname = route.params.lastname
    const phoneNumber = route.params.phoneNumber
    return (
        <View>
            <Text>Profile</Text>
            <Text>Prénom : {firstName}</Text>
            <Text>Nom : {lastname}</Text>
            <Text>Numéro de téléphone : {phoneNumber}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})