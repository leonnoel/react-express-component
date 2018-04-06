import React, { Component } from 'react';
import logo from './logo.svg';
import './Messages.css';

class Messages extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/messages',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const defaultStyle = {
      color: "white",
      borderColor: "red",
      borderSize: 1,
      borderStyle: "solid"
    }
    const style = {
      ...defaultStyle,
      margin: 20,
      padding: 20,
      backgroundColor: this.props.color,
    }
    return (
      <div className="Messages">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div style={style} key={user.name}>{user.msg}</div>
        )}
      </div>
    );
  }
}

export default Messages;
