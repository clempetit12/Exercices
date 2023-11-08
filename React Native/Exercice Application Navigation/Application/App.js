import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HommePage from './components/HommePage'
import Profile from './components/Profile'


const Stack = createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='HommePage'>
        <Stack.Screen name='HommePage' component={HommePage}/>
        <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})