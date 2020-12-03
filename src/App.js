import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }
  componentDidMount() {
    axios.get('https://swapi.dev/api/people/1')
    .then(response => {
      this.setState({ name: response.data.message})
    })
    .catch(error => {
      console.log(error);
    });
  }
 render() {
   const { name } = this.state;
  return (
    <div className="App">   
          <h1 style=
          {{ 
            fontSize: '60px', 
            color: 'yellow'
          }}>Star Wars API</h1>
          <h1>{ name }</h1>
      <UserInput />
      <Table />
    </div>
  );}
}

export default App;
