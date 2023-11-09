import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomStackNavigator } from '@react-navigation/bottom-Stacks'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screen/Home'
import Details from './screen/Details'
import AddItem from './screen/AddItem'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Store from './Store'
import { Provider } from 'react-redux';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={Store}>
<NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Details' component={Details}></Stack.Screen>
        <Stack.Screen name='AddItem' component={AddItem}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
    </Provider>

  )
}

const styles = StyleSheet.create({})