import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./album/albumSlice";
import authSlice from "./auth/authSlice";

export default configureStore({
    reducer : {
        albums : albumSlice,
        auth : authSlice
    }
})