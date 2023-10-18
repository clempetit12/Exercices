import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../firebaseConfig";

export const fetchAlbums = createAsyncThunk(
    "albums/fetchAlbums",
    async () => {
        const response = await fetch(`${BASE_DB_URL}/albums.json`)
        const data = await response.json()
        const albums = []
        for (const key in data) {
            albums.push({ id: key, ...data[key] })
        }
        return albums
    }

)

export const postAlbums = createAsyncThunk(
    "albums/postAlbums",
    async (newAlbum) => {
        const response = await fetch(BASE_DB_URL + "/albums.json", {
            method: "POST",
            header: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(newAlbum)
        })
       const data = await response.json()
       return{
        id: data.name,
        ...newAlbum
       }
       
       
    }
)

const albumSlice = createSlice({
    name: "albums",
    initialState: {
        albums: [],
        formMode : ""
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
            console.log(state.albums);
        })
    }
}

)

export const { setFormMode } = albumSlice.actions
export default albumSlice.reducer