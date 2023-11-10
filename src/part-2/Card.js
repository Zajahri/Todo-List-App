import React from "react";
import Avatar from "./Avatar"
import Detail from './Detail'
import './styles.css'

function Card(props) {
 
  const backgroundColor = (props.gender === 'female')? '#1a7e76' : 'blue'
  const fontColor = (props.gender === 'female')? 'white' : 'red'
  
  const backgroundStyle = {
    backgroundColor: backgroundColor,
  }
  const fontColorStyle = {
    color: fontColor
  }
  
  return (
    <div>
      <div className="card" style={backgroundStyle}>
        <div className="top">
          <h2>{props.name}</h2>
          <Avatar imgs={props.img}/>
        </div>
        <div className="bottom" style={fontColorStyle}>
          <Detail detailInfo={props.tel}/>
          <Detail detailInfo={props.email}/>
        </div>
      </div>
    </div>
  );
}

export default Card;