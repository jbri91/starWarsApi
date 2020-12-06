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
    fetch('https://swapi.dev/api/people/1').then(people => people.json()),
    fetch('https://swapi.dev/api/planets/1').then(planets => planets.json()),
    fetch('https://swapi.dev/api/species/1/').then(species => species.json())
  ])
    // .then(response => response.json())
    .then(([data1, data2, data3]) => this.setState({
      loading: false,
      name: data1.name,
      birthDate: data1.birth_year,
      height: data1.height,
      mass: data1.mass,
      homeWorld: data2.name,
      species: data3.name
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
