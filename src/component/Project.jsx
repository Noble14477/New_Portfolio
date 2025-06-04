import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { works } from "../constants";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const Project = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWorks = works.filter((item) => item.type === activeTab);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div
      className="w-full overflow-hidden bg-gray-50 text-gray-800 py-28 px-4 md:px-8 lg:px-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 dark:text-white"
      id="project"
    >
      <div className="mx-auto max-w-7xl">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center mb-16">
            <div className="relative flex justify-center items-center flex-col mb-6">
              <h2 className="text-5xl font-serif font-medium tracking-wide text-gray-900 dark:text-white py-4">
                My Work
              </h2>
              <div className="bg-gray-900 w-16 h-1 rounded-full" />
            </div>
            <p className="text-lg max-w-3xl leading-relaxed text-center text-gray-600 dark:text-white">
              A curated selection of projects demonstrating my expertise in both web development and graphic design.
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mt-20 border-b border-gray-500 pb-0">
              {["web", "graphics"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`text-[18px] font-medium px-6 py-2 relative transition-all duration-300 ${
                    activeTab === type
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {type === "web" ? "Web Projects" : "Graphics Design"}
                  {activeTab === type && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-tertiary transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid gap-24 mt-8">
            {filteredWorks.length > 0 ? (
              filteredWorks.map((items, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-16 ${items.type === "graphics" ? "items-start" : "items-center"}`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className={`relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-xl cursor-zoom-in ${
                      items.type === "graphics" ? "h-[400px]" : "h-[350px]"
                    }`}
                    onClick={() => openModal(items.image)}
                  >
                    <img
                      src={items.image}
                      alt={items.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredProject === index ? "scale-105" : "scale-100"
                      } ${
                        items.type === "graphics" ? "object-top" : "object-center"
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/10 via-black/30 to-transparent opacity-0 transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`} />
                  </div>
                  <div className="flex flex-col justify-center h-full">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500 dark:text-tertiary uppercase tracking-wider">
                        {items.category || "Featured Project"}
                      </span>
                      <h2 className="text-3xl font-serif font-medium text-gray-900 dark:text-white mt-1 mb-3">
                        {items.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-white">
                        {items.desc}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 mt-4 flex-wrap mb-6">
                      {items.tech.map((tech, index) => (
                        <span
                          className={`text-sm font-medium ${tech.color} dark:text-white dark:border-2 dark:border-tertiary px-3 py-1 rounded-full`}
                          key={index}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {items.gitHub && (
                        <a
                          href={items.gitHub}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-gray-900 transition-colors"
                        >
                          <FaGithub className="text-xl" />
                          <span>Code</span>
                        </a>
                      )}
                      {items.webLink && (
                        <a
                          href={items.webLink}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-gray-900 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <span className={`text-sm font-medium ${
                        items.status === "Completed"
                          ? "text-green-600 dark:text-white dark:border-2 dark:border-green-600 p-2 rounded-full"
                          : "text-blue-600 dark:text-white dark:border-2 dark:border-blue-600 p-2 rounded-full"
                      }`}
                      >
                        {items.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No projects found for this category.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged project preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;