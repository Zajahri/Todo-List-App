import React, { useState } from "react";
import "./styles.css";

const Event = () => {
  const [fullName, setFullname] = useState({
    fName: "",
    lName: "",
  });
  const [nFullName, setNFullName] = useState({
    fName: "",
    lName: "",
  });

  const updateFullName = (e) => {
    const newValue = e.target.value;
    const inputValue = e.target.name;

    setFullname((prev) => {
      if (inputValue === "fName") {
        return {
          fName: newValue,
          lName: prev.lName,
        };
      } else if (inputValue === "lName") {
        return {
          fName: prev.fName,
          lName: newValue,
        };
      }
    });
  };

  const clickEventHandler = () => {
    setNFullName({
      fName: fullName.fName,
      lName: fullName.lName,
    });
  };

  console.log(fullName.fName);

  return (
    <div className="container">
      <h1>Hello {nFullName.fName +" "+ nFullName.lName}</h1>
      <input
        type="text"
        name="fName"
        onChange={updateFullName}
        placeholder="type your firstname"
        value={fullName.fName}
      />
      <input
        type="text"
        name="lName"
        onChange={updateFullName}
        placeholder="type your lastname"
        value={fullName.lName}
      />

      <button onClick={clickEventHandler}>click me</button>
    </div>
  );
};

export default Event;
