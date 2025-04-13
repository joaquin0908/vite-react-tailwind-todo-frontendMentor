import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, DeleteTodo, UpdateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  DeleteTodo={DeleteTodo}
                  UpdateTodo={UpdateTodo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.bool.isRequired,
    })
  ).isRequired,
  DeleteTodo: PropTypes.func.isRequired,
  UpdateTodo: PropTypes.func.isRequired,
};

export default TodoList;
