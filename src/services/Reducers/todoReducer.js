import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../Constants/todoConstants";

const initialTodo = {
    todo: [],
    isLoading: false,
    error: null
}

const todoReducer = (state = initialTodo, action)=>{

    switch (action.type) {

        case GET_TODO_REQUEST:
            
            return {
                ...state,
                isLoading: true,
            }

        case GET_TODO_SUCCESS:
            
            return {
                isLoading: false,
                todo: action.payload,
                error: null
            }
    
        case GET_TODO_FAILED:
            
            return {
                isLoading: false,
                todo: [],
                error: action.payload
            }
    
        default:
            return state;
    }

}

export default todoReducer