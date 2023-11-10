import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Zoom from '@mui/material/Zoom';
import Tooltip from '@mui/material/Tooltip';

const Keeper = () => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [newInput, setNewInput] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clickHandler = () => {
    if(input.title === '' || input.content === '') {
        alert('please fill all fields')
    } else {
        setNewInput((prevNewInput) => [...prevNewInput, input]);
        setInput({
        title: "",
        content: "",
        });
    }
  };

  const deleteHandler = (id) => {
    setNewInput((prev) => {
      return prev.filter((item, note) => {
        return note !== id;
      });
    });
  };

  const [isZoom, setIsZoom] = useState(false)
  const zoomHandler = () => {
    setIsZoom(true)
  }
  return (
    <>
      <div className="container">
        <div className="keeper" onClick={zoomHandler}>
          <Zoom in={isZoom}>
          <input
            type="text"
            name="title"
            onChange={inputHandler}
            value={input.title}
            placeholder="Title"
          />
          </Zoom>

          <input
            type="text"
            name="content"
            onChange={inputHandler}
            value={input.content}
            placeholder="Take a note"
          />
         <Zoom in={isZoom}>  
         <Tooltip title='add'>
            <button className="add" onClick={clickHandler}>
              <AddCircleIcon className="addBtn"/>
            </button>
          </Tooltip>
          </Zoom>
        </div>
      </div>

      <div className="flex-container">
      <p>{newInput.length === 0 && 'Create some tasks...'}</p>
        {newInput.map((item, index) => {
          return (
            <div key={index} className="note">
              <div className="card">
                <ul>
                  <li className="title">{item.title}</li>
                  <li className="content">{item.content}</li>
                </ul>
                <Tooltip title='delete'>
                <button
                  className="delete"
                  onClick={() => {
                    deleteHandler(index);
                  }}
                >
                  <DeleteIcon />
                </button>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Keeper;
