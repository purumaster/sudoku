import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">SUDOKU</h1>
        <p className="lead">I love Sudoku!</p>

        <a className="btn btn-primary btn-lg" href="./Play" role="button">
          Start
        </a>
      </div>
    );
  }
}

export default Dashboard;
