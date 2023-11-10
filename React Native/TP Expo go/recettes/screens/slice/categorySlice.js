import { CATEGORIES } from "../../data/data"

const { createSlice } = require("@reduxjs/toolkit")

const categorySlice = createSlice(
    {
     name:"category",
     initialState: {
         categories :CATEGORIES,
         selectedCategory : null
         
 
     },
     reducers: {

        setSelectedCategory : (state,action) => {
            state.selectedCategory= action.payload
        } 
    
    },
})


export const {setSelectedCategory} = categorySlice.actions
export default categorySlice.reducer