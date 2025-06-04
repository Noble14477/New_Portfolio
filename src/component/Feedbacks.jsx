import React from "react";
import { Parallax } from "react-scroll-parallax";
import { avatar, car, image2 } from "../assets";

const Feedbacks = () => {
  return (
    <div
      className="w-full overflow-hidden text-black py-20 px-4 md:px-20  dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 dark:text-white"
      id="feedbacks"
    >
      <div className="mx-auto max-w-7xl">
        <Parallax speed={-10} className="w-full ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              {/* <p className="text-2xl uppercase text-gray-200 text-center">
                Intoduction
              </p> */}
              <div className="relative flex justify-center items-center flex-col mb-4">
                <h2 className="text-4xl capitalize font-bold py-6 font-serif">
                  Feedbacks.
                </h2>
                <div className="bg-tertiary w-[40px] h-2 rounded-full" />
              </div>
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              {" "}
              What Our clients says about us.
            </p>
          </div>

          <div className=" mt-20 flex justify-center items-center flex-wrap gap-6">
            <div className="p-8 w-full md:w-[350px] h-full bg-white rounded-lg drop-shadow-xl">
              <b className="text-5xl">"</b>
              <p className="text-[15px] leading-[30px] text-gray-600">
                I thought it was impossible to make a website as beautiful as
                our product, but Rick proved me wrong.
              </p>
              <div className="mt-10 flex justify-between items-center">
                <div>
                  <p className="text-[15px] font-semibold">
                    <i className="text-blue-500">@</i> St. Joseph creative house{" "}
                  </p>
                  <span className="text-[14px] text-gray-500">
                    Director of St. Joseph Creative house
                  </span>
                </div>
                <img src={image2} alt="user" className="rounded-full w-16 h-16"/>
              </div>
            </div>
            <div className="p-8 w-full md:w-[350px] h-full bg-white rounded-lg drop-shadow-xl">
              <b className="text-5xl">"</b>
              <p className="text-[15px] leading-[30px] text-gray-600">
              I've never met a web developer who truly cares about their clients' success like Rick does.
              </p>
              <div className="mt-10 flex justify-between items-center">
                <div>
                  <p className="text-[15px] font-semibold">
                    <i className="text-blue-500">@</i> Crows Mega Autos{" "}
                  </p>
                  <span className="text-[14px] text-gray-500">
                    CEO Crows Mega Autos
                  </span>
                </div>
                <img src={car} alt="user" className="rounded-full w-16 h-16"/>
              </div>
            </div>
            <div className="p-8 w-full md:w-[350px] h-full bg-white rounded-lg drop-shadow-xl">
              <b className="text-5xl">"</b>
              <p className="text-[15px] leading-[30px] text-gray-600">
              After Noble optimized our website, our traffic increased by 50%. We can't thank them enough!
              </p>
              <div className="mt-10 flex justify-between items-center">
                <div>
                  <p className="text-[15px] font-semibold">
                    <i className="text-blue-500">@</i> Miss. Okenyi Chidimma{" "}
                  </p>
                  <span className="text-[14px] text-gray-500">
                    Micro Finance Bank
                  </span>
                </div>
                <img src={avatar} alt="user" className="rounded-full w-16 h-16"/>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Feedbacks;
