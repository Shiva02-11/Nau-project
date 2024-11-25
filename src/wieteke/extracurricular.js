import React from 'react';
import { Link } from 'react-router-dom';
// import bgImage from './images/background.jpg'; // Replace with the path to your background image
import section2Image from './images/palouse.jpg'; // Replace with the path to your section 2 image
import card1Image from './images/volunteer.png';
import card2Image from './images/photography.png';
import card3Image from './images/graphic.png';
import card4Image from './images/sustainability.png';

const Extracurricular = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Section 1: Background Image with Title */}
      <section
        className="min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Art, Music, and More!
        </h1>
      </section>

      {/* Section 2: Image on Left and Description on Right */}
      <section className="py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={section2Image}
            alt="Extracurricular Activities"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <p className="text-sm text-white leading-relaxed mb-6 text-center">
            "The Palouse"
          </p>
        </div>
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Exploring Beyond the Classroom</h2>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            As a lover of the outdoors, I spend my time birding, hiking, mountain biking, camping, and rock climbing. Throughout my life, I have always enjoyed participating in team sports. I grew up playing soccer and competitive Ultimate Frisbee, and am known to become a bit too intense during pickleball matches. At the University of Idaho, I was a member of the UI Logging Sports Team and competed in pole climbing, axe throw, pulp toss, caber toss, stock saw, women's double buck, jack-and-jill, and choker race. I also played Roller Derby with the Barbed Wire Betties in DeKalb, Illinois.          </p>
          <p className="text-lg leading-relaxed text-justify">
            I also have a soft spot for music and art. I began to play the cello in the 6th grade and continued all through high school. While in college, I also played with a local folk/Americana band named "The Thalweg."  Since then, I play opportunistically with others and enjoy jamming on the ukulele, electric bass, and banjo and hope someday to play the mandocello.  As for art, I enjoy working in a variety of media, especially ceramics, photography, pen and ink, mixed media, and welding.          </p>
        </div>
      </section>

      {/* Section 3: Four Cards */}
      <section className="py-16 px-8 lg:px-32 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Highlights of My Extracurricular Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <Link to="/volunteer">
            <div className="bg-white dark:bg-gray-600 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={card1Image}
                alt="Volunteer"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Volunteer
                </h3>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/photography">

            <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={card2Image}
                alt="Photography"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Photography
                </h3>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/graphic">
            <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={card3Image}
                alt="Graphic Design"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Graphic Design
                </h3>
              </div>
            </div>
          </Link>
          {/* Card 4 */}
          <Link to="/sustainability">
            <div className="bg-white dark:bg-gray-600 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src={card4Image}
                alt="Sustainability"
                className="w-full h-30 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Sustainability
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Extracurricular;
