import Croosicon from "./icons/CrossIcon"
import CheckIcon from "./icons/CheckIcon"
import React from "react"

const TodoItem = React.forwardRef(
    ({todo, DeleteTodo, UpdateTodo, ...props}, ref) => { 
    const {id, title, state}= todo
    return(
      
<article {...props} 
ref={ref} 
className="flex gap-4 border-b border-b-gray-400">

    <button className={`h-5 w-5 flex-none rounded-full border-2 ${
        state 
    ? "  grid  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 place-items-center " 
    : "  inline-block  "}`}
     onClick={()=> UpdateTodo(id)}
    >
   {state &&  <CheckIcon />}
    </button>

    <p className={`text-gray-600 grow dark:text-gray-400 ${state && "line-through" }`}>
        {title}
    </p>
    <button className=" flex-none " 
    onClick={()=> DeleteTodo(id)}>
        <Croosicon/>
    </button>
</article>

    );
 })
 export default TodoItem;