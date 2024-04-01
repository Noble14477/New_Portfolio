import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div className="">
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
};

export default Homepage;
