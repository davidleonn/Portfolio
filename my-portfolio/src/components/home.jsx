import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <body className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-400">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          David León
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#999a9c]">
          I'm a Front-End Developer.
        </h2>
        <h2 className="text-[#999a9c] py-4 max-w-[700px]">
          A Front-End Developer with entry-level experience specializing in web
          development, user interface design, HTML, CSS and React. Adept at
          identifying opportunities to enhance and improve user experience.
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
            <Link to="work" smooth={true} duration={500}>
              Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </body>
    </section>
  );
};

export default Home;
