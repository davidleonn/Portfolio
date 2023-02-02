import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <body className="flex flex-col justify-center items-center w-full h-full">
        <header className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text:right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
        </header>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <article className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm David, nice to meet you. Plaease take a look around.</p>
          </article>
          <aside>
            <p>
              From a personal perspective, I consider myself to be a reliable
              team-worker whose aim is to proficiently and proactively add value
              to the team. I am looking to take new challenges which will give
              me both a personal and a professional grow.
            </p>
          </aside>
        </div>
      </body>
    </section>
  );
};

export default About;
