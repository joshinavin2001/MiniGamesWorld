import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const InGame = () => {
  const [isOpen, setOpen] = useState(false);
  const arrNum = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNum] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [increaseScore, setIncreaseScore] = useState(0);
  const [showWarning, setWarning] = useState(false);
  const [showText, setShowText] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const rollDice = () => {
    if (selectedNumber == null) {
      setWarning(true);
      return;
    }

    const randomNum = randomNumber(1, 7);
    SetCurrentDice((prev) => randomNum);
    setWarning(false);

    if (selectedNumber === randomNum) {
      setIncreaseScore((prev) => prev + 2);
    } else {
      setIncreaseScore((prev) => prev - 2);
    }
  };

  const resetGame = () => {
    setSelectedNum(null);
    SetCurrentDice(1);
    setIncreaseScore(0);
    setWarning(false);
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

      <div className=" bg-white w-90 sm:w-150  md:w-200 h-150 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        {/* header section inside game */}
        <nav className="flex justify-between w-full sm:px-4   bg-zinc-800 h-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 sm:mt-0 text-white font-bold">
              {increaseScore}
            </h1>
            <p className="font-bold  sm:text-2xl text-white ">Total Score</p>
          </div>
          <div className="text-end pt-2">
            <p
              className={` text-red-700 font-bold ${
                showWarning ? "block" : "hidden"
              } `}
            >
              You Are Not Selected Any Number !
            </p>
            {arrNum.map((elem, i) => {
              const btnSelectedNum = selectedNumber === elem;
              return (
                <button
                  key={i}
                  onClick={() => setSelectedNum(elem)}
                  className={
                    ` sm:py-2 px-3 border-2 xl:py-3 xl:px-5 ml-2 font-bold hover:bg-zinc-900 hover:text-white ` +
                    (btnSelectedNum
                      ? "bg-black text-white"
                      : "bg-white text-black")
                  }
                >
                  {elem}
                </button>
              );
            })}

            <p className="font-bold text-white ">Select Number</p>
          </div>
        </nav>
        {/* dice game section  */}
        <div className="flex justify-center mt-4">
          <div>
            <div className="text-black text-4xl ml-9  lg:ml-0 sm:text-4xl font-bold lg:text-5xl mb-2">
              <h1>Dice Game</h1>
            </div>

            <img
              className="cursor-pointer"
              onClick={rollDice}
              src={`./project-two-imgs/dice_${
                showText ? "hidden" : currentDice
              }.png`}
              alt=""
            />
            <p
              className={` ${
                showText ? "hidden" : "block"
              } text-center font-semibold text-2xl`}
            >
              Click On Dice To Roll
            </p>
            <div className={` ${showText ? "hidden" : "block"} text-center `}>
              <button
                onClick={resetGame}
                className="border-2 py-1 mt-5 px-8 rounded cursor-pointer active:scale-90"
              >
                Reset Score
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowText(!showText)}
                className={`bg-black ${
                  showText ? "hidden" : "block"
                } text-white py-1 px-8 mt-3 mx-auto rounded cursor-pointer active:scale-90 `}
              >
                Show Rules
              </button>
              <button
                onClick={() => setShowText(!showText)}
                className={`bg-black ${
                  showText ? "block" : "hidden"
                } text-white py-1 px-8 mt-2 rounded cursor-pointer active:scale-90 ml-14 sm:ml-12 md:ml-12`}
              >
                Hide Rules
              </button>
            </div>
          </div>
        </div>

        <div
          className={` bg-zinc-800 text-white p-4 rounded mt-4 mx-5 ${
            showText ? "block" : "hidden"
          } `}
        >
          <h1 className="text-4xl font-semibold mb-5">How To Play Dice Game</h1>
          <p>Selcet Any Number</p>
          <p>Click On Dice Image</p>
          <p>
            After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p>If you get wrong guess then 2 point will be dedcuted </p>
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

export default InGame;