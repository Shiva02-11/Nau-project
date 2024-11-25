import React from 'react';
import { Link } from 'react-router-dom';
import card1image from './images/Graduate.png';
import card2image from './images/bird.png';
import card3image from './images/budding.png';
import section2image from './images/section2.jpg';

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Section 1: Cards Section */}
      <section className="py-16 px-8 lg:px-32 bg-gray-100 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Explore My Work</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Discover projects and areas of focus that drive my passion for ecology and conservation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/graduate">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src={card1image}
                alt="Graduate Student"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Graduate Student
                </h2>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/photography">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src={card2image}
                alt="Avid Birder"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Avid Birder
                </h2>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/published">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src={card3image}
                alt="Budding Ecologist"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Budding Ecologist
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Section 2: About Section */}
      <section className="py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="w-full lg:w-1/2">
          <img
            src={section2image}
            alt="Wieteke Holthuijzen"
            className="rounded-lg shadow-lg w-full"
          />
          <p className="text-sm text-white leading-relaxed mb-6 text-center">
            Kuaihelani | Pihemanu | Midway Atoll
          </p>
        </div>
        <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            I am a PhD student at the University of Tennessee studying the ecological impacts of introduced house mice on remote island ecosystems through the support of a Tennessee Fellowship for Graduate Excellence. On the side, I serve as a Board Director with the Friends of Midway Atoll NWR, Communications Committee Co-Coordinator with the Pacific Seabird Group, and create science content for Khan Academy.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Originally from Boise, Idaho, I graduated from the University of Idaho with a BSc in Environmental Science with minors in French and Wildlife Resources and worked extensively with the UI Sustainability Center. Since then, I have worked across the country assisting on various research projects ranging from long-term effects of timber harvest on avian biodiversity to avian dusk chorus community dynamics to endangered species monitoring. Recently, I completed my MSc in Biological Sciences at Northern Illinois University, after serving as Midway Atoll NWR's Invasive Plant Control Specialist through Kupu's Conservation Leadership Development Program.
          </p>
        </div>
      </section>

      {/* Rectangle Div Section */}
      <section className="flex justify-center items-center py-16 bg-gray-50 dark:bg-gray-900">
        <div className="bg-blue-600 dark:bg-blue-800 text-white text-center p-8 rounded-lg shadow-lg w-11/12 lg:w-2/3">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Thank you for visiting my website and feel free to take a look around! <br />
            Also, be sure to check out my blog, "<strong>Wing It</strong>," <a href="https://wing-it-blog.weebly.com/" className="underline hover:text-blue-200 text-blue-400">here</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
