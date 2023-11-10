import React, {useState} from 'react'

const Form = (props) => {

    const [click, setClick] = useState(props.lineThrough)

    const clickHandler = () => {
        return setClick(prev => {
            setClick(!prev)
        })
    }

    const strikeThrough = {textDecoration: "line-through",  cursor: 'pointer'}
    const style = click ? strikeThrough :  {cursor: 'pointer'}

    return (
        <>
            <h1 style={style}  onClick={clickHandler}>Form</h1>
            <button >change</button>
        </>
    )
}

export default Form