import React from 'react'

// limit table to 10 characters at a time
// Should automatically populate when opening the home page
// Using swapi.dev API to pull in data

function Table() {
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
            
        </table>        
        </div>
    )
}

export default Table