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
    async (newAlbum, token) => {
        const response = await fetch(BASE_DB_URL + `/albums.json?auth=${token}`, {
            method: "POST",
            header: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(newAlbum)
        })
        const data = await response.json()
        return {
            id: data.name,
            ...newAlbum
        }


    }
)

export const deleteAlbums = createAsyncThunk(
    "albums/deleteAlbums",
    async (selectedAlbum, token) => {
        const response = await fetch(`${BASE_DB_URL}/albums/${selectedAlbum.id}.json?auth=${token}`, {
            method: "DELETE",
        })
        const data = response.json()
        return selectedAlbum



    }
)

export const editAlbums = createAsyncThunk(
    "albums/editAlbums",
    async ({ id, ...newAlbum }) => {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_DB_URL}/albums/${id}.json?auth=${token}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlbum)
        })
        const data = await response.json()
        console.log(newAlbum);


        return { id, ...data }

    }
)

const albumSlice = createSlice({
    name: "albums",
    initialState: {
        albums: [],
        formMode: "",
        selectedAlbum: null,
        filteredAlbum: null
    },
    reducers: {
        setFormMode: (state, action) => {
            state.formMode = action.payload
        },
        setSelectedAlbum: (state, action) => {
            state.selectedAlbum = action.payload
        },
        setFilteredAlbum: (state, action) => {
            const filter = action.payload ? action.payload.toLowerCase() : ''
            console.log(filter);

            state.filteredAlbum = state.albums.filter(album => album.title.toLowerCase().startsWith(filter));
            console.log(state.filteredAlbum);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
            console.log(state.albums);
        })
        builder.addCase(postAlbums.fulfilled, (state, action) => {
            state.albums.push(action.payload)
            console.log(state.albums);
        })
        builder.addCase(deleteAlbums.fulfilled, (state, action) => {
            let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            console.log(foundAlbum);
            if (foundAlbum) {
                state.albums = state.albums.filter(a => a.id !== action.payload.id)
            }
        })
        builder.addCase(editAlbums.fulfilled, (state, action) => {
            let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            console.log("edit" + foundAlbum);
            if (foundAlbum) {
                state.albums = [...state.albums.filter(a => a.id !== action.payload.id), action.payload]
                console.log(state.albums);
            }

        })
    }
}

)

export const { setFormMode, setSelectedAlbum, setFilteredAlbum } = albumSlice.actions
export default albumSlice.reducer

