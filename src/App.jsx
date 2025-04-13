import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const CreateTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      state: false,
    };
    setTodos([...todos, newTodo]);
  };

  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const UpdateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const ComputedItemsLeft = todos.filter((todo) => !todo.state).length;

  const ClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.state));
  };

  const [filter, SetFilter] = useState("all");
  const ChangeFilter = (filter) => SetFilter(filter);

  const FilterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.state);
      case "complete":
        return todos.filter((todo) => todo.state);
      default:
        return todos;
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div className="bg-[url('/images/bg-mobile-light.jpg')] 
                    md:bg-[url('/images/bg-desktop-light.jpg')] 
                    dark:bg-[url('/images/bg-mobile-dark.jpg')] 
                    md:dark:bg-[url('/images/bg-desktop-dark.jpg')] 
                    bg-no-repeat bg-left-top bg-contain bg-gray-200 
                    min-h-screen dark:bg-gray-900 
                    transition-all duration-1000">
      <Header />

      <main className="container mx-auto px-4 mt-7 md:max-w-xl">
        <TodoAdd CreateTodo={CreateTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={FilterTodos()}
            DeleteTodo={DeleteTodo}
            UpdateTodo={UpdateTodo}
          />
        </DragDropContext>

        <TodoComputed
          ComputedItemsLeft={ComputedItemsLeft}
          ClearCompleted={ClearCompleted}
        />

        <TodoFilter ChangeFilter={ChangeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag N Drop 2 reorder list
      </footer>
    </div>
  );
};

export default App;
