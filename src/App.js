import React from "react";
import Table from "./components/Table";
import UserInput from "./components/UserInput";
import "./App.css";
import StarWarsPagination from "./components/StarWarsPagination";

// import axios from 'axios'
// let date = new Date

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      loading: false,
      character: [],
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleDataRequest = this.handleDataRequest.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activePage !== prevState.activePage) {
      this.handleDataRequest();
    }
  }

  componentDidMount() {
    this.handleDataRequest();
  }



  async handleDataRequest() {
    this.setState({
      loading: true,
    })

    const characters = await fetch(`https://swapi.dev/api/people/?page=${this.state.activePage}`).then((people) => people.json()).then((character) =>  character.results);
    
    console.log(characters[1].species)

    for(let i=0; i < characters[i].species.length; i++) {
      if(characters[i].species.length > 0) {
        const species = await fetch(characters[i].species.url).then((species) => species.json()).then((species) => species.results)
        console.log(species)
      }
      
    }
   

  }



   



  //   Promise.all([
  //     fetch(
  //       `https://swapi.dev/api/people/?page=${this.state.activePage}`
  //     ).then((people) => people.json()),
  //     fetch(
  //       `https://swapi.dev/api/planets/?page=${this.state.activePage}`
  //     ).then((planets) => planets.json()),
  //     fetch(
  //       `https://swapi.dev/api/species/?page=${this.state.activePage}`
  //     ).then((species) => species.json()),
  //   ])
  //     .then((response) =>
  //       this.setState({
  //         loading: false,
  //         character: [...response[0].results],
  //         planets: [...response[1].results],
  //         species: [...response[2].results],
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <h1
          style={{
            fontSize: "60px",
            color: "yellow",
          }}
        >
          Star Wars API
        </h1>
        <UserInput />
        {this.state.loading ? (
          <h1 style={{ color: "yellow" }}>Loading...</h1>
        ) : (
          <Table
            character={this.state.character}
            planets={this.state.planets}
            species={this.state.species}
          />
        )}
        <StarWarsPagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={82}
          pageRangeDisplayed={10}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
