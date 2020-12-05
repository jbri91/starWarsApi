import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
// import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: " ",
      birthDate: " ",
      height: " ",
      mass: " ",
      homeWorld: " ",
      species: " "
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
      />
    </div>
  );}
}

export default App;
