import { useContext } from 'react';
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
export default function GameBoard({ playing, setPlaying }) {
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
}
