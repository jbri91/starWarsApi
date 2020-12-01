import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';

function App() {
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
  );
}

export default App;
