import React, { Component } from "react";

/* checkButton Component */
class Check extends Component {
  render() {
    return (
      <div className="checkButton">
        <button className="btn btn-primary btn-md btn btn-outline-primary">
          Check
        </button>
        <button className="btn btn-primary btn-md btn btn-outline-primary">
          Reset
        </button>
        <button className="btn btn-primary btn-md btn btn-outline-primary">
          New Game
        </button>
        <button className="btn btn-primary btn-md btn btn-outline-primary">
          Clear
        </button>
      </div>
    );
  }
}
export default Check;
