import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
