// src/js/components/App.js
import React from 'react';
import List from './components/List';
import Form from './components/Form';

const App = () => (
  <div className="row mt-5">
    <div className="col-sm-4 offset-sm-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-sm-4 offset-sm-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

export default App;


// import React, { Component } from 'react';
// import './App.css';
//
// class App extends Component {
//   trash = () => {
//     console.log('nothing');
//   }
//
//   render() {
//     return (
//       <div className="App">
//         hello there
//       </div>
//     );
//   }
// }
//
// export default App;
