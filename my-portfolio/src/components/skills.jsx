import React from "react";

import HTML from "../ui/assets/html.png";
import CSS from "../ui/assets/css.png";
import JavaScript from "../ui/assets/javascript.png";
import ReactImg from "../ui/assets/react.png";
import Node from "../ui/assets/node.png";
import GitHub from "../ui/assets/github.png";

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <body className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <header>
          <p className="text-4xl font-bold inline border-b-4 border-red-500 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </header>
        <article className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NodeJS icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
        </article>
      </body>
    </section>
  );
};

export default Skills;
