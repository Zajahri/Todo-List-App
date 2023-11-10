import React, { useState } from "react";
import "./styles.css";
import InputArea from "./InputArea";

const Todo = () => {

  const [newTodo, setNewTodo] = useState([]);

  const clickHandler = (todo) => {
    if (todo === "") {
      alert("you must fill the input field");
    } else {
      setNewTodo((prev) => {
        return [...prev, todo];
      });
    }
  };

  const deleteHandler = (id) => {
    setNewTodo((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <InputArea onAdd={clickHandler}/>
      <div className="container2">
        <ul>
          <li>{newTodo.length === 0 && "Create new tasks"}</li>
          {newTodo.map((item, index) => {
            return (
              <li key={index} id={index}>
                {item}{" "}
                <button
                  className="btn"
                  onClick={() => {
                    deleteHandler(index);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Todo;
