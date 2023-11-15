import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck"

const TodoItem = ( {todo, removeTodo, updateTodo} ) => {

  const {id, title, completed} = todo

  return (
    <article className="flex gap-4 items-center border-b ">
            <button 
            className={`rounded-full border-2 w-5 h-5 flex-none ${completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block"}`}
            onClick={() => updateTodo(id)}
            >
              {
                completed && <IconCheck />
              }
            </button>

            <p className={`text-gray-500 dark:text-gray-400 grow ${completed && "line-through"}`}> {title} </p>
            <button 
            className="flex-none"
            onClick={() => removeTodo(id)}>
              <IconCross className={`fill-gray-500 dark:fill-gray-400`}/>
            </button>
        </article>
  )
}

export default TodoItem