import React from 'react';
import { useNavigate } from 'react-router-dom';
import section2Image from '../images/Michelle.jpg';
import cardImage1 from '../images/ian-symbol-ant_2.png';
import cardImage2 from '../images/ian-symbol-rhizophora-stylosa-leaf_2.png';
import cardImage3 from '../images/ian-symbol-dendroctonus-ponderosae-2.png';

const Hero = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section className="bg-gradient-to-r text-black space-y-16 ">

            {/* Section 1 */}
            <div
                className="h-screen flex flex-col justify-center items-center bg-cover bg-center p-6"
                style={{ backgroundImage: "url('/section1.png')" }}
            >
                <h1 className="text-6xl sm:text-7xl md:text-6xl font-bold mb-4 text-center text-white">Welcome to My Research Page</h1>
                <p className="text-2xl sm:text-3xl md:text-4xl text-white">
                    Exploring ecosystem dynamics and species interactions.
                </p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row items-center p-6 space-y-6 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2">
                    <h2 className="text-5xl md:text-5xl font-bold mb-4">Biological communities in the Anthropocene.</h2>
                    <p className="text-3xl">I am interested in how biological communities are impacted by species introductions...</p>
                </div>
                <div className="md:w-1/2">
                    <img src={section2Image} alt="Ecosystem Research" className="rounded-lg shadow-lg w-full" />
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-center text-center px-6 space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Species interactions in a changing world</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl text-justify">
                    {[cardImage1, cardImage2, cardImage3].map((image, idx) => (
                        <div key={idx} className="bg-white text-gray-800 rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                            <img src={image} alt={`Project ${idx + 1}`} className="rounded-lg mb-4 w-full" />
                            <h3 className="text-3xl font-semibold mb-2 ">{['Conservation Ecology', 'Predicting Outcomes', 'Interactions Unseen'][idx]}</h3>
                            <p className="text-2xl text-gray-600">{[
                                'How do we view invasive species management in the context of ecological functions?',
                                'How do we use ecology to predict the outcomes of conservation actions?',
                                'How can molecular ecology deepen our understanding of species interactions?'
                            ][idx]}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col items-center text-center px-6 space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Our Latest Discoveries</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl text-justify">
                    {[
                        { title: 'Research', path: '/research' },
                        { title: 'Publications', path: '/publications' },
                        { title: 'Sharing Science', path: '/sharing-science' },
                    ].map(({ title, path }, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div>
                                <h3 className="text-3xl font-semibold mb-4">{title}</h3>
                                <p className="text-2xl text-gray-600 mb-4">{[
                                    'My research investigates biological interactions to comprehend the impacts and management of invasive species. I utilize islands as model systems in ecology to address unique invasive species challenges and benefits in island conservation.',
                                    'Here is a list of publications and documents available for download (including PDFs). These include my research articles, book chapters, and other scholarly works.',
                                    'I started on the road to science as an undergraduate student, and I love engaging undergraduate students in my research.'
                                ][idx]}</p>
                            </div>
                            <div className="flex justify-end mt-auto">
                                <button
                                    onClick={() => handleNavigation(path)}
                                    className="text-lg font-semibold text-blue-600 hover:text-blue-800"
                                >
                                    Explore More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 5 */}
            <div id="contact" className="flex justify-center items-center text-center px-6 py-11 ">
                <div>
                    <h2 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-4">Contact Us</h2>
                    <p className="text-2xl sm:text-3xl md:text-4xl max-w-2xl">
                        Ana Miller-ter Kuile <br />
                        Ecological and Environmental Informatics<br />
                        Northern Arizona University
                        Flagstaff, AZ <br />
                        ana.miller-ter-kuile@nau.edu
                    </p>
                </div>
            </div>

        </section>

    );
};

export default Hero;
