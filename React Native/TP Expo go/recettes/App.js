import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Sections from './screens/Sections'
import Details from './screens/Details'
import store from './store/store'
import MealsOverview from './screens/MealsOverview'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Favoris from './screens/Favoris'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name='Sections' component={Sections} options={{ title: 'All Categories' }} />
      <Drawer.Screen name='Favoris' component={Favoris} />
     
    </Drawer.Navigator>
  )

}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Drawer' >
          <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown: false}} />
          <Stack.Screen name='Sections' component={Sections} options={{ title: "All Categories" }} />
          <Stack.Screen name='MealsOverview' component={MealsOverview} />
          <Stack.Screen name='Details' component={Details} options={{ title: "About the meal" }} />
        </Stack.Navigator>
  
      </NavigationContainer>
    </Provider>
  )
}



const styles = StyleSheet.create({})