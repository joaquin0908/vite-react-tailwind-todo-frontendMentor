
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

/* const initialStateTodos = [
    {id:1, title: "Complete Javascript bluueweb Curse", state: true},
    {id:2, title: "Jag around the park 3x", state: false},
    {id:3, title: "10 minutes of meditation", state: true},
    {id:4, title: "Read for 1 hour", state:false},
    {id:5, title: "Pick up groceries", state:false},
    {id:6, title: "Complete Todo App on Frontend Mentor", state:false},
] */
const initialStateTodos =JSON.parse(localStorage.getItem("todos")) || [] 

const app = () =>{
    const [todos, setTodos] = useState(initialStateTodos)

    useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);


const CreateTodo = (title) =>{
    const newTodo = {
    id: Date.now(),
    title: title.trim(),
    state: false,
};
  setTodos([...todos, newTodo])    
};

const DeleteTodo = (id) =>{
setTodos(todos.filter((todo) => todo.id !== id))
};

const UpdateTodo = (id) =>{
    setTodos(todos.map(todos => todos.id == id ? {...todos, state: !todos.state} : todos))
};

const ComputedItemsLeft = todos.filter((todos) => !todos.state).length;

const ClearCompleted = () =>{
setTodos (todos.filter((todos) => !todos.state));
};

  const ChangeFilter = (filter) => SetFilter(filter);  
    


const [filter, SetFilter] = useState("all")
const FilterTodos = () =>{
    switch(filter){
        case "all":
            return todos;
        case "active":
            return todos.filter((todos) => !todos.state);
        case "complete":
            return todos.filter((todos) => todos.state);
        default:
            return todos;     

    };

};  

return (

<div className="bg-[url('assets\images\bg-mobile-light.jpg')] md:bg-[url('assets\images\bg-desktop-light.jpg')] md:dark:bg-[url('assets\images\bg-desktop-dark.jpg')] bg-no-repeat bg-left-top bg-contain bg-gray-200 min-h-screen  dark:bg-gray-900 dark:bg-[url('assets\images\bg-mobile-dark.jpg')] transition-all duration-1000  ">

<Header />

<main className="container mx-auto px-4 mt-7 md:max-w-xl">

 <TodoAdd CreateTodo={CreateTodo}/>


<TodoList 
 todos={FilterTodos()}
 DeleteTodo={DeleteTodo} 
 UpdateTodo={UpdateTodo}
 />

<TodoComputed 
ComputedItemsLeft={ComputedItemsLeft} 
ClearCompleted={ClearCompleted}
/>


<TodoFilter ChangeFilter={ChangeFilter} filter={filter}/>
</main>



<footer className="text-center mt-8 dark:text-gray-400">
Drag N Drop 2 reorder list
</footer>
</div>
);
};

export default app
