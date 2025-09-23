import React, { use, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Contact = ({ inContact }) => {
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
            <a
              onClick={inContact}
              className="mr-5 hover:text-green-700"
              href="#"
            >
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
          onClick={inContact}
          className="mr-5 block hover:text-green-700"
          href="#"
        >
          Home
        </a>
      </div>

      {/* main section  */}
      <div className=" bg-white w-96 sm:w-150  md:w-200 h-205 sm:h-200 md:h-200 lg:h-200 lg:w-250 xl:w-280  m-auto border-l-4 border-r-4 border-b-4 ">
        <section className="bg-gray-100 py-12 px-6" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8">
              Got questions, ideas, or feedback about our games? Whether it’s
              popping bubbles, winning Tic Tac Toe, or rolling the dice — we’d
              love to hear from you!
            </p>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-left text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-left text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-left text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Tell us what you think..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              Or reach us at:{" "}
              <span className="text-blue-600">support@minigamesworld.com</span>
            </div>
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

export default Contact;
