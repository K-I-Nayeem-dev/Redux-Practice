import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./services/Reducers/counterReducer";
import todoReducer from "./services/Reducers/todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    countReducer: countReducer,
    todoReducer: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(countReducer);

export default store