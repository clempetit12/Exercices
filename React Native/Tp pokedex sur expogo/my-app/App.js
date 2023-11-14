import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Pokedex from './screens/Pokedex'
import Details from './screens/Details'
import store from './store/store'
import MonPokedex from './screens/MonPokedex'

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
   <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Pokedex' component={Pokedex}></Stack.Screen>
      <Stack.Screen name='Details' component={Details}></Stack.Screen>
      <Stack.Screen name='MonPokedex' component={MonPokedex}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  )
}

const styles = StyleSheet.create({})