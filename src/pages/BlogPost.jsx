// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiBookmark,
} from "react-icons/fi";
import { blogPosts } from "../constants";
import { motion } from "framer-motion";
import NotFound from "./NotFound";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { me } from "../assets";
import ThemeToggle from "../component/ThemeToggle";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      console.log(`Viewed post: ${post.title}`);
    }
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.categories.some((cat) => post.categories.includes(cat)),
    )
    .slice(0, 3);

  const shareUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/blog"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-tertiary dark:hover:text-tertiary transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <FiBookmark className="text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <FiShare2 className="text-gray-600 dark:text-gray-400" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-xs font-medium rounded-full bg-tertiary/10 text-tertiary dark:bg-tertiary/20"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8 text-sm sm:text-base">
            <span className="flex items-center mr-6">
              <FiCalendar className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <FiClock className="mr-2" />
              {post.readTime} read
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-12 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70" />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                // eslint-disable-next-line no-unused-vars
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-gray-900 dark:text-gray-100 leading-relaxed mb-6 text-lg"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-lg" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-900 dark:text-gray-50" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-tertiary pl-4 italic text-gray-600 dark:text-gray-400 my-6"
                    {...props}
                  />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table
                      className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
                    {...props}
                  />
                ),
                code: ({ node, inline, ...props }) => {
                  if (inline) {
                    return (
                      <code
                        className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm"
                        {...props}
                      />
                    );
                  }
                  return (
                    <pre className="bg-gray-800 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-gray-100 my-6">
                      <code {...props} />
                    </pre>
                  );
                },
                a: ({ node, ...props }) => (
                  <a className="text-tertiary hover:underline" {...props} />
                ),
                img: ({ node, ...props }) => (
                  <img
                    className="rounded-lg shadow-md my-6 mx-auto"
                    {...props}
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-start">
            <div className="w-12 h-12 mr-4">
            <img
              src={me}
              alt="Author"
              className="w-full h-full rounded-full  object-cover"
            />

            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Noble Chinonso
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Web Developer & Designer | Creator of NobleDevWorks | Tech
                Educator
              </p>
              <div className="flex space-x-4 mt-3">
                <a
                  href="#"
                  className="text-gray-500 hover:text-tertiary transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-tertiary transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Share this post
            </h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiTwitter className="mr-2" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <FiLinkedin className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-tertiary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {relatedPost.date} • {relatedPost.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="mt-20 bg-gradient-to-r from-tertiary to-tertiary-dark rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay updated with my latest posts
            </h2>
            <p className="mb-6 opacity-90">
              Join my newsletter to receive web development tips, design
              insights, and tech education content.
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
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
