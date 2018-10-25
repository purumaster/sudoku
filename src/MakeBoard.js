import React from 'react';
import { List, fromJS } from 'immutable';


/**
 * make size 9 array of 0s
 * @returns {Array}
 */
function makeCountObject() {
  const countObj = [];
  for (let i = 0; i < 10; i += 1) countObj.push(0);
  return countObj;
}

/**
 * given a 2D array of numbers as the initial puzzle, generate the initial game state
 * @param puzzle
 * @returns {any}
 */
function makeBoard({ puzzle }) {
  // create initial count object to keep track of conflicts per number value
  const rows = Array.from(Array(9).keys()).map(() => makeCountObject());
  const columns = Array.from(Array(9).keys()).map(() => makeCountObject());
  const squares = Array.from(Array(9).keys()).map(() => makeCountObject());
  const result = puzzle.map((row, i) => (
    row.map((cell, j) => {
      if (cell) {
        rows[i][cell] += 1;
        columns[j][cell] += 1;
        squares[((Math.floor(i / 3)) * 3) + Math.floor(j / 3)][cell] += 1;
      }
      return {
        value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
        prefilled: !!puzzle[i][j],
      };
    })
  ));
  return fromJS({ puzzle: result, selected: false, choices: { rows, columns, squares } });
}

class Game extends Compoent {
  constructor(props) {
    super(props);
    this.generateGame();
  }

  generateGame = (finalCount = 20) => {
    // get a filled puzzle generated
    const solution = makePuzzle();
    // pluck values from cells to create the game
    const { puzzle } = pluck(solution, finalCount);
    // initialize the board with choice counts
    const board = makeBoard({ puzzle });
    this.setState({ board });
  }

  updateBoard = (newBoard) => {
    this.setState({ board: newBoard });
  };
...
}

export default MakeBoard;
