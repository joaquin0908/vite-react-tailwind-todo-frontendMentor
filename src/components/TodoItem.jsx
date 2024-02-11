import Croosicon from "./icons/CrossIcon"
import CheckIcon from "./icons/CheckIcon"

const TodoItem = ({todo, DeleteTodo, UpdateTodo}) => { 
    const {id, title, state}= todo
    return(
      
<article className="flex gap-4 py-4 border-gray-400 border-b-2 px-4 dark:bg-gray-800 transition-all duration-1000	">

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
 };
 export default TodoItem