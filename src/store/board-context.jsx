import { createContext, useReducer } from 'react';

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

const boardReducer = (state, action) => {
    if (action.type === 'UPDATE_BOARD') {
        return action.payload;
    }
    return state;
}

// eslint-disable-next-line react/prop-types
export default function BoardContextProvider({ children }) {
    const [boardState, boardDispatch] = useReducer(boardReducer, getFreshBoard());
    const ctxValue = {
        board: boardState,
        setBoard: (callBack) => {
            const newBoard = callBack(boardState);
            boardDispatch({
                type: 'UPDATE_BOARD',
                payload: newBoard
            })
        }
    }

    return (<BoardContext.Provider value={ctxValue} >
        {children}
    </BoardContext.Provider>)
}

