import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/d779b96d-0adf-41b9-9570-ee317e25683d"
        method="POST"
        className="p-1 border border-gray-100 flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 ">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or send me an email - davidleon_06@hotmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          placeholder="Message"
          name="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
