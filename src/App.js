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
      characters: [],
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
    
    for(let i=0; i < characters.length; i++) { 
       await fetch(characters[i].homeworld).then(response => response.json())
       if(characters[i].species.length > 0) {
      await fetch(characters[i].species).then(response => response.json()) 
       } else {
         characters[i].species = 'Human'
       }
      this.setState({
        loading: false,
        characters: characters
      })
  }}

  render() {
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
            characters={this.state.characters}
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
