import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState : {count: 0},
    reducers: {
        increment : state => {
            state.count = state.count + 1
        },
        decrement : state => {
            state.count = state.count > 0 ? state.count - 1 : state.count = 0
        },
        reset : state => {
            state.count = state.count = 0
        },
        incrementBy5 : (state, action) => {
            state.count = state.count + action.payload
        }
    }
}) 

export const { increment, decrement, reset, incrementBy5 } = counterSlice.actions

export default counterSlice.reducer;