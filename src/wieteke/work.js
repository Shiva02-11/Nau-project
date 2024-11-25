import React from 'react';
import { Link } from 'react-router-dom';
import card1image from './images/academic.png';
import card2image from './images/fiels.png';
import card3image from './images/published.png';
import section1image from './images/work1.jpg';

const Work = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Title Section */}
      <header className="py-12 px-8 bg-gray-200 dark:bg-gray-800 text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Work
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Explore my academic, field, and published work below.
        </p>
      </header>

      {/* Section 1: About Me Section */}
      <section className="py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={section1image}
            alt="Wieteke Holthuijzen"
            className="rounded-lg shadow-lg w-full"
          />
          <p className="text-sm text-white leading-relaxed mb-6 text-center">
            Doing research means getting dirty.
          </p>
        </div>
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            With interests ranging from French to food, my work (in the field and in the classroom) has been equally diverse! I strive to be a student for life and I am always interested in learning about the environment, natural history, and politics and culture around me, wherever I am. I seek to learn something new from everyone that I meet and my work experiences have helped shape me into a curious and collaborative individual.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Click on the buttons below to explore my work — in academia, the field, and published materials.
          </p>
        </div>
      </section>

      {/* Section 2: Work Cards Section */}
      <section className="py-16 px-8 lg:px-32 bg-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <Link to="/graduate">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={card1image}
              alt="Card 1"
              className="w-full h-30 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Academic Work
              </h2>
            </div>
          </div>
          </Link>
          {/* Card 2 */}
          <Link to="/field">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={card2image}
              alt="Card 2"
              className="w-full h-30 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Field Work
              </h2>
            </div>
          </div>
          </Link>
          {/* Card 3 */}
          <Link to="/published">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={card3image}
              alt="Card 3"
              className="w-full h-30 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Published Work
              </h2>
            </div>
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
