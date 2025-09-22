import React, { useState } from 'react'
import Bubble from './BubbleGame/Bubble.jsx'
// import HomePage from './HomePage/HomePage.jsx'
import HomePage from './HomePage/HomePage'
import TicTacInGame from './TicTacToe/TicTacInGame'
// import Startgame from './DiceGame/Startgame'
import InGame from './DiceGame/InGame'
import NavBar from './NavBar/NavBar.jsx'

const App = () => {
  const [activeGame,setActiveGame]=useState("home")
    const setTictac = () =>{ setActiveGame("tictac") }
    const setDice =()=>{ setActiveGame("dice")}
    const setBubbleGame =()=>{setActiveGame("bubble")}
  return (
    <div>
      {activeGame==="home" &&  <HomePage startTicTac={setTictac} startDice={setDice} startBubble={setBubbleGame} />}
      {activeGame==="tictac" && <TicTacInGame /> }
      {activeGame==="dice" && <InGame />}
      {activeGame==="bubble" && <Bubble />}
      {/* <NavBar /> */}
    </div>
  )
}

export default App
