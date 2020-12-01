import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import star from './starWarsDeathStar.jpg'
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${star})` }} >
      <header className="App-header" >
        <body >      
          <h1>Star Wars API</h1>
      <UserInput />
      <Table />
      </body>
      </header> 
    </div>
  );
}

export default App;
