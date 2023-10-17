import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice"
import recipeSlice from "./Recipes/recipeSlice";

export default configureStore({
    reducer: {
        auth: authSlice, 
        recipe : recipeSlice
    }
})