import React from 'react'



const Card = (props) => {
    return (
        <div className='container'>
            <p className='emo'>{props.emoji}</p>
            <p className='name'>{props.name}</p>
            <p className='meaning'>{props.meaning}</p>
        </div>
        
    )
}

export default Card