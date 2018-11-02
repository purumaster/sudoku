import React, { Component } from "react";

export default class APIData extends Component {
  state = {
    users: undefined
  };

  ReadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json))
      .then(json => this.setState({ users: json }))
      // .then(this.state.users => console.log(this.state.users))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>APIData</h1>
        <button onClick={this.ReadUsers}>Push me</button>
        <ul>
          {users.map(user => (
            <li>name: {user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
