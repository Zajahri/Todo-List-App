import React from 'react'
import Form from './Form'
import Login from './Login'

let isRegistered = true 


const App = () => {
    return (
        <>
          {isRegistered? <Form lineThrough = {false}/> : <Login />}
        </>
    )
}

export default App