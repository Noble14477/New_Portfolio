// import React from "react";
// import { image2 } from "../assets";
import { skills } from "../constants";
import { Parallax } from "react-scroll-parallax";
// import { Tilt } from "react-tilt";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-full overflow-hidden text-black py-20 px-4 md:px-20 bg-gradient-to-br from-white to-gray-100
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 dark:text-white"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <Parallax speed={10} className="w-full ">
          <div className="flex flex-col justify-center items-center">
            <div className="relative flex justify-center items-center flex-col mb-4">
              <h2 className="text-4xl capitalize font-serif font-bold py-6">About Me.</h2>
              <div className="bg-tertiary w-[40px] h-2 rounded-full" />
            </div>
            <p className="text-[17px] max-w-3xl leading-[30px] mt-4 text-center">
              Learn more about who I am, what I do, and the range of skills I bring to the table—from design to development and training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 md:gap-20 mt-20">
            <div>
              <h3 className="pb-8 text-2xl font-bold font-serif">Get To Know Me!</h3>

              <div>
                <p className="text-[16px] text-gray-900 dark:text-white leading-7">
                  I'm a <b>multi-skilled creative professional</b> specializing in{" "}
                  <b>web development</b>, <b>graphic design</b>, and{" "}
                  <b>tech training</b>. I build modern, user-friendly websites
                  and applications, design visually impactful brand materials,
                  and offer hands-on training to help others grow in tech.
                  <br />
                  <br />
                  I began my journey with graphic design, where I developed a
                  strong eye for structure and color. Over time, I transitioned
                  into frontend development and expanded into offering training,
                  project planning, and working with tools like{" "}
                  <b>Firebase, MongoDB, Cloudinary</b>, and animation libraries
                  such as <b>Framer Motion</b>.
                  <br />
                  <br />
                  Through my brand, <b>NobleDevWorks</b>, I provide:
                  <ul className="list-disc ml-6 mt-2">
                    <li>🔧 Web & graphic design services</li>
                    <li>🎓 Tech training (design + development)</li>
                    <li>🚀 Digital support for small businesses and startups</li>
                  </ul>
                  <br />
                  I also share useful insights on{" "}
                  <a
                    href="https://www.linkedin.com/in/noble-chinonso/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-tertiary font-bold"
                  >
                    LinkedIn
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/Noble14188"
                    target="_blank"
                    rel="noreferrer"
                    className="text-tertiary font-semibold"
                  >
                    Twitter
                  </a>{" "}
                  to help self-taught developers and underrepresented talents
                  grow in tech.
                  <br />
                  <br />
                  I'm open to <b>freelance gigs, collaborations, teaching opportunities</b>, and{" "}
                  <b>remote/full-time roles</b>. If you're looking for someone who
                  understands design, code, and impact—let's connect.
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
              <h3 className="pb-8 text-2xl font-bold font-serif">My Skills</h3>

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
