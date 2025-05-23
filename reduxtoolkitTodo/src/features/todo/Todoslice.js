import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, Text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,

    //reducers contains all the actions, property and functions
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                Text : action.payload   //payload is an object we has used to extract text from it, we can use it to extract anything like id, name etc.
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => {todo.id === action.payload.id ? action.payload : todo})
        }
    }
    
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;