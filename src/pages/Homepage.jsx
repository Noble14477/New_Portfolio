import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Feedbacks from "../component/Feedbacks";

const Homepage = () => {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div className="">
        <About/>
        <Project/>
        <Feedbacks/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
};

export default Homepage;
