import React, { useState } from "react";
import "./styles.css";

const Event = () => {
  
  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: '',
  })

  const [nContact, setNContact] = useState({
    fName: '',
    lName: '',
    email: '',
  })

  const updateContact = (e) => {

    const { name, value } = e.target

    setContact((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const clickHandler = () => {
    setNContact({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
    })
  }

  return (
    <div className="container">
      <h1>Hello {nContact.fName + " " + nContact.lName + " "}</h1>
      <p>{nContact.email}</p>
      <input
        type="text"
        name="fName"
        onChange={updateContact}
        placeholder="type your firstname"
        value={contact.fName}
      />
      <input
        type="text"
        name="lName"
        onChange={updateContact}
        placeholder="type your lastname"
        value={contact.lName}
      />

      <input
        type="text"
        name="email"
        onChange={updateContact}
        placeholder="type your email"
        value={contact.email}
      />    

      <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default Event;
