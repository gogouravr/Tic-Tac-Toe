import { useState, useRef, useContext } from 'react';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Modal from './components/utils/Modal';
import BoardContextProvider, { BoardContext } from './store/board-context';
import './App.css';





function App() {
  const modal = useRef();
  const boardContext = useContext(BoardContext);

  let [playing, setPlaying] = useState('X');

  let [playerNames, setplayerNames] = useState({ player1: 'X', player2: 'Y' });



  console.log(boardContext.board);
  const isGameConcluded = () => {
    for (let row of boardContext.board) {
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
    <BoardContextProvider>
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
          <GameBoard playing={playing} setPlaying={setPlaying} setName={setplayerNames} />
        </main>
      </div>
    </BoardContextProvider>
  )
}

export default App
