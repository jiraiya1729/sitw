import React from 'react';
import Card from './Card';

const About = () => {
  return (
    <div className="bg-gray-900 h-full">
      <div className="h-full flex flex-col justify-start items-start p-5 bg-gray-900">
        <h1 className="text-3xl font-bold text-white mb-5">About Us</h1>

        <h2 className="text-2xl font-bold text-white mb-4">Welcome to ELFSPACE: Your Aerospace Standards Technical Assistant!</h2>

        <p className="text-white mb-3">🚀 <em>Explore the Universe of Technical Knowledge with ELFSPACE!</em> 🚀</p>
        
        <p className="text-gray-400 mb-3">Greetings, Aerospace Enthusiasts!</p>

        <p className="text-gray-400 mb-3">
        Welcome aboard the ELFSPACE spacecraft, where cutting-edge technology meets boundless curiosity. Get ready to embark on a journey through the vast cosmos of technical standards and requirements with ease and precision.
        </p>

        <p className="text-gray-400 mb-3">
        At ELFSPACE, we've engineered a revolutionary tool designed to revolutionize the way you navigate the complexities of the aerospace industry. Imagine having a personal assistant that swiftly analyzes NASA's technical bulletins, lessons learned, and standards, providing you with effective recommendations to enhance your technical requirements.
        </p>

        <h3 className="text-xl font-bold text-white mb-3">Why ELFSPACE Shines Bright:</h3>
        
        <ul className="list-disc pl-5 mb-3 text-gray-400">
          <li className="mb-2">🛰 <em>Effortless Exploration:</em> Seamlessly search and explore NASA's extensive technical documents using intuitive search features.</li>
          <li className="mb-2">📚 <em>Comprehensive Knowledge:</em> Dive into a treasure trove of technical standards, ensuring accuracy, consistency, and relevance in every document you discover.</li>
          <li className="mb-2">⚙ <em>Smart Recommendations:</em> Let ELFSPACE's advanced algorithms guide you. Discover related documents, explore new technical horizons, and stay at the forefront of aerospace advancements.</li>
          <li className="mb-2">🌌 <em>User-Friendly Interface:</em> Experience the cosmos of knowledge through our sleek and easy-to-use interface. Effortlessly navigate through documents, and find exactly what you need, when you need it.</li>
          <li className="mb-2">🌟 <em>Your Space, Your Rules:</em> Personalize your ELFSPACE experience. Save your favorite documents, annotate essential sections, and explore at your own pace.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-3">Ready for Launch?</h3>

        <p className="text-gray-400 mb-3">
        Buckle up and prepare for an odyssey through the aerospace industry's most critical technical requirements. Whether you're a researcher, engineer, or enthusiast, ELFSPACE is here to empower your exploration.
        </p>

        <p className="text-gray-400 mb-3">
        Start your journey now! Enter your queries, explore the stars, and let ELFSPACE illuminate your path in the aerospace universe.
        </p>

        <p className="text-white mb-5">🔭 <em>Begin Exploring</em> 🔭</p>

        <h2 className="text-2xl font-bold text-white mb-5">About the Founders</h2>
        
        {/* Playcards */}
        <div className="flex flex-row bg-gray-900 w-full">
          
          <div className="w-full md:w-1/3 p-3">
            <Card />
          </div>

          <div className="w-full md:w-1/3 p-3">
            <Card />
          </div>

          <div className="w-full md:w-1/3 p-3">
            <Card />
          </div>

        </div> {/* Close flex div */}
      </div>
    </div>
  );
}

export default About;
