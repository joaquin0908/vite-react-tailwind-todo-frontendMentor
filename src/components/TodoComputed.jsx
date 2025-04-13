import PropTypes from "prop-types";

const TodoComputed = ({ ComputedItemsLeft, ClearCompleted }) => {
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md  dark:bg-gray-800 transition-all duration-1000">
      <span className="text-gray-400">{ComputedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={ClearCompleted}>
      Completed
      </button>
    </section>
  );
};

TodoComputed.propTypes = {
  ComputedItemsLeft: PropTypes.number.isRequired,
  ClearCompleted: PropTypes.func.isRequired,
};

export default TodoComputed;
