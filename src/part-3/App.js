import React from "react";
import Card from "./Card";
import emojipedia from "./emojipedia";
import "./styles.css";

const App = () => {
  return (
    <div className="main">
      <h1 className="title">Emojipedia</h1>
      <div className="flex">
        {emojipedia.map((index) => {
          return (
            <Card
              id={index.id}
              emoji={index.emoji}
              name={index.name}
              meaning={index.meaning}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
