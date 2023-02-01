import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-400">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          David León
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#999a9c]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#999a9c] py-4 max-w-[700px]">
          A Front-End Developer with entry-level experience specializing in web
          development, user interface design, HTML, CSS and React. Adept at
          identifying opportunities to enhance and improve user experience.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
