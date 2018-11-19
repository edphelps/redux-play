import React, { Component } from 'react';
import './App.css';

class App extends Component {

  trash = () => {
    console.log("trash");
  }

  render() {
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

export default App;
