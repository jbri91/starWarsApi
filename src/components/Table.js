import React from 'react'

// limit table to 10 characters at a time
// Should automatically populate when opening the home page
// Using swapi.dev API to pull in data

function Table(props) {

    return (
        <div>
            <br />
        <table>
        <thead >
        <tr style={{fontWeight: 'bold', fontSize: '20px', color: 'white'}}>
        <th>Name</th>
        <th>Birth Date</th>  
        <th>Height</th>  
        <th>Mass</th>  
        <th>HomeWorld</th>  
        <th>Species</th>      
        </tr>    
        </thead>
        <tbody style={{fontSize: '20px', color: 'white'}}>
            <tr >
            <td>{props.name}</td>
            <td>{props.birthDate}</td>
            <td>{props.height}</td>
            <td>{props.mass}</td>
            <td>{props.homeWorld}</td>
            <td>{props.species}</td>
            </tr>
        </tbody>   
        </table>  
           
        </div>
    )
}

export default Table