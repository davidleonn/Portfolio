import React from "react";
import { RiCodeView } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="p-4 h-1/3 bg-[#0a192f] flex justify-between text-center text-gray-100 ">
      <RiCodeView size={20} />
      <p className="text-lg items-center">
        © 2023 DavidLeon™ . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
