import React from "react";
import { ImHtmlFive } from "react-icons/im";
import {
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiJirasoftware,
  SiFlask,
  SiJest,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaGitAlt, FaFigma } from "react-icons/fa";

const Formation = () => {
  return (
    <section className="flex flex-col h-[400px] justify-center items-center bg-slate-800">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <article className="sm:text-right p-8 text-4xl font-bold">
          <p>Bootcamp full-stack Developer (700h)</p>
        </article>
        <aside>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <li>
              HTML
              <ImHtmlFive />
            </li>
            <li>
              CSS
              <SiCss3 />
            </li>
            <li>
              Javascript
              <SiJavascript />
            </li>
            <li>
              NodeJS
              <FaNodeJs />
            </li>
            <li>
              Python
              <FaPython />
            </li>
            <li>
              Flask
              <SiFlask />
            </li>
            <li>
              SQL
              <SiPostgresql /> <br />
            </li>
            <li>
              MongoDB
              <SiMongodb />
            </li>

            <li>
              Git
              <FaGitAlt />
            </li>
            <li>
              Figma
              <FaFigma />
            </li>
            <li>
              Jira <SiJirasoftware />
            </li>

            <li>
              Testing (Jest)
              <SiJest />
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Formation;
