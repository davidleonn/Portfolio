import { useState } from "react";
import About from "./about";
import Experience from "./experience";
import Formation from "./formation";

const Resume = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <header className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="sm:text:right pl-4">
          <p className="text-5xl font-bold inline border-b-4 border-red-500">
            Resume
          </p>
        </div>
      </header>
      <body className="max-w-[1000px] mx-auto  flex flex-col">
        <ul className="flex flex-row justify-around bg-slate-800">
          <li>
            <a
              onClick={() => setOpenTab(1)}
              className={
                openTab === 1
                  ? "inline-block px-4 py-2 text-gray-600 bg-red-500 rounded shadow m-0 w-[19.5rem]"
                  : "inline-block px-4 py-2 text-gray-600 bg-white rounded shadow m-0 w-[19.5rem]"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenTab(2)}
              className={
                openTab === 2
                  ? "inline-block px-4 py-2 text-gray-600 bg-red-500 rounded shadow m-0 w-[19.5rem]"
                  : "inline-block px-4 py-2 text-gray-600 bg-white rounded shadow m-0 w-[19.5rem]"
              }
            >
              Experiencie
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenTab(3)}
              className={
                openTab === 3
                  ? "inline-block px-4 py-2 text-gray-600 bg-red-500 rounded shadow m-0 w-[19.5rem]"
                  : "inline-block px-4 py-2 text-gray-600 bg-white rounded shadow m-0 w-[19.5rem]"
              }
            >
              Formation
            </a>
          </li>
        </ul>

        <div className={openTab === 1 ? "block" : "hidden"}>
          <About />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <Experience />
        </div>
        <div className={openTab === 3 ? "block" : "hidden"}>
          <Formation />
        </div>
      </body>
    </section>
  );
};

export default Resume;
