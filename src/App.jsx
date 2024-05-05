import { useState } from 'react';
import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css'

function App() {

  return (
    <div className='main-block'>
      <header className='header'>
        Tic Tac Toe
      </header>
      <main>
        <Player />
        <Player />
        <GameBoard />
      </main>
    </div>
  )
}

export default App
