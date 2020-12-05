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
    fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(json => this.setState({
      name: json.name,
      birthDate: json.birth_year,
      height: json.height,
      mass: json.height,
      homeWorld: json.homeworld,
      species: json.species
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
      <Table
      name={this.state.name}
      birthDate={this.state.birthDate}
      height={this.state.height}
      mass={this.state.mass}
      homeWorld={this.state.homeWorld}
      species={this.state.species}
      id={this.state.id}
      />
    </div>
  );}
}

export default App;
