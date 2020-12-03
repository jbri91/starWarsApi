import React, { useState } from 'react'

// limit table to 10 characters at a time
// Should automatically populate when opening the home page
// Using swapi.dev API to pull in data

function Table() {
    const [ name ] = useState('Luke Skywalker')
    const [ birthDate ] = useState('19BBY')
    const [ height ] = useState('172')
    const [ mass ] = useState('77')
    const [ homeWorld ] = useState('Tatooine')
    const [ species ] = useState('Human')

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
            <td>{name}</td>
            <td>{birthDate}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{homeWorld}</td>
            <td>{species}</td>
            </tr>
            <tr >
            <td>C-3PO</td>
            <td>112BBY</td>
            <td>167</td>
            <td>75</td>
            <td>Tatooine</td>
            <td>Droid</td>
            </tr>
            <tr >
            <td>R2-D2</td>
            <td>33BBY</td>
            <td>96</td>
            <td>32</td>
            <td>Naboo</td>
            <td>Droid</td>
            </tr>
            <tr >
            <td>Darth Vader</td>
            <td>41.9BBY</td>
            <td>202</td>
            <td>136</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
            <tr >
            <td>Luke Skywalker</td>
            <td>19BBY</td>
            <td>172</td>
            <td>77</td>
            <td>Tatooine</td>
            <td>Human</td>
            </tr>
        </tbody>    
            
        </table>        
        </div>
    )
}

export default Table