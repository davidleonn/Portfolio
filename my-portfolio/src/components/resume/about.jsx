import { useState } from "react";
import { FormattedMessage } from "react-intl";

import Formation from "./formation";
import Info from "./info";
import Experience from "./experience";

const About = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section
      name="about"
      className="w-full md:hsm:w-auto-screen bg-[#0a192f] text-gray-300"
    >
      <header className="max-w-[1000px] mx-auto p-20 flex flex-col justify-center">
        <div className="sm:text:right pl-4">
          <p className="text-5xl font-bold inline border-b-4 border-red-500">
            <FormattedMessage id="about" />
          </p>
        </div>
      </header>
      <article className="max-w-[1000px] mx-auto  flex flex-col ">
        <ul className="flex flex-row justify-evenly bg-slate-800">
          <li>
            <a
              onClick={() => setOpenTab(1)}
              className={
                openTab === 1
                  ? "inline-block px-2 py-2 text-gray-600 bg-red-500 rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
                  : "inline-block px-2 py-2 text-gray-600 bg-white rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
              }
            >
              <FormattedMessage id="about-page.profile" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setOpenTab(2)}
              className={
                openTab === 2
                  ? "inline-block px-2 py-2 text-gray-600 bg-red-500 rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
                  : "inline-block px-2 py-2 text-gray-600 bg-white rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
              }
            >
              <FormattedMessage id="about-page.experience" />
            </a>
          </li>

          <li>
            <a
              onClick={() => setOpenTab(3)}
              className={
                openTab === 3
                  ? "inline-block px-2 py-2 text-gray-600 bg-red-500 rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
                  : "inline-block px-2 py-2 text-gray-600 bg-white rounded shadow lg:w-[19.5rem] md:w-64 sm:w-auto"
              }
            >
              <FormattedMessage id="about-page.formation" />
            </a>
          </li>
        </ul>

        <div className={openTab === 1 ? "block" : "hidden"}>
          <Info />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <Experience />
        </div>

        <div className={openTab === 3 ? "block" : "hidden"}>
          <Formation />
        </div>
      </article>
    </section>
  );
};

export default About;
