import React from 'react'
import Table from './components/Table'
import UserInput from './components/UserInput'
import './App.css';
import Pagination from 'react-js-pagination'
import StarWarsPagination from './components/StarWarsPagination'



// import axios from 'axios'
// let date = new Date

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
     activePage: 1,
     loading: false,
     character: []
  }
}

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`)
  this.setState({activePage: pageNumber})
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
  .then(response => this.setState({ 
    loading: false, 
    character: [...response[0].results ], 
    planets: [...response[1].results],
    species: [...response[2].results]
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
        character={this.state.character}
        planets={this.state.planets}
        species={this.state.species}
      />}
      <StarWarsPagination
      activePage={this.state.activePage}
      itemsCountPerPage={10}
      totalItemsCount={82}
      pageRangeDisplayed={10}
      onChange={this.handlePageChange.bind(this)} />
    </div>
  );}
}

export default App;
