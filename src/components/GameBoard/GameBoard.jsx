/* eslint-disable react/prop-types */
export default function GameBoard({ board, clickHandler }) {
    return (
        <div className="board">
            {board.map((row, rowIdx) => {
                return <div className="board__row" key={rowIdx}> {row.map((cell, colIdx) =>
                    <span onClick={() => clickHandler(rowIdx, colIdx)} className="cell" key={`${rowIdx}${colIdx}`}>
                        {cell.symbol || ''}
                    </span>)}</div>
            })}
        </div>
    )
}
