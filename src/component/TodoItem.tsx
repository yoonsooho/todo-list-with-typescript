import React from 'react'
import classes from '../component/TodoItem.module.css'

const TodoItem:React.FC<{item:{id:string,text:string},onRemoveTodo:(id:string)=>void }> = (props) => {
  return (
    <li className={classes.item} key={props.item.id} onClick={()=>{props.onRemoveTodo(props.item.id)}}>{props.item.text}</li> 
  )
}

export default TodoItem