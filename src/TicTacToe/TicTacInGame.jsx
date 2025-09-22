import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const TicTacInGame = () => {
  const [isOpen, setOpen] = useState(false);
  const [putValue, setPutValue] = useState(Array(9).fill(""));
  const [currentValue, setCurrentValue] = useState("X");
  const [winner, setWinner] = useState("");
  const [scoreX, setScoreX] = useState(0);
  const [scoreY, setScoreY] = useState(0);
  const [draw, setDraw] = useState(false);
  const handleCheck = (index) => {
    if (putValue[index] !== "" || winner) return;
    const newarr = [...putValue];
    newarr[index] = currentValue;
    setPutValue(newarr);
    setCurrentValue(currentValue === "X" ? "O" : "X");
    const result = checkWinner(newarr);
    setWinner(result);
    if (result === "X") {
      setScoreX((prev) => prev + 1);
    } else if (result === "O") {
      setScoreY((prev) => prev + 1);
    }
    if (!result && newarr.every((cell) => cell !== "")) {
      drawgame();
      setDraw(true);
    }
  };
  const drawgame = () => {
    setDraw(true);
  };
  const reset = () => {
    setPutValue(Array(9).fill(""));
    setCurrentValue("X");
    setWinner("");
    setDraw(false);
  };
  const newGame = () => {
    setPutValue(Array(9).fill(""));
    setCurrentValue("X");
    setWinner("");
    setScoreY(0);
    setScoreX(0);
    setDraw(false);
  };
  const checkWinner = (data) => {
    const winningArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let pattern of winningArr) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return;
  };

  return (
    // start
    <div className="bg-yellow-300 h-screen overflow-x-hidden">
      {/* main header section  */}
      <nav className="flex justify-between bg-yellow-300 border-b-4  px-2">
        <div className="flex ">
          <img
            className="h-12 w-12 sm:h-15 sm:w-15 "
            src="./homePageImg/gameLogo.png"
            alt=""
          />
          <h1 className="text-lg sm:text-xl md-text-3xl font-bold">
            <span className=" font-extrabold text-xl md:text-3xl lg:text-5xl  sm:text-2xl bg-gradient-to-r from-white to-black bg-clip-text text-transparent">
              M
            </span>
            iniGamesWorl
            <span className="font-extrabold text-xl md:text-3xl lg:text-5xl sm:text-2xl bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
              D
            </span>{" "}
          </h1>
          <img
            className="h-12 w-12 sm:h-15 sm:w-15"
            src="./homePageImg/gameLogo2.png"
            alt=""
          />
        </div>
        <div>
          <div className="hidden md:block text-xl font-bold mt-4">
            <a className="mr-5 hover:text-green-700" href="#">
              Home
            </a>
            <a className="mr-5 hover:text-green-700" href="#">
              About
            </a>
            <a className="mr-5 hover:text-green-700" href="#">
              Contact
            </a>
          </div>

          <button
            onClick={() => {
              setOpen(!isOpen);
            }}
            className="block md:hidden mt-3 mr-1 font-bold text-2xl"
          >
            {" "}
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        }  md:hidden text-xl font-bold bg-zinc-800 text-white py-2 pl-2`}
      >
        <a className="mr-5 block hover:text-yellow-200" href="#">
          Home
        </a>
        <a className="mr-5 block hover:text-yellow-200" href="#">
          About
        </a>
        <a className="mr-5 block hover:text-yellow-200" href="#">
          Contact
        </a>
      </div>

      {/* header section inside game */}
      <div className="bg-amber-200  w-90 sm:w-150  md:w-200 h-140 lg:w-250 xl:w-280 flex justify-center m-auto border-l-4 border-r-4 border-b-4 ">
        <div className="bg-gradient-to-r from-teal-400 to-yellow-200 w-full">
          <header className="flex justify-between px-5 py-2 text-white bg-linear-to-r from-gray-300 via-gray-500 to-gray-700">
            <h1 className="text-3xl sm:text-4xl mt-3 font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
              TicTacToe
            </h1>
            {/* toogle navbar section  */}
            <div>
              <p className="font-bold text-3xl bg-linear-to-r from-yellow-500 via-lime-500 to-green-500 bg-clip-text text-transparent">
                Score
              </p>
              <div className=" flex text-xl font-bold gap-1">
                <p className="bg-linear-to-r from-yellow-500 via-lime-500 to-green-500 bg-clip-text text-transparent">
                  X= {scoreX}{" "}
                </p>
                <p className="bg-linear-to-r from-yellow-500 via-lime-500 to-green-500 bg-clip-text text-transparent">
                  Y= {scoreY}{" "}
                </p>
              </div>
            </div>
          </header>
          <section>
            <div className="flex justify-center">
              <h1
                className={`text-3xl font-bold mt-2 transition-all duration-500 ease-in-out 
    ${
      winner || draw
        ? "opacity-100 scale-100 bg-gradient-to-r from-gray-600 to-red-500 bg-clip-text text-transparent "
        : "opacity-0 scale-95 pointer-events-none"
    }`}
              >
                {winner ? `Winner = ${winner}` : draw ? "Draw" : ""}
              </h1>
              {/* boxes grid section  */}
            </div>
            <div className="flex justify-center mt-2">
              <div className="grid grid-cols-3 w-70 h-70 ">
                {putValue.map((elem, i) => {
                  return (
                    <div
                      onClick={() => handleCheck(i)}
                      className={`rounded flex justify-center items-center border-2 bg-zinc-600 text-3xl font-bold w-24 h-24
    ${
      elem === "X"
        ? "text-green-500"
        : elem === "O"
        ? "text-red-500"
        : "text-white"
    }`}
                    >
                      {elem}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* reset or new game button section  */}
            <div className="flex justify-center mt-5">
              <button
                onClick={reset}
                className="  bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 text-black font-bold py-2 px-4 rounded"
              >
                Reset
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={newGame}
                className=" bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 text-black font-bold py-2 px-4 rounded"
              >
                New Game
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* footer section  */}
      <footer className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 text-zinc-950 py-10 mt-5 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent ">
              MiniGamesWorld
            </h2>
            <p className="mt-2 text-sm text-gray-400">Explore. Play. Enjoy.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/games" className="hover:text-green-400">
                  Games
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-green-400">
                🌐
              </a>
              <a href="#" className="hover:text-green-400">
                📘
              </a>
              <a href="#" className="hover:text-green-400">
                📸
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          &copy; 2025 MiniGamesWorld. All rights reserved.
        </div>
      </footer>
    </div>
    // end
  );
};

export default TicTacInGame;
