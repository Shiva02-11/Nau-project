import React from 'react';
// import blogbackground from './images/section2.jpg'; // Replace with the path to your background image
import blogImage1 from './images/blog1.jpg'; // Replace with the path to your blog image 1
import blogImage2 from './images/blog2.jpg'; // Replace with the path to your blog image 2
import blogImage3 from './images/blog3.jpg'; // Replace with the path to your blog image 3

const Blog = () => {
  return (
    <div
      className="min-h-screen bg-gray-700 flex flex-col items-center justify-center bg-cover bg-center relative text-center"
      // style={{ backgroundImage: `url(${blogbackground})` }}
    >
      {/* Title */}
      <h1 className="text-5xl font-bold text-white drop-shadow-lg absolute top-16">
      "Wing It" Blog
      </h1>

      {/* Blog Images */}
      <div className="flex gap-8 mt-40">
        {/* Blog Image 1 */}
        <div className="w-72 h-72 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src={blogImage1}
            alt="Blog 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Blog Image 2 */}
        <div className="w-72 h-72 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src={blogImage2}
            alt="Blog 2"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Blog Image 3 */}
        <div className="w-72 h-72 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img
            src={blogImage3}
            alt="Blog 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Paragraph and Button */}
      <div className="mt-12 px-6 text-center">
        <p className="text-lg text-white mb-6 ">
          This blog is dedicated to the amazing avifauna around the world and my humble adventures as a budding scientist and avid birder. Here, I share my stories of living alongside our feathered friends and learning about their lives in the sky and on the ground.
        </p>
        <a
          href="https://wing-it-blog.weebly.com/" // Replace with the actual blog page URL
        >
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to "Wing It" Blog!
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
