import { useState, createContext } from 'react';

export class Cell {
    constructor(x, y, symbol = null) {
        this.symbol = symbol;
        this.position = {
            x, y
        }
    }
}

function getFreshBoard() {
    return [
        [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
        [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
        [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)]
    ]
}

export const BoardContext = createContext({
    board: getFreshBoard(),
    setBoard: () => { }
});

// eslint-disable-next-line react/prop-types
export default function BoardContextProvider({ children }) {
    const [board, setBoard] = useState(getFreshBoard());
    const ctxValue = {
        board,
        setBoard
    }

    return (<BoardContext.Provider value={ctxValue} >
        {children}
    </BoardContext.Provider>)
}

