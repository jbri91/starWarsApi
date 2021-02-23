import React from "react";
import Table from "./components/Table";
import "./App.css";
import StarWarsPagination from "./components/StarWarsPagination";
import UserInput from "./components/UserInput";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      loading: false,
      search: "",
      characters: [],
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleDataRequest = this.handleDataRequest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

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

  async handleSubmit(e) {
    e.preventDefault();
    this.getCharacters(  `https://swapi.dev/api/people/?search=${this.state.search}`)
  }

  async handleDataRequest() {
    this.getCharacters(
      `https://swapi.dev/api/people/?page=${this.state.activePage}`
    );
  }

  async getCharacters(url) {
    this.setState({
      loading: true,
    });

    const characters = await fetch(url)
      .then((people) => people.json())
      .then((character) => character.results)
      .catch((error) => {
        console.error("Error:", error);
      });

    for (let i = 0; i < characters.length; i++) {
      if (characters.length > 0) {
        characters[i].homeworld = await fetch(
          characters[i].homeworld.replace("http", "https")
        )
          .then((response) => response.json())
          .then((homeworld) => homeworld.name)
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      if (characters[i].species.length > 0) {
        characters[i].species = await fetch(
          characters[i].species.toString().replace("http", "https")
        )
          .then((response) => response.json())
          .then((species) => species.name)
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        characters[i].species = "Human";
      }
    }
    this.setState({
      loading: false,
      characters: characters,
    });
  }

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
        <form onSubmit={this.handleSubmit}>
          <UserInput
            onChange={this.onChange}
            size="50"
            placeholder="Who do you seek?"
            name="userInput"
          />
        </form>
        <br />
        {this.state.loading ? (
          <h1 style={{ color: "yellow" }}>Loading...</h1>
        ) : (
          <Table characters={this.state.characters} />
        )}
        <br />
        <StarWarsPagination
          activePage={this.state.activePage}
          pageRangeDisplayed={10}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
