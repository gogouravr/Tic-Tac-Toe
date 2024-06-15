import { useState, useRef } from 'react';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Modal from './components/utils/Modal';
import './App.css';

class Cell {
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

function updateBoard(board, rowIdx, colIdx, symbol) {
  // deep clone the board
  const newBoard = board.map(row => row.map(cell => new Cell(cell.x, cell.y, cell.symbol)))
  // update the cell
  newBoard[rowIdx][colIdx]['symbol'] = symbol;
  return newBoard;
}

function togglePlaying(playing) {
  return playing === 'X' ? 'O' : 'X';
}

function App() {
  const modal = useRef()


  const [board, setBoard] = useState(getFreshBoard());
  let [playing, setPlaying] = useState('X');
  let [playerNames, setplayerNames] = useState({ player1: 'X', player2: 'Y' });

  const clickHandler = (rowIdx, colIdx) => {
    if (board[rowIdx][colIdx]['symbol'])
      return;

    setBoard(oldBoard => {
      return updateBoard(oldBoard, rowIdx, colIdx, playing);
    });
    console.log(isGameConcluded())


    setPlaying(togglePlaying(playing));

  }

  const isGameConcluded = () => {
    for (let row of board) {
      for (let cell of row)
        if (!cell.symbol)
          return false;
    }
    return true;
  }

  const openModal = () => {
    modal.current.showModal();
  }
  if (isGameConcluded())
    openModal();


  return (
    <div className='main-block'>

      <header className='header'>
        Tic Tac Toe
      </header>
      <main>
        <Modal ref={modal} />
        <section className="player-section">
          <Player playerNames={playerNames} symbol={'X'} setPlayerNames={setplayerNames} />
          <Player playerNames={playerNames} symbol={'Y'} setPlayerNames={setplayerNames} />
        </section>
        <GameBoard board={board} clickHandler={clickHandler} setName={setplayerNames} />
      </main>
    </div>
  )
}

export default App
