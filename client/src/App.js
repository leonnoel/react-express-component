import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages/Messages.js';

class App extends Component {

  render() {
    return (
      <div>
        <Messages color='blue' width='300px'></Messages>
        <Messages color='purple' width='300px'></Messages>
      </div>
    );
  }
}

export default App;
