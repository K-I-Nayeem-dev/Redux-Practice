import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/counters/CounterSlice";
import countReducer from "../services/Reducers/counterReducer";
import todoReducer from "../services/Reducers/todoReducer";
import PostsSlice from "./features/posts/PostsSlice";


const store = configureStore({
    reducer:{
        f_counter: countReducer,
        counter: CounterSlice,
        todos: todoReducer,
        posts: PostsSlice
    }
})

export default store