import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { InputBox } from "./components/input-box/input-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    // fetching API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
        console.log(users);
      });
  }

  render() {
    //destructure the state
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter((m) => {
      return m.name.toLowerCase().includes(searchInput);
    });

    return (
      <div className="App">
        <InputBox
          placeholder="Search your kitty"
          onChange={(e) => {
            this.setState({ searchInput: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
