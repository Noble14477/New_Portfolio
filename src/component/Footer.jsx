import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary p-12 text-white">
      <div className=" flex justify-beween">
        <div className="w-full ">
          <h1 className="font-bold uppercase text-2xl w-full whitespace-nowrap">
            Noble Chinonso
          </h1>
          <p className="text-[17px] text-gray-500 leading-7 py-4">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-col">
            <h2>Social</h2>
            <div className=" py-6 shadow-lg  gap-8 hidden md:flex text-4xl ">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="pt-10 text-[14px] text-gray-500 text-center">
      © Copywirte Noble Chinonso Ugwuja, 2023
      </div>
    </div>
  );
};

export default Footer;
