import React from "react";
import {
  SiFastify,
  SiPrisma,
  SiTypescript,
  SiJirasoftware,
  SiJest,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import { FiGitlab } from "react-icons/fi";
import { FaSass } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="flex flex-col h-[400px] justify-center items-center bg-slate-800">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <article className="sm:text-right text-4xl font-bold">
          <p>Basetis</p>
          <p className="text-2xl">Oct. 2022 - Feb. 2023</p>
        </article>
        <aside>
          <p>
            I worked as a full-stack developer building and internal web app. I
            took part in both front and back, where I used differents
            technologies and tools:
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <li>
              Fastify <SiFastify />
            </li>
            <li>
              Prisma ORM
              <SiPrisma />{" "}
            </li>
            <li>
              Typescript
              <SiTypescript />
            </li>
            <li>
              React Ts
              <GrReactjs />
            </li>
            <li>
              Jira
              <SiJirasoftware />
            </li>
            <li>
              Agile(SCRUM) <DiScrum />
            </li>
            <li>
              Gitlab
              <FiGitlab />
            </li>
            <li>
              Jest(Testing)
              <SiJest />
            </li>
            <li>
              Sass
              <FaSass />
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
