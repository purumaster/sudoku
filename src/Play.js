import React, { Component } from "react";
import Grid from "./Grid";
import Check from "./Check";

class Play extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3 className="display-3">Sudoku</h3>
        </div>
        <Grid />;
      </React.Fragment>
    );
  }
}

export default Play;
