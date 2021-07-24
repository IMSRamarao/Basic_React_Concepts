import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Assignment1 from './Components/Assignment1/Assignment1';
import Assignment2 from './Components/Assignment2/Assignment2';
import Persons from './Components/persons/Persons';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Persons appTitle="Person Manager" />
        {/* <Assignment1 />
        <Assignment2 /> */}
      </div>
    );
  }
}

export default App;
