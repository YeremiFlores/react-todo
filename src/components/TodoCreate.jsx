import { useState } from "react"

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmitAddTodo = (e) => {
      e.preventDefault()
      console.log(title)

      if(!title.trim()) {
        return setTitle("")
      }
      createTodo(title)
      setTitle("")
    }

    return (
        <form 
        onSubmit={handleSubmitAddTodo} 
        className="dark:bg-gray-800 flex bg-white rounded-md overflow-hidden py-3 gap-4 items-center px-4">
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input 
          type="text" 
          placeholder="Create a new todo..." 
          className="dark:bg-gray-800 w-full text-gray-400 outline-none" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </form>
    )
}

export default TodoCreate