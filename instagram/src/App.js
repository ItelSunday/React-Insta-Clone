import React, { Component } from 'react';
import './App.css';

//sample user information
import dummyData from './dummy-data';

//imported from components folder
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from "./components/PostContainer/PostContainer";

// import PropTypes from 'prop-types';



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
      <SearchBar />
         {
           this.state.dummyData.map((post, index) => (
            <PostContainer key = {index} post= {post} />
           ))
         };
         </header>
      </div>
    );
  }
}

export default App;


//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
