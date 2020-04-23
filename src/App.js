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

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(e) {
    this.setState({ searchInput: e.target.value }, () => {
      console.log(this.state.searchInput);
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
        <h2>Cat Rolodex</h2>
        <InputBox
          placeholder="Search your kitty"
          handleChange={this.handleInputChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
