import React from 'react'


function UserInput(props) { 
    return (
        <input 
        onChange={props.onChange}
        size="50"
        placeholder="Who do you seek?"
        name="userInput"
       />
       
    )
}


export default UserInput