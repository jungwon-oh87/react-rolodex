import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Jay Oh",
          id: 1,
        },
        {
          name: "Jessie Ji",
          id: 2,
        },
        {
          name: "Dave Irvine",
          id: 3,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((m) => {
          return <h2 key={m.id}>{m.name}</h2>;
        })}
      </div>
    );
  }
}

export default App;
