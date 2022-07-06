function checkBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'x') {
                if (i + 1 < board.length && j + 1 < board[i].length) {
                    if (board[i + 1][j + 1] === 'x') {
                        if (i + 2 < board.length && j + 2 < board[i].length) {
                            if (board[i + 2][j + 2] === 'x') {
                                return 'win';
                            }
                        }
                    }
                }
                if (i - 1 > 0 && j + 1 < board[i].length) {
                    if (board[i - 1][j + 1] === 'x') {
                        if (i - 2 >= 0 && j + 2 < board[i].length) {
                            if (board[i - 2][j + 2] === 'x') {
                                return 'win';
                            }
                        }
                    }
                }
                if (j + 1 < board[i].length) {
                    if (board[i][j + 1] === 'x') {
                        if (j + 2 < board[i].length) {
                            if (board[i][j + 2] === 'x') {
                                return 'win';
                            }
                        }
                    }
                }
                if (i + 1 < board.length) {
                    if (board[i + 1][j] === 'x') {
                        if (i + 2 < board.length) {
                            if (board[i + 2][j] === 'x') {
                                return 'win';
                            }
                        }
                    }
                }
            }
        }
    }
    return console.log('lose');
}

const board = [
    ['x', '0', 'x'],
    ['x', '0', '0'],
    ['x', '0', '0'],
];

console.log(checkBoard(board));
