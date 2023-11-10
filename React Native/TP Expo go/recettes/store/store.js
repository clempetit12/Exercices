import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../screens/slice/categorySlice'
import mealsSlice from '../screens/slice/mealsSlice'





export default configureStore({
    reducer: {
        categories: categorySlice,
        meals: mealsSlice
    }
})