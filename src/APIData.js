import React, { Component } from "react";

export default class APIData extends Component {
  state = {
    users: []
  };

  componentWillMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.setState({ users: json }))
      // .then(this.state.users => console.log(this.state.users))
      .catch(error => {
        console.log(error);
      });
  };

  /*Delete API*/
  onDelete = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    });
  };

  /*Update API*/
  onUpdate = (id, data) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${(id, data)}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: "Makimi Meyer",
        username: "puru",
        email: "makimi.hanawa@gmail.com",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  /*Add API*/
  onAdd = (id, data) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${(id, data)}`, {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        name: "Makimi Meyer",
        username: "puru",
        email: "makimi.hanawa@gmail.com",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  render() {
    if (this.state.users && this.state.users.length) {
      const { users } = this.state;
      return (
        <div>
          <h1>APIData</h1>

          {users.map(user => (
            <li key={user.name}>
              {user.name} {user.price}
            </li>
          ))}
        </div>
      );
    } else {
      return <h3>Data Is Still Loading</h3>;
    }
  }
}
