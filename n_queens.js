// Question - https://leetcode.com/problems/n-queens/


/**
 * @param {number} n
 * @return {string[][]}
 */
// Tips
//
// Each row must have one cell for a Queen
// Number of Queens equals to N (rows)
//
// There are 2 triggers which will allow the cursor move up along the tree
// First trigger, when the current cell has a Queen and the current cell is the last row
// Second trigger, when the current cell is the last column on a row, but there is no Queen on the current row
//
const isAttacked = ({ current, queens }) => {
  const sameDiagonal = ({ row1, row2, column1, column2 }) => {
    return Math.abs(row1 - row2) === Math.abs(column1 - column2);
  };

  if (queens.some(q => q.row > 0 && q.column === current.column))
    return true;

  if (queens.some(q => q.row > 0 && sameDiagonal({ row1: q.row, row2: current.row, column1: q.column, column2: current.column })))
    return true;

  return false;
};

const rebuildQueens = ({ row, queens, n }) => {
  if (row < 1) {
    console.log("Try to erase a queen on row " + row);
    return queens;
  }

  const new_queens = Array(n).fill({ row: null, column: null });

  for (i = 0; i < row; i++) {
    new_queens[i] = queens[i];
  }

  return new_queens;
};

const backUp = ({ row, queens, n }) => {
  if ((row - 1) < 1)
    return { row: 0, column: 0 };

  const cursor = { row: row - 1, column: queens[row - 2].column + 1 };
  const needToMoveUpAgain = () => {
    return queens[row - 2].column >= n;
  };

  // Move up along the tree repeatedly until the target column is less than n
  if (needToMoveUpAgain()) {
    return backUp({ row: cursor.row, queens, n });
  }

  return { ...cursor };
};

const printSolutions = ({ solutions, n }) => {
  return solutions.map(queens => {
    return queens.map(q => {
      let str = '';
      for(i = 1; i <= n; i++) {
        if (q.column === i) {
          str += 'Q';
        } else {
          str += '.';
        }
      }

      return str;
    });
  });
};

var solveNQueens = function (n) {
  let row = 1;
  let column = 1;
  let queens = Array(n).fill({ row: null, column: null });
  const solutions = [];
  const moveUpTree = () => {
    const { row: temp_row, column: temp_column } = backUp({ row, queens, n });

    row = temp_row;
    column = temp_column;

    queens = [...rebuildQueens({ row, queens, n })];
  };
  const moveToNextRow = () => {
    row++;
    column = 1;
  };

  while (row <= n && row >= 1) {
    if (column > n) {
      throw "column is wrong";
    }

    while (column <= n) {
      if (!isAttacked({ current: { row, column }, queens })) {
        queens[row - 1] = { row, column };
        console.log('queens ' + JSON.stringify(queens));

        // when a queen is on the last row, all n queens have been found
        if (row === n) {
          solutions.push([...queens]);
          moveUpTree();
          break;
        }

        moveToNextRow();
        break;
      }

      // Each row must have a queen.
      // Move back to a row above when there is no cell for a queen on a row
      if (column === n) {
        moveUpTree();
        break;
      }

      column++;
    }
  }

  // console.log(solutions);
  return printSolutions({ solutions, n });
};
