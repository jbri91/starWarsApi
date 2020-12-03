import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  componentDidMount() {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
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
      <Table />
    </div>
  );}
}

export default App;
