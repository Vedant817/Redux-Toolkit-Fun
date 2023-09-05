import {createSlice, nanoid} from "@reduxjs/toolkit"
const initialState ={
    todo: [{id:1, text:'Hello', completed:false}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //? It is just an object
        addTodo:(state,action)=>{
            const todo={
                //* This has an ID and a payload like what information we are storing.
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            //! In this case in place of action we might require the id of the todo.
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer //! This will be wired up with the store.