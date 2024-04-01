import React from "react";
import { image2 } from "../assets";
import { skills } from "../constants";
import { Parallax } from "react-scroll-parallax";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-full overflow-hidden text-black py-20 px-4 md:px-20 mt-10"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <Parallax speed={10} className="w-full ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              {/* <p className="text-2xl uppercase text-gray-200 text-center">
                Intoduction
              </p> */}
              <div className="relative flex justify-center items-center flex-col mb-4">
                <h2 className="text-4xl uppercase font-bold py-6">About Me.</h2>
                <div className="bg-tertiary w-[40px] h-2 rounded-full" />
              </div>
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              {" "}
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 md:gap-20 mt-20">
            <div>
              <h3 className="pb-8 text-2xl  font-bold">Get To know Me!</h3>

              <div>
                <p className="text-[15px] text-gray-700 leading-7">
                  I'm a <b>Frontend Focused Web Developer</b> building and
                  managing the Front-end of Websites and Web Applications that
                  leads to the success of the overall product. Check out some of
                  my work in the <b>Projects</b> section.
                  <br />
                  <br />I also like sharing content related to the stuff that I
                  have learned over the years in <b> Web Development</b> so it
                  can help other people of the Dev Community. Feel free to
                  Connect or Follow me on my{" "}
                  <a
                    href="https://www.linkedin.com/in/noble-chinonso/"
                    target="_blank"
                    className="text-tertiary font-bold"
                  >
                    Linkedin
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/Noble14188"
                    target="_blank"
                    className="text-tertiary font-semibold"
                  >
                    Twitter
                  </a>{" "}
                  where I post useful content related to <b> Web Development</b>{" "}
                  and Programming.
                  <br />
                  <br />
                  I'm open to <b>Job</b> opportunities where I can contribute,
                  learn and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to <b>contact</b>{" "}
                  me.
                </p>

                <div className="mt-12 flex justify-start items-start">
                  <a
                    href="#contact"
                    className="bg-tertiary py-4 uppercase text-white px-16 rounded-md hover:-translate-y-2 duration-300 shadow-xl"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="pb-8 text-2xl  font-bold">My Skills</h3>

              <div className="flex gap-4 flex-wrap">
                {skills.map((items, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 p-3 text-[14px] rounded-lg -tracking-tighter text-tertiary"
                  >
                    {items.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
