import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipes: [
        ]


    },
    reducers: {
        adddRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        editrecipe: (state, action) => {

        },
        deleteRecipe: (state, action) => {
            state.recipes = state.recipes.filter(r => r.id !== action.payload)
        },
        fetchData: (state, action) => {
            state.recipes = action.payload
           
            
        }
    }
})

export const { adddRecipe, editrecipe, deleteRecipe, fetchData } = recipeSlice.actions
export default recipeSlice.reducer  