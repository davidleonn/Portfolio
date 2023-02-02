import React from "react";

const Info = () => {
  return (
    <section className="flex flex-col h-[400px] justify-center bg-slate-800">
      <div className="grid sm:grid-cols-2 gap-8 px-4">
        <article className="sm:text-right text-4xl font-bold">
          <p>Hi, I'm David, nice to meet you. Please take a look around.</p>
        </article>
        <aside>
          <p>
            From a personal perspective, I consider myself to be a reliable
            team-worker whose aim is to proficiently and proactively add value
            to the team. I am looking to take new challenges which will give me
            both a personal and a professional grow.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Info;
