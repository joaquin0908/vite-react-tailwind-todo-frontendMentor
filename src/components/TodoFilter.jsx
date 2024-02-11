const TodoFilter = ({ChangeFilter, filter}) => { 
    return(
<section className=" container mx-auto mt-7">
    <div className="bg-white p-4 rounded-md flex justify-center gap-4  dark:bg-gray-800 transition-all duration-1000" >
    <button
     className={`${
        filter === `all`
      ? `text-blue-600 hover:text-gray-400`  
      : `text-gray-400 hover:text-gray-400`
     } `}
     onClick={() => ChangeFilter("all")}
     >
        All
    </button>
    <button
        className={`${
            filter === `active`
          ? `text-blue-600 hover:text-gray-400`  
          : `text-gray-400 hover:text-gray-400`
         } `}
     onClick={() =>  ChangeFilter("active")}
     >
        Active
    </button>
    <button
        className={`${
            filter === `complete`
          ? `text-blue-600 hover:text-gray-400`  
          : `text-gray-400 hover:text-gray-400`
         } `}
     onClick={() => ChangeFilter("complete")}
     >
        Complete
    </button>
    </div>
</section>
    );
 };
 
 export default TodoFilter