import { CATEGORIES, MEALS } from "../../data/data"

const { createSlice } = require("@reduxjs/toolkit")

const mealsSlice = createSlice(
    {
     name:"meals",
     initialState: {
         meals :MEALS,
         mealsFromCategory: [],
         selectedCategoryId: null,
         selectedMeal: null
         
 
     },
     reducers: {

        setSelectCategory: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
        setMealsFromCategory : (state,action) => {
            state.mealsFromCategory= action.payload
        },
        setSelectedMeal : (state,action) => {
            state.selectedMeal= action.payload
        }
    
    },
})


export const {setSelectCategory,setMealsFromCategory,setSelectedMeal} = mealsSlice.actions
export default mealsSlice.reducer