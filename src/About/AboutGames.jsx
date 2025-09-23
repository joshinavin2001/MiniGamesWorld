import React, { use, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AboutGames = ({ inAbout }) => {
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
            <a onClick={inAbout} className="mr-5 hover:text-green-700" href="#">
              Home
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
          onClick={inAbout}
          className="mr-5 block hover:text-green-700"
          href="#"
        >
          Home
        </a>
      </div>

      {/* main section  */}
      <div className=" bg-white w-96 sm:w-150  md:w-200 h-200 sm:h-160 md:h-160 lg:h-140 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl mt-4 underline ">About Games</h1>
        </div>
        <div>
          <div className="mx-4 my-5">
            <h1 className="font-bold lg:text-3xl sm:text-2xl text-2xl">
              1. About - Bubble Game
            </h1>
            <p className="text-md sm:text-lg lg:text-xl">
              About the Bubble Game The Bubble Game is a fun and fast-paced
              clicking game where players pop as many bubbles as possible within
              a time limit. Bubbles appear randomly on the screen and disappear
              quickly, so quick reflexes and sharp eyes are the key to scoring
              high. It's simple, colorful, and perfect for a quick gaming break.
            </p>
          </div>
          <div className="mx-4 my-5">
            <h1 className="font-bold lg:text-3xl sm:text-2xl text-2xl">
              2. About - Dice Game
            </h1>
            <p className="text-md sm:text-lg lg:text-xl">
              In this dice game, the player chooses a number between 1 and 6. A
              die is then rolled. If the rolled number matches the chosen
              number, the player gains a point. If it doesn't match, one point
              is subtracted. The goal is to score as many points as possible.
            </p>
          </div>
          <div className="mx-4 my-5">
            <h1 className="font-bold lg:text-3xl sm:text-2xl text-2xl">
              3. About - TicTacToe Game
            </h1>
            <p className="text-md sm:text-lg lg:text-xl">
              About the Bubble Game The Bubble Game is a fun and fast-paced
              clicking game where players pop as many bubbles as possible within
              a time limit. Bubbles appear randomly on the screen and disappear
              quickly, so quick reflexes and sharp eyes are the key to scoring
              high. It's simple, colorful, and perfect for a quick gaming break.
            </p>
          </div>
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

export default AboutGames;
