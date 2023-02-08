import React from "react";
import { FormattedMessage } from "react-intl";

import workin from "../ui/assets/workin.png";
import shop from "../ui/assets/shop.png";
import hangman from "../ui/assets/hangman.png";
import select from "../ui/assets/select.png";
import notes from "../ui/assets/notes.png";

const shopCart = (
  <div
    style={{ backgroundImage: `url(${shop})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React TS Shop
      </span>
      <div className="pt-8 text-center">
        <a href="https://david-leon-shop-cart-ruby.vercel.app/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/davidleonn/shop-cart">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);
const hangmanGame = (
  <div
    style={{ backgroundImage: `url(${hangman})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React TS Hangman
      </span>
      <div className="pt-8 text-center">
        <a href="https://david-leon-hangman-rk1ko0b5w-davidleonn.vercel.app/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/davidleonn/hangman">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

const reactSelect = (
  <div
    style={{ backgroundImage: `url(${select})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React TS Select Component
      </span>
      <div className="pt-8 text-center">
        <a href="https://react-select-g2e73dq6h-davidleonn.vercel.app/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/davidleonn/react-select/tree/main/my-react-select">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);
const notesApp = (
  <div
    style={{ backgroundImage: `url(${notes})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effects */}
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React Ts Notes App
      </span>
      <div className="pt-8 text-center">
        <a href="https://notes-njncxhdx8-davidleonn.vercel.app/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/davidleonn/Notes-App/tree/main/my-notes">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);
/* const gridItem2 = (
  <div
    style={{ backgroundImage: `url(${workin})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >   
    <div className=" opacity-0 group-hover:opacity-100">
      <span className="text-2xl font-bold text-white tracking-wider">
        React JS Application
      </span>
      <div className="pt-8 text-center">
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="/">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
  );
 */
const Work = () => {
  return (
    <section
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <article className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <header className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            <FormattedMessage id="projects" />
          </p>
          <p className="py-6">
            <FormattedMessage id="projects-page.description" />
          </p>
        </header>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shopCart}
          {hangmanGame}
          {reactSelect}
          {notesApp}
        </div>
      </article>
    </section>
  );
};

export default Work;
