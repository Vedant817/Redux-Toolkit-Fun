import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoslice";
function AddTodo(){
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <div>AddTodo</div>
        //? Write the CSS
    )
}

export default AddTodo