import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
// import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    let date = new Date
    this.state = {
      loading: false,
      name: " ",
      birthDate: " ",
      height: " ",
      mass: " ",
      homeWorld: " ",
      species: " ",
      id: Math.random(date.getTime() * 10)
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
    // .then(response => response.json())
    .then(([people, planet, species]) => this.setState({
      loading: false,
      name: people.results[0].name,
      birthDate: people.results[0].birth_year,
      height: people.results[0].height,
      mass: people.results[0].mass,
      homeWorld: planet.results[0].name,
      species: species.results[0].name
    }))
    .catch(error => {console.log(error);});
  }


 render() {
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
      name={this.state.name}
      birthDate={this.state.birthDate}
      height={this.state.height}
      mass={this.state.mass}
      homeWorld={this.state.homeWorld}
      species={this.state.species == "" ? 'Human' : this.state.species}
      id={this.state.id}
      />}
    </div>
  );}
}

export default App;
