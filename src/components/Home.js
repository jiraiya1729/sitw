import React from 'react';
import Bg from "./Bg";
import { FaSearch, FaRocket } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <Bg />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-12 border-0 rounded-lg p-2 shadow-md bg-white flex items-center mb-5">
        <FaSearch className="text-gray-500" />
        <input
          className="bg-transparent border-0 h-full text-lg flex-grow ml-1 focus:outline-none"
          placeholder="whats your task ?"
        />
      </div>
      <div className="mt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-xl p-6 border-2 border-white rounded-lg shadow-md bg-opacity-70 bg-white flex flex-col items-center text-center">
        <FaRocket className="text-6xl mb-4 text-gray-700" />
        <p className="text-2xl text-gray-700">Welcome to elspace</p>
        <p className="text-xl text-gray-500">Your aerospace standard technical assistance</p>
      </div>
    </div>
  );
}

export default Home;
