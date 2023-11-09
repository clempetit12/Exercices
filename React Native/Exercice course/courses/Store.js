import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './screen/courseSlice'




export default configureStore({
    reducer: {
        articles: courseSlice
    }
})

