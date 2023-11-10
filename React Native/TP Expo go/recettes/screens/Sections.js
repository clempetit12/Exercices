import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setMealsFromCategory, setSelectCategory } from './slice/mealsSlice';

export default function Sections({ navigation }) {
    const categories = useSelector(state => state.categories.categories)
    const meals = useSelector(state => state.meals.meals)
    const selectedCategoryId = useSelector(state => state.meals.selectedCategoryId)
    const mealsFromCategory = useSelector(state=> state.meals.mealsFromCategory)
    
    const dispatch = useDispatch()

    function displayMeals(id) {
        const mealsSelected = meals.filter(m => m.categoryIds.includes(id))
        dispatch(setMealsFromCategory(mealsSelected));
        dispatch(setSelectCategory(id)); 
        navigation.navigate('MealsOverview');

    }

    useEffect(() => {
        console.log("meals sélectionnés ", mealsFromCategory);
    }, [mealsFromCategory]);


    return (
        <SafeAreaView>
            <FlatList data={categories} renderItem={(category) => {
                return (
                    <TouchableOpacity onPress={() => displayMeals(category.item.id)} >
                        <View style={[styles.card, { backgroundColor: category.item.color }]}>
                            <Text style={styles.categoryTitle} >{category.item.title}  </Text>
                        </View>

                    </TouchableOpacity>
                )
            }} keyExtractor={(item, index) => {
                return index
            }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        margin: 10,
        backgroundColor: 'white', 
        borderRadius: 10,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
})
