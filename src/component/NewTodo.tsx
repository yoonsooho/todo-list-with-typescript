import React,{useRef} from 'react'
import classes from '../component/NewTodo.module.css'

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  
  const submithandler = (e:React.FormEvent)=>{
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if(enteredText?.trim().length === 0){
      return
    }

    props.onAddTodo(enteredText)
    todoTextInputRef.current!.value =''
  }
  return (
    <form onSubmit={submithandler} className={classes.form}>
      <label htmlFor="text" className={classes.label}>Todo text</label>
      <input type="text" id='text' ref={todoTextInputRef} className={classes.input}></input>
      <button className={classes.button}>Add Todo</button>
    </form>
  )
}

export default NewTodo