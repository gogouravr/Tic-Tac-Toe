import { useContext, memo, useEffect } from 'react';
import { BoardContext, Cell } from '../../store/board-context';

function togglePlaying(playing) {
    return playing === 'X' ? 'O' : 'X';
}

function updateBoard(board, rowIdx, colIdx, symbol) {
    // deep clone the board
    const newBoard = board.map(row => row.map(cell => new Cell(cell.x, cell.y, cell.symbol)))
    // update the cell
    newBoard[rowIdx][colIdx]['symbol'] = symbol;
    return newBoard;
}

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/display-name
const GameBoard = memo(({ playing, setPlaying, setIsGameOver }) => {
    console.log('GameBoard rendering!')
    const boardContext = useContext(BoardContext);

    const clickHandler = (rowIdx, colIdx) => {
        if (boardContext.board[rowIdx][colIdx]['symbol'])
            return;

        boardContext.setBoard(oldBoard => {
            return updateBoard(oldBoard, rowIdx, colIdx, playing);
        });

        // console.log(isGameConcluded());
        setPlaying(togglePlaying(playing));
    }

    const isGameConcluded = () => {
        for (let row of boardContext.board) {
            for (let cell of row)
                if (!cell.symbol)
                    return false;
        }
        return true;
    };

    useEffect(() => {
        console.log('use effect executed', isGameConcluded())
        if (isGameConcluded())
            /* if the react state is set with the same value as previous
            the rerender does not happen. This behaviour of React ensures 
            unnecessary rerender leading to performance optimisation */
            setIsGameOver(isGameConcluded);
    });

    return (
        <div className="board">
            {boardContext.board.map((row, rowIdx) => {
                return <div className="board__row" key={rowIdx}> {row.map((cell, colIdx) =>
                    <span onClick={() => clickHandler(rowIdx, colIdx)} className="cell" key={`${rowIdx}${colIdx}`}>
                        {cell.symbol || ''}
                    </span>)}</div>
            })}
        </div>
    )
})

export default GameBoard;
