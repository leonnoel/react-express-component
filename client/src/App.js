import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages.js';

class App extends Component {

  render() {
    return (
      <div>
        <Messages color='blue'></Messages>
      </div>
    );
  }
}

export default App;
