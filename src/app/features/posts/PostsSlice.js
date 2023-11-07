import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    'posts/fetchUser',
    async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts:[],
        error: null
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchUser.pending, (state)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null
        })

        builder.addCase(fetchUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer