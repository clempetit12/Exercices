import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Sections from './screens/Sections'
import Details from './screens/Details'
import store from './store/store'
import MealsOverview from './screens/MealsOverview'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Sections'>
          <Stack.Screen name='Sections' component={Sections} options={{ title: "All Categories" }}></Stack.Screen>
          <Stack.Screen name='MealsOverview' component={MealsOverview} ></Stack.Screen>
          <Stack.Screen name='Details' component={Details} options={{ title: "About the meal" }} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

const styles = StyleSheet.create({})