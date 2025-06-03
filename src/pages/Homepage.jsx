import React, { useState, useEffect } from "react";
import Hero from "../component/Hero";
import About from "../component/About";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Feedbacks from "../component/Feedbacks";
import { logoIcon } from "../assets";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => setShowText(true), 1000);
    
    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Animated logo container */}
              <div className="relative w-24 h-24 flex items-center justify-center mx-auto max-w-10">
                {/* Pulsing circle background */}
                <div className="absolute inset-0 rounded-full bg-gray-200 animate-pulse"></div>
                
                {/* Rotating border */}
                <div className="absolute w-full h-full border-4 border-transparent border-t-gray-900 rounded-full animate-spin"></div>
                
                {/* Logo with fade-in animation */}
                <img 
                  src={logoIcon} 
                  alt="logo" 
                  className="w-12 h-12 transition-all duration-1000 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              
              {/* Text animation */}
              <div className={`mt-6 overflow-hidden`}>
                <h1 
                  className={`text-2xl font-bold text-gray-900 transition-all duration-1000 transform ${showText ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                >
                  NobleDevWorks
                </h1>
                <div className={`h-1 bg-gray-900 mt-2 transition-all duration-700 ${showText ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
              </div>
              
              {/* Loading dots animation */}
              <div className="flex justify-center mt-4 space-x-1">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-gray-900 rounded-full animate-bounce"
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <Hero />
          </div>
          <div className="">
            <About />
            <Project />
            <Feedbacks />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;