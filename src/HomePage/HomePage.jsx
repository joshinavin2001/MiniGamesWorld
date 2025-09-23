import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HomePage = ({ startTicTac, startDice, startBubble }) => {
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
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* nav toogle section  */}
      <div
        className={` ${
          isOpen ? "block" : "hidden"
        }  md:hidden text-xl text-end font-bold bg-zinc-800 text-white py-2 pl-2`}
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
      {/* main section  */}
      <div className=" bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 w-98 sm:w-150  md:w-200 h-260 sm:h-120 md:h-120 lg:h-120 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        <div className="flex justify-center items-center  mb-4 mr-5  sm:mb-10 text-center">
          <img className="w-25 h-25" src="./homePageImg/BulbLogo.png" alt="" />
          <h1 className="sm:text-5xl text-2xl font-bold bg-gradient-to-r from-yellow-300 to-black bg-clip-text text-transparent italic">
            Welcome to MiniGamesWorLD
          </h1>
          <img
            className="w-18 h-18 mt-2"
            src="./homePageImg/SmallGameLogo.png"
            alt=""
          />
        </div>
        {/* all games section  */}
        <section className="w-1/2 ml-16 sm:flex sm:justify-evenly  sm:w-auto sm:mx-0">
          <div className="text-center h-70 w-54 border-2 rounded py-2 mb-5 sm:mb-0">
            <h1 className="text-3xl font-bold">Dice Game</h1>
            <img
              className=" m-auto h-44 w-44"
              src="./homePageImg/dice_Game.png"
              alt="Dice Game"
            />
            <button
              onClick={startDice}
              className="bg-zinc-900 text-xl my-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer"
            >
              Play Now
            </button>
          </div>

          <div className="text-center h-70 w-54 border-2 py-2 mb-5 sm:mb-0 rounded ">
            <h1 className="text-3xl font-bold">TicTacToe</h1>
            <img
              className=" m-auto h-44 w-44"
              src="./homePageImg/tictacLogo.png"
              alt="Dice Game"
            />
            <button
              onClick={startTicTac}
              className="bg-zinc-900 text-xl mt-2 text-white py-1 px-6 rounded active:scale-95 cursor-pointer"
            >
              Play Now
            </button>
          </div>

          <div className="text-center h-70 w-54 border-2 mb-5 sm:mb-0 rounded ">
            <h1 className="text-3xl font-bold">Bubble Game</h1>
            <img
              className=" m-auto h-44 w-44"
              src="./homePageImg/bubbleLogo.png"
              alt="Dice Game"
            />
            <button
              onClick={startBubble}
              className="bg-zinc-900 text-xl text-white py-1 px-6 rounded active:scale-95 cursor-pointer"
            >
              Play Now
            </button>
          </div>
        </section>
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

export default HomePage;
