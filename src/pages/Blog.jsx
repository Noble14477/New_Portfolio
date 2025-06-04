// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiSearch, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { blogPosts } from "../constants";
import { logoIcon } from "../assets";
import ThemeToggle from "../component/ThemeToggle";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(blogPosts.flatMap((post) => post.categories)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <div className="py-4 px-6 flex justify-between border-b">
        <Link to="/" className="font-bold capitalize text-xl w-full whitespace-nowrap flex gap-2 items-center ">
          <img src={logoIcon} alt="logo" className="w-[40px] md:w-[50px]" />
          <h1 className="text-sm lg:text-md dark:text-white">NobleDevWorks</h1>
        </Link>
        <ThemeToggle className="" />
      </div>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            NobleDevWorks Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights on web development, Graphic design, and tech education from my
            journey
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-tertiary text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" />
                      {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-tertiary font-medium hover:underline"
                  >
                    Read more <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
              No articles found matching your criteria
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-tertiary to-tertiary-dark rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get the latest articles in your inbox
            </h2>
            <p className="mb-6 opacity-90">
              Stay updated with my latest posts on web development, design, and
              tech education. No spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-tertiary font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
