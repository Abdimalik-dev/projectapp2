import React, { useState } from 'react'
import { Todolist } from './Todolist'

export default function App() {
  const [todos, setTodos] = useState(['Todo 1 '. 'Todo 2'])
  return ( 
  <>
    <TodoList todoList={todos} />
   <input type='text'/>
   <button>Add TOdo</button>
   <button> clear completed todos</button>
    <div> 0 left to do </div>
  </>

  )
}

export default App;