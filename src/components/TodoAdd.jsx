import { useState } from "react";
import PropTypes from "prop-types";

const TodoAdd = ({ CreateTodo }) => {
  const [title, setTitle] = useState("");

  const HandelSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return setTitle("");
    CreateTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={HandelSubmitAddTodo}
      className="bg-white rounded-md overflow-hidden py-1.5 flex gap-4 items-center px-4 dark:bg-gray-800 transition-all duration-1000"
    >
      <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
      <input
        className="w-full text-gray-400 outline-none  dark:bg-gray-800 transition-all duration-1000"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

TodoAdd.propTypes = {
  CreateTodo: PropTypes.func.isRequired,
};

export default TodoAdd;
