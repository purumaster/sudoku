import React, { Component } from "react";

/* Grid Component */
class Grid extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">3</th>
            <th scope="col">3</th>
            <th scope="col">3</th>
            <th scope="row">3</th>
            <th scope="row">3</th>
            <th scope="row">3</th>
          </tr>
        </thead>
      </table>
    );
  }
}
export default Grid;
