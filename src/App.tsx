import { useState } from "react"
import "./App.css"
import NewTodo from "./component/NewTodo"
import Todos from "./component/Todos"
import Todo from "./models/todo"

function App() {
  const [todos,setTodos] = useState<Todo[]>([])

  const addTodoHandler=(todoText:string)=>{
    const newTodo = new Todo(todoText)
    
    setTodos([...todos,{...newTodo}])
    
  }
  const removeTodoHandler=(todoId: string)=>{

    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.id !== todoId)
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  )
}

export default App
