import TodoItem from "./TodoItem";

const TodoList = ({todos, DeleteTodo, UpdateTodo}) => { 
return(
    <div className="mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4">

    {todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>
    ))}
    
    </div>
    );
 };

 export default TodoList