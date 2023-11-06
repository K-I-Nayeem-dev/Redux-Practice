import { applyMiddleware, createStore } from "redux";
// import countReducer from "./services/Reducers/counterReducer";
import todoReducer from "./services/Reducers/todoReducer";
import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//     importCountReducer : countReducer,
//     importTodoReducer: todoReducer
// })

const store = createStore(todoReducer, applyMiddleware(thunk));
// const store = createStore(countReducer);

export default store