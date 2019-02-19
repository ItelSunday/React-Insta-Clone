import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';


class App extends Component {
constructor() {
  super();
  this.state ={
    dummyData
  }
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
         
          </p>

        </header>
      </div>
    );
  }
}

export default App;


//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
