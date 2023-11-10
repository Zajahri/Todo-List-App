
import React, { useState } from "react";
import TodoItem from "./todoItem"; 
import './styles.css'

    
function Todos() {

    const [todo, setTodo] = useState('')
    const [items, setItems] = useState([])

    const handleChange = (e) => {
        const newValue = e.target.value
        setTodo(newValue)
    }

    const clickHandler = () => {
        setItems(prev => {
            return [
            ...prev,
            todo,
            ]
        })
        setTodo("")
    }

    const deleteHandler = (id) => {
        setItems(prev => {
            return prev.filter((item, index) => {
                return index !== id
            })
        })
    }
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={todo} required/>
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map((item, index) => {
                return <TodoItem 
                    key={index} 
                    id={index}
                    item={item} 
                    onChecked={deleteHandler}  
                />
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Todos;
 