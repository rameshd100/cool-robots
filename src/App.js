import React, { Component } from "react";
import SearchBox from "./components/search-box/search-box";
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

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="app">
        <div className="header">
          <h1 id="title">Cool Robots</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
        </div>
        <CardList robots={filteredRobots} />
        <a href="#title">
          <i class="far fa-arrow-alt-circle-up"></i>
        </a>
        <footer className="footer">
          <h3>
            &copy; Made with <i class="fas fa-heart"></i> by <a href="www.rameshdahal.com">Ramesh Dahal</a>
          </h3>
        </footer>
      </div>
    );
  }
}

export default App;
