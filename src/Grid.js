import React, { Component } from "react";

/* Grid Component */
class Grid extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-md-3">Invoice</th>
            <th className="col-md-3">Date</th>
            <th className="col-md-3">Amount</th>
            <th className="col-md-3">Status</th>
            <th className="col-md-3">Invoice</th>
            <th className="col-md-3">Date</th>
            <th className="col-md-3">Amount</th>
            <th className="col-md-3">Status</th>
            <th className="col-md-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Feb 1, 2014</td>
            <td>$45.00</td>
            <td>Owing</td>
          </tr>
          <tr>
            <td>67890</td>
            <td>Jan 30, 2014</td>
            <td>$19.99</td>
            <td>Overdue</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Grid;
