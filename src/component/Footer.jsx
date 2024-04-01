import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary md:p-12 py-12 px-4 text-white">
      <div className=" md:flex justify-beween">
        <div className="w-full ">
          <h1 className="font-bold uppercase text-2xl w-full whitespace-nowrap">
            Noble Chinonso
          </h1>
          <p className="text-[17px] text-gray-400 leading-7 py-4">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="w-full mt-4 md:mt-0 md:flex justify-end">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Social</h2>
            <div className=" py-6 shadow-lg  gap-4 flex text-2xl ">
              <a
                href="https://www.linkedin.com/in/noble-chinonso/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/Noble14188"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/Noble14477"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="pt-10 text-[14px] text-gray-400 text-center">
        © Copywirte Noble Chinonso Ugwuja, 2023
      </div>
    </div>
  );
};

export default Footer;
