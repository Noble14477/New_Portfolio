import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { works } from "../constants";
import { FaEye, FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="w-full overflow-hidden text-black py-20 px-4 md:px-20 mt-10" id="project">
      <div className="mx-auto max-w-7xl">
        <Parallax speed={10} className="w-full ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              {/* <p className="text-2xl uppercase text-gray-200 text-center">
            Intoduction
          </p> */}
              <div className="relative flex justify-center items-center flex-col mb-4">
                <h2 className="text-4xl uppercase font-bold py-6">Projects.</h2>
                <div className="bg-tertiary w-[40px] h-2 rounded-full" />
              </div>
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              {" "}
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly discribed
              with links to code repositories and live demos in it. it reflects
              my ability to solve complex problems, work with diffrent
              technologies, and manage projects effectively.
            </p>
          </div>
          <div>
            <div className="grid gap-10">
              {works &&
                works.map((items, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 gap-6 md:gap-20 mt-20"
                  >
                    <div>
                      <img
                        src={items.image}
                        alt={items.title}
                        className="md:w-[500px] rounded-md shadow-md h-[300px]"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h2 className="pb-4 text-2xl  font-bold">
                          {items.title}
                        </h2>
                        <div className="px-4 flex gap-3">
                          <FaGithub className="text-2xl text-purple-700" />
                          <FaEye className="text-2xl text-gray-700" />
                        </div>
                      </div>
                      <p className="text-[17px] text-gray-700 leading-7">
                        {items.desc}
                      </p>
                      <div className="flex gap-2 mt-4 flex-wrap mb-2">
                        {items.tech.map((tech, index) => (
                          <p
                            className={`${tech.color} px-3 text-[14px] rounded-lg -tracking-tighter`}
                            key={index}
                          >
                            #{tech.name}
                          </p>
                        ))}
                      </div>
                      <p className="mt-6 font-semibold text-[15px] px-3">
                        Status:{" "}
                        <span
                          className={
                            items.status === "Completed"
                              ? "text-blue-700 "
                              : "text-green-700 "
                          }
                        >
                          {items.status}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Project;
