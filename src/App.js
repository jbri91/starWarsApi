import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
import StarWarsPagination from './components/StarWarsPagination'



// import axios from 'axios'
// let date = new Date

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
     loading: false,
     character: []
  }
}

  componentDidMount() {
    this.setState({
      loading: true
    })
    
    Promise.all([
    fetch('https://swapi.dev/api/people/').then(people => people.json()),
    fetch('https://swapi.dev/api/planets/').then(planets => planets.json()),
    fetch('https://swapi.dev/api/species/').then(species => species.json())
  ])
  .then(response => this.setState({ 
    loading: false, 
    character: [...response[0].results ], 
    planets: [...response[1].results],
    species: [...response[2].results]
  }))
    .catch(error => {console.log(error);});
  }


 render() {
   console.log(this.state)
  return (
    <div className="App">   
          <h1 style=
          {{ 
            fontSize: '60px', 
            color: 'yellow'
          }}>Star Wars API</h1>
      <UserInput />
      {this.state.loading ? <h1 style={{color: 'yellow'}}>Loading...</h1> : 
      <Table 
        character={this.state.character}
        planets={this.state.planets}
        species={this.state.species}
      />}
      <StarWarsPagination />
    </div>
  );}
}

export default App;
