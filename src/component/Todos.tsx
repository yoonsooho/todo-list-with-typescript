import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import classes from '../component/Todos.module.css'

const Todos: React.FC<{ items: Todo[],onRemoveTodo:(id: string)=>void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => {
        return <TodoItem item={item} onRemoveTodo={props.onRemoveTodo}></TodoItem>
      })}
    </ul>
  )
}

export default Todos
