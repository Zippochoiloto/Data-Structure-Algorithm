function isValidSoduku(board) {
    let rowSet = new Set();
    let colSet = new Set();
    let gridSet = new Set();

    for (let i = 0 ; i < board.length; i++) {
        rowSet.clear();
        colSet.clear();
        gridSet.clear();
        for (let j = 0 ; j < board.length; j++) {
            let rowE = board[i][j];
            let colE = board[j][i];
            let gridE = board[Math.floor(i / 3) * 3 + Math.floor(j / 3) * 3][(i % 3) * 3 + (j % 3)];

            if (rowE !== '.' && rowSet.has(rowE)) return false;
            rowSet.add(rowE);
            if (colE !== '.' && colSet.has(colE)) return false;
            colSet.add(colE);
            if (gridE !== '.' && gridSet.has(gridE)) return false;
            gridSet.add(gridE);
        }

        return true
    }
}

let input = [["5","3",".",".","7",".",".","9","9"],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSoduku(input))
