import React, { use, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AboutTicTac = ({ startTicTac }) => {
  const [isOpen, setOpen] = useState(false);

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
          <h1 className="text-lg sm:text-xl md-text-3xl mt-1 md:mt-0 font-bold">
            <span className=" font-extrabold text-3xl md:text-3xl lg:text-5xl  sm:text-2xl bg-gradient-to-r from-white to-black bg-clip-text text-transparent">
              M
            </span>
            iniGamesWorl
            <span className="font-extrabold text-3xl md:text-3xl lg:text-5xl sm:text-2xl bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
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
            <a
              onClick={startTicTac}
              className="mr-5 hover:text-green-700"
              href="#"
            >
              InGame
            </a>
          </div>

          <button
            onClick={() => {
              setOpen(!isOpen);
            }}
            className="block md:hidden mt-3 mr-1 font-bold text-2xl"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* nav toogle section  */}

      <div
        className={` ${
          isOpen ? "block" : "hidden"
        }  md:hidden text-end text-xl font-bold bg-zinc-800 text-white py-2 pl-2`}
      >
        <a
          onClick={startTicTac}
          className="mr-5 block hover:text-green-700"
          href="#"
        >
          InGame
        </a>
      </div>

      {/* main section  */}
      <div className=" bg-white w-96 sm:w-150  md:w-200 h-230 sm:h-200 md:h-200 lg:h-200 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl mt-4 underline ">About</h1>
        </div>
        <div className="mx-4 my-5">
          <h1 className="font-bold lg:text-3xl sm:text-2xl text-2xl">
            About - TicTacToe
          </h1>
          <p className="text-md sm:text-lg lg:text-xl">
            Tic-Tac-Toe is a classic two-player game played on a 3x3 grid.
            Players take turns marking X or O, aiming to align three symbols
            horizontally, vertically, or diagonally. It teaches strategy and
            critical thinking. Simple yet engaging, it's often a child's first
            introduction to competitive and logical gameplay.
          </p>
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            🕹️ How to Play TicTacToe
          </h1>
        </div>
        <div className="mx-5 mt-4">
          <h1 className="text-xl font-bold">1. Draw the Grid</h1>
          <p>Draw a 3x3 grid (two vertical and two horizontal lines).</p>
          <h1 className="text-xl font-bold">2. Choose Symbols</h1>
          <p>One player is X, the other is O.</p>
          <h1 className="text-xl font-bold">3. Decide Who Goes First</h1>
          <p>Flip a coin or agree who will go first.</p>
          <h1 className="text-xl font-bold">4. Take Turns</h1>
          <p>
            Players take turns placing their symbol (X or O) in an empty square.
          </p>
          <h1 className="text-xl font-bold">5. Aim to Align Three</h1>
          <p>Try to get three of your symbols in a row:</p>
          <p>Horizontally</p>
          <p>Vertically</p>
          <p>Or diagonally</p>
          <h1 className="text-xl font-bold">Block Your Opponent</h1>
          <p>
            Prevent your opponent from getting three in a row by blocking them.
          </p>
          <h1 className="text-xl font-bold">Check for a Win or Draw</h1>
          <p>The first to get three in a row wins.</p>
          <p>If all squares are filled with no winner, it's a draw.</p>
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

export default AboutTicTac;
