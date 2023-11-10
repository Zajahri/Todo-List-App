import React, { useState } from "react";

const InputArea = (props) => {
  const [todo, setTodo] = useState("");

  const inputHandler = (e) => {
    const newValue = e.target.value;
    setTodo(newValue);
  };

  return (
    <div className="container">
      <input
        type="text"
        onChange={inputHandler}
        value={todo}
        placeholder="Task to be done..."
      />
      <button
        onClick={() => {
          props.onAdd(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputArea;
