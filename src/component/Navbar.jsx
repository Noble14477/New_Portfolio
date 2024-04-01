import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ham_close, ham_menu } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white  md:px-6 w-full py-4 fixed top-0 z-50 flex justify-between md:py-6">
      <div className="relative flex justify-between items-center px-6 w-full">
        <div className="font-bold uppercase text-xl w-full whitespace-nowrap">
          <h1>Noble Chinonso</h1>
        </div>

        <div className="relative">
          {!isMenuOpen ? (
            <img
              src={ham_menu}
              alt="menu"
              className="w-[30px] cursor-pointer md:hidden"
              onClick={handleMenuOpen}
            />
          ) : (
            <img
              src={ham_close}
              alt="close"
              className=" w-[30px] cursor-pointer md:hidden"
              onClick={handleMenuOpen}
            />
          )}
        </div>
        {isMenuOpen && (
          <div className="flex divide-y-2 flex-col md:hidden bg-white  float-right uppercase text-right w-full divide-gray-100 font-semibold shadow-lg rounded-md py-6 text-gray-600 text-[15px] -tracking-tighter border-t fixed left-0 top-16 ">
            <a href="/" className="pb-6 px-6">
              Home
            </a>
            <a href="#about" className="py-6 px-6">
              About
            </a>
            <a href="#project" className="py-6 px-6">
            Project
          </a>
          <a href="#contact" className="py-6 px-6">
            Contact
          </a>
          </div>
        )}
        <div className="uppercase md:flex justify-end gap-12 text-right w-full font-semibold text-gray-600 text-[15px] -tracking-tighter px-6 hidden">
          <a href="#" className="">
            Home
          </a>
          <a href="#about" className="">
            About
          </a>
          <a href="#project" className="">
            Project
          </a>
          <a href="#contact" className="">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
