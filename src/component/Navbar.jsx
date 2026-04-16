import { useState } from "react";
import { ham_close, ham_menu, logoIcon } from "../assets";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-slate-900 dark:text-white  md:px-6 w-full py-4 fixed top-0 z-50 flex justify-between md:py-4">
      <div className="relative flex justify-between items-center px-6 w-full">
        <div className="font-bold capitalize text-xl w-full whitespace-nowrap flex gap-2 items-center">
          <img src={logoIcon} alt="logo" className="w-[40px] md:w-[50px]" />
          <h1 className="text-sm lg:text-md">NobleDevWorks</h1>
        </div>

        <div className="relative ">
          {!isMenuOpen ? (
            <div className="flex gap-2 lg:hidden justify-between items-center w-fit">
              <img
                src={ham_menu}
                alt="menu"
                className="w-[40px] cursor-pointer  bg-white rounded p-1"
                onClick={handleMenuOpen}
              />
                <ThemeToggle />
              
            </div>
          ) : (
            <img
              src={ham_close}
              alt="close"
              className=" w-[40px] cursor-pointer md:hidden bg-white rounded p-1"
              onClick={handleMenuOpen}
            />
          )}
        </div>
        {isMenuOpen && (
          <div className="flex divide-y-2 flex-col lg:hidden bg-white dark:bg-slate-900 dark:text-white  float-right uppercase text-right w-full divide-gray-700 font-semibold shadow-lg rounded-md py-6 text-gray-600 text-[15px] -tracking-tighter border-t fixed left-0 top-16 ">
            <a
              href="/"
              className="pb-6 px-6 hover:text-orange-500 duration-150 ease-in-out"
              onClick={handleMenuOpen}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-6 px-6 hover:text-orange-500 duration-150 ease-in-out"
              onClick={handleMenuOpen}
            >
              About
            </a>
            <a
              href="#project"
              className="py-6 px-6 hover:text-orange-500 duration-150 ease-in-out"
              onClick={handleMenuOpen}
            >
              Project
            </a>
            <a
              href="#feedbacks"
              className="py-6 px-6 hover:text-orange-500 duration-150 ease-in-out"
              onClick={handleMenuOpen}
            >
              Feedbacks
            </a>
            <a
              href="#contact"
              className="py-6 px-6 hover:text-orange-500 duration-150 ease-in-out"
              onClick={handleMenuOpen}
            >
              Contact
            </a>
            <Link to="/blog" className="py-6 px-6 hover:text-orange-500 duration-150 ease-in-out">Blog</Link>
          </div>
        )}
        <div className="uppercase lg:flex justify-end gap-12 text-right mr-12 w-full font-semibold dark:bg-slate-900 dark:text-white text-gray-600 text-[14px] -tracking-tighter px-6 hidden">
          <a
            href="#"
            className="hover:text-orange-500 duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            className=" hover:text-orange-500 duration-150 ease-in-out"
          >
            About
          </a>
          <a
            href="#project"
            className=" hover:text-orange-500 duration-150 ease-in-out"
          >
            Project
          </a>
          <a
            href="#feedbacks"
            className=" hover:text-orange-500 duration-150 ease-in-out"
          >
            Feedbacks
          </a>
          <a
            href="#contact"
            className=" hover:text-orange-500 duration-150 ease-in-out"
          >
            Contact
          </a>
          <Link to="/blog" className=" hover:text-orange-500 duration-150 ease-in-out">Blog</Link>
        </div>
        <div className="hidden lg:flex ">

        <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
