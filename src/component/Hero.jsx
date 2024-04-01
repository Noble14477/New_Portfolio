import React from "react";
import { background } from "../assets";
import { ParallaxBanner } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: background, speed: -18 },
        {
          speed: -25,
          children: (
            <div className="absolute inset-0 flex text-black items-center justify-center flex-col">
              <div className="w-full h-full absolute bg-gray-100 opacity-80" />
              <div className="relative px-4 w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold py-4 text-center">
                  Hey, I'm{" "}
                  <ReactTyped
                    strings={["Noble Chinonso"]}
                    typeSpeed={100}
                    backSpeed={200}
                    startDelay={200}
                    backDelay={5000}
                    className=""
                  />
                </h1>
                <p className="text-[15px] leading-7 lg:leading-9 py-4 md:text-xl mt-6 font-normal text-center">
                  A Result-Oriented Web Developer building and managing Websites
                  and Web <br className="hidden md:block" /> Applications that
                  leads to the success of the overall product
                </p>
                <div className="flex justify-center items-center mt-8">
                  <a
                    href="#project"
                    className="bg-tertiary py-4 uppercase text-white px-16 rounded-md hover:-translate-y-2 duration-300 shadow-xl"
                  >
                    Projects
                  </a>
                </div>
                <div className="bg-white rounded py-6 px-4 shadow-lg  flex-col gap-8 hidden md:flex text-4xl absolute top-0 left-0">
                  <a href="https://www.linkedin.com/in/noble-chinonso/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/Noble14188" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://github.com/Noble14477" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
                {/* <div className="absolute -left-6 top-0 w-10 md:w-32">
                  <div className="w-[30px] h-[30px] bg-white rounded-full absolute top-0 -left-[22%]" />
                  <div className="w-[8px] h-[200px] bg-gradient-to-b from-white rounded-full absolute top-[1px] left-[3%] md:-left-[16px]" />
                </div> */}
              </div>
            </div>
          ),
        },
        // { image: '/static/banner-foreground.png', speed: -10 },
      ]}
      className="aspect-[2/1] h-[100dvh]"
    />
  );
};

export default Hero;
