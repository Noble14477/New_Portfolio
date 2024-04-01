import React from "react";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden text-black py-20 px-4 md:px-20 mt-10" id="contact">
      <div className="mx-auto max-w-7xl">
        <Parallax speed={10} className="w-full ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              {/* <p className="text-2xl uppercase text-gray-200 text-center">
                Intoduction
              </p> */}
              <div className="relative flex justify-center items-center flex-col mb-4">
                <h2 className="text-4xl uppercase font-bold py-6">CONTACT.</h2>
                <div className="bg-tertiary w-[40px] h-2 rounded-full" />
              </div>
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              {" "}
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>

          {/* <div className="mt-20 flex flex-wrap justify-center gap-10">
            {services.map((service, index) => {
              return (
                <ServiceCard key={service.title} index={index} {...service} />
              );
            })}
          </div> */}
          <form className=" mt-20 bg-white rounded-lg p-6 md:p-10 max-w-3xl mx-auto">
            <div className="grid gap-8">
                <label htmlFor="name" className="grid gap-4">Name:
                    <input id="name" type="text" placeholder="Enter your name..." className="bg-gray-100 md:p-6 p-4 text-[14px] rounded-md "/>
                </label>
                <label htmlFor="email" className="grid gap-4">Email:
                    <input id="email" type="text" placeholder="Enter your email..." className="bg-gray-100 md:p-6 p-4 text-[14px] rounded-md "/>
                </label>
                <label htmlFor="message" className="grid gap-4">Message:
                    {/* <input type="text" placeholder="Enter your name..." className="bg-gray-200 md:p-6 p-4 text-[14px] rounded-md "/> */}
                    <textarea name="" id="message"  placeholder="Enter your message..." className="bg-gray-100 md:p-6 p-4 h-[250px] text-[14px] rounded-md resize-none"></textarea>
                </label>

            <div className="mt-4  flex justify-end">
              <button className="bg-tertiary py-4 uppercase text-white px-16 rounded-md hover:-translate-y-2 duration-300 shadow-xl">
                Submit
              </button>
            </div>

            </div>
          </form>
        </Parallax>
      </div>
    </div>
  );
};

export default Contact;
