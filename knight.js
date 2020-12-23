const trackKnightMoves = (size, board) => {
    //board size = size * size (dimension)
    const BOARD_SIZE = size;
    let Position = 1;

    // all possible moves in terms of knight movement
    const rowMoves = [2, 1, -1, -2, -2, -1, 1, 2, 2]
    const colMoves = [1, 2, 2, 1, -1, -2, -2, -1, 1]


    const IswithInBoardBoundary = (xPos, yPos) => {
        return (xPos < 0 || yPos < 0 || xPos >= size || yPos >= size)
            ? false
            : true
    }

    const logBoard = () => {
        console.table(board)
    }



    const knightMovementTraker = (startX, startY) => {
        // current square is already visited
        board[startX][startY] = Position

        // if board is visited its time to return
        if (Position >= size * size) {
            board[startX][startY] = 0;
            logBoard(board);
            return
        }
    

        // move in all possible 8 positions
        for (let k = 0; k < 8; k++) {
           
            // Get the new position of Knight from current
            // position on chessboard
            let newX = startX + rowMoves[k];
            let newY = startY + colMoves[k];
            
            // if new position is a valid and not visited yet
            if (IswithInBoardBoundary(newX, newY) && board[newX][newY] == 0) {
                Position += 1;
                knightMovementTraker(newX, newY);
                // board[startX][startY] = 0
            }
            
        }
    }

    return knightMovementTraker

}

const initiate = (size) => {

    //create board of size
    let board = new Array(size).fill(0);

    for (var rowI = 0; rowI < board.length; rowI++) {
        board[rowI] = new Array(size).fill(0);
    }

    //start postion
    const startX = 0;
    const startY = 0;

   trackKnightMoves(size, board)(startX, startY)

}

initiate(6)