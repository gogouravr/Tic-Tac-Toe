import { useState, useRef } from 'react';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Modal from './components/utils/Modal';
import BoardContextProvider from './store/board-context'
import './App.css';

function App() {
  const modal = useRef();

  let [playing, setPlaying] = useState('X');

  let [playerNames, setplayerNames] = useState({ player1: 'X', player2: 'Y' });
  const [isGameOver, setIsGameOver] = useState(false);
  console.log('App component rendering', isGameOver);

  const openModal = () => {
    modal.current.showModal();
  }
  if (isGameOver)
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
          <GameBoard
            playing={playing}
            setPlaying={setPlaying}
            setName={setplayerNames}
            setIsGameOver={setIsGameOver} />
        </main>
      </div>
    </BoardContextProvider>
  )
}

export default App
