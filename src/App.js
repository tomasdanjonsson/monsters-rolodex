import React, { Component } from "react";
import styled from "styled-components";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(
        to left,
        rgba(7, 27, 82, 1) 0%,
        rgba(0, 128, 128, 1) 100%
    );
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1 {
    font-family: "Bigelow Rules";
    font-size: 72px;
    color: #0ccac4;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </AppWrapper>
      </>
    );
  }
}
export default App;
