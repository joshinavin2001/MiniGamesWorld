import React, { useState } from "react";
import Bubble from "./BubbleGame/Bubble.jsx";
import HomePage from "./HomePage/HomePage";
import TicTacInGame from "./TicTacToe/TicTacInGame";
import InGame from "./DiceGame/InGame";
import AboutGames from "./About/AboutGames.jsx";
import Contact from "./Contact/Contact.jsx";
import AboutBubble from "./About/AboutBubble.jsx";
import AboutDice from "./About/AboutDice.jsx";
import AboutTicTac from "./About/AboutTicTac.jsx";

const App = () => {
  const [activeGame, setActiveGame] = useState("home");
  const setHome = () => {
    setActiveGame("inhome");
  };
  const setTictac = () => {
    setActiveGame("tictac");
  };
  const setDice = () => {
    setActiveGame("dice");
  };
  const setBubbleGame = () => {
    setActiveGame("bubble");
  };
  const aboutGames = () => {
    setActiveGame("aboutGames");
  };
  const gameContact = () => {
    setActiveGame("contact");
  };
  const diceGame = () => {
    setActiveGame("aboutdicegame");
  };
  const aboutTicTac = () => setActiveGame("abouttictac");
  const aboutBubble = () => {
    setActiveGame("aboutbubble");
  };

  return (
    <div>
      {(activeGame === "home" || activeGame === "inhome") && (
        <HomePage
          startTicTac={setTictac}
          startDice={setDice}
          startBubble={setBubbleGame}
          startAbout={aboutGames}
          startContact={gameContact}
        />
      )}

      {activeGame === "tictac" && (
        <TicTacInGame
          inHome={setHome}
          inTicTac={aboutTicTac}
          startContact={gameContact}
        />
      )}
      {activeGame === "dice" && (
        <InGame inHome={setHome} startContact={gameContact} inDice={diceGame} />
      )}
      {activeGame === "bubble" && (
        <Bubble inHome={setHome} inBubble={aboutBubble} />
      )}
      {activeGame === "aboutGames" && (
        <AboutGames inAbout={setHome} startContact={gameContact} />
      )}
      {activeGame === "contact" && (
        <Contact inContact={setHome} startAbout={aboutGames} />
      )}
      {activeGame === "aboutdicegame" && (
        <AboutDice startContact={gameContact} startDice={setDice} />
      )}
      {activeGame === "abouttictac" && (
        <AboutTicTac startTicTac={setTictac} startContact={gameContact} />
      )}
      {activeGame === "aboutbubble" && (
        <AboutBubble startBubble={setBubbleGame} />
      )}
    </div>
  );
};

export default App;
