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
    fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(data => this.setState({
      loading: false,
      name: data.name,
      birthDate: data.birth_year,
      height: data.height,
      mass: data.height,
      homeWorld: data.homeworld,
      species: data.species
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
