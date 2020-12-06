import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
// import axios from 'axios'
let date = new Date

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
    .then(([people, planet, species]) => this.setState({
      loading: false,
      character: [{
        name: people.results[0].name,
        birthDate: people.results[0].birth_year,
        height: people.results[0].height,
        mass: people.results[0].mass,
        homeWorld: planet.results[0].name,
        species: species.results[0].name,
        id: Math.random(date.getTime() * 10)
    }]
    }))
    .catch(error => {console.log(error);});
  }


 render() {
   console.log(this.state.character)
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
      />}
    </div>
  );}
}

export default App;
