import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    return (
      <div className="app">
        <h1>Cool Robots</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
