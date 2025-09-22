import React, { use, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Bubble = () => {
  const [isOpen, setOpen] = useState(false);
  const allBubbles = 80;
  const [makeBubbles, setMakeBubbles] = useState(Array(allBubbles).fill(""));
  const [hitRandomNum, setHitRandomNum] = useState(0);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [isgameStarted, setGameStarted] = useState(false);
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const bubbles = () => {
    const newArr = Array.from({ length: allBubbles }, () => randomNum(0, 9));
    setMakeBubbles(newArr);
  };
  const matchNum = (number) => {
    if (!isgameStarted || timer === 0) return;
    if (number === hitRandomNum) {
      setHitRandomNum(randomNum(0, 9));
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 10);
    }
  };
  const resetGame = () => {
    setGameStarted(false);
    setHitRandomNum(0);
    setScore(0);
    setTimer(0);
  };
  const startGame = () => {
    setGameStarted(true);
    setTimer(60);
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      if (isgameStarted === true) {
        // setHitRandomNum(randomNum(0,9))
        setTimer((prev) => prev - 1);
      }
      return () => clearInterval(countDown);
    }, 1000);
    if (timer === 0) {
      setGameStarted(false);
      setHitRandomNum(0);
    }
    return () => clearInterval(countDown);
  }, [isgameStarted, timer]);

  useEffect(() => {
    bubbles();
    // setHitRandomNum(randomNum(0,9))
    if (isgameStarted === true) {
      setHitRandomNum(randomNum(0, 9));
    }
    const InterVal = setInterval(() => {
      bubbles();
    }, 2000);
    return () => clearInterval(InterVal);
  }, [isgameStarted]);

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
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {/* nav toogle section  */}
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
      {/* main section  */}
      <div className=" bg-linear-to-r from-gray-400 via-pink-500 to-rose-400 w-96 sm:w-150  md:w-200 h-180 sm:h-120 md:h-120 lg:h-150 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        <div className="flex justify-center items-center h-20 text-5xl font-bold">
          <h1 className="bg-gradient-to-r from-yellow-300 to-black bg-clip-text text-transparent italic">
            Bubble Game
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 w-320 overflow-hidden lg:h-110 h-140">
            {/* nav section  */}
            <nav className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 h-20 w-full flex justify-evenly">
              <div className="flex items-center">
                <h1 className="font-bold text-black mr-2 text-3xl">Hit</h1>
                <div className=" rounded w-12 h-10 bg-white flex justify-center items-center font-bold">
                  {hitRandomNum}
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-black mr-2 text-3xl">Timer</h1>
                <div className=" w-12 h-10 bg-white flex justify-center items-center rounded font-bold">
                  {timer}
                </div>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold text-black mr-2 text-3xl">Score</h1>
                <div className=" font-bold rounded w-12 h-10 bg-white flex justify-center items-center">
                  {score}
                </div>
              </div>
            </nav>
            {/* game section bubbles  */}
            <div className="flex flex-wrap ml-5">
              {makeBubbles.map((elem, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => matchNum(elem)}
                    className="border-2 rounded-full w-15 h-15 flex justify-center items-center font-bold mt-2 ml-2 cursor-pointer active:scale-95 bg-linear-to-r from-red-200 via-pink-400 to-rose-600"
                  >
                    {" "}
                    {elem}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {/* buttons section  */}
          <button
            onClick={startGame}
            className="bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-black py-1 px-6 rounded active:scale-95 cursor-pointer font-bold"
          >
            Start Game
          </button>
          <button
            onClick={resetGame}
            className="bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-black py-1 px-6 rounded active:scale-95 cursor-pointer font-bold"
          >
            Reset Game
          </button>
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

export default Bubble;
