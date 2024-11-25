import React from 'react';
// import backgroundImage from './images/graduate-background.jpg'; // Replace with the actual path to your background image
import section2Image from './images/graduate2.jpg'; // Replace with the actual path to your section 2 image
import section5Image from './images/graduate5.jpg'; // Replace with the actual path to your section 5 image
import card2image from './images/graduate3.jpg';
import card3image from './images/graduate4.jpg';
const Graduate = () => {
    return (
        <div>
            {/* Section 1: Background Image with Title */}
            <section
                className="min-h-screen flex items-center justify-center bg-cover bg-center text-center text-white bg-gray-700"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h1 className="text-5xl font-bold drop-shadow-md">Graduate Work: Island Invasives</h1>
            </section>

            {/* Section 2: Image on the Left and Description on the Right */}
            <section className="bg-gray-700 py-16 px-8 lg:px-32 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-8 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                    <img
                        src={section2Image}
                        alt="Graduate Work"
                        className="rounded-lg shadow-lg w-full"
                    />
                    <p className="text-sm text-white leading-relaxed text-center">
                        The house mouse (Mus musculus) on Midway Atoll NWR
                    </p>
                </div>
                <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100">
                    <p className="text-lg leading-relaxed text-justify">
                        Islands are critical areas for biological conservation because they house a disproportional amount of the <a href="https://academic.oup.com/bioscience/article/65/6/592/301848?login=false" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">world’s biodiversity</a>.
                        However, island ecosystems are globally imperiled due to threats posed by <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4839448/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">invasive mammal introductions</a>.
                        Invasive house mice (<i>Mus musculus</i>) have <a href="http://issg.org/database/species/impact_info.asp?si=97&fr=1&sts=&lang=EN" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ecosystem-altering ramifications</a> on islands upon introduction through depredation of seeds, plants, invertebrates, and even seabirds.
                        Mice impact island species’ distributions, densities, and persistence which in turn alters or disrupts nutrient cycles, symbioses between species, and other ecological processes.
                        Mice can be eradicated from islands, but a <a href="https://www.researchgate.net/publication/5960658_Invasive_Rodent_Eradication_on_Islands" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">critical uncertainty remains regarding island ecosystem response</a>.
                        This information is essential because it allows for novel questions about the direct and indirect impacts of mice to be tested.
                    </p>
                </div>
            </section>


            {/* Section 3: Iframe */}
            <section className="bg-gray-800 py-16 px-8 lg:px-32">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
                    Mouse Aggression on Midway Atoll National Wildlife Refuge
                </h2>

                {/* Embedded Map */}
                <div className="flex justify-center">
                    <iframe
                        width="100%"
                        height="800px"
                        src="https://fws.maps.arcgis.com/apps/MapSeries/index.html?appid=e7bbcf5c95804186902ef938f1c020f2"
                        frameBorder="0"
                        scrolling="no"
                        title="Mouse Aggression Map"
                        className="rounded-lg shadow-lg w-full"
                    ></iframe>
                </div>

                {/* Content */}
                <div className="text-gray-300 mt-8 text-lg leading-relaxed text-justify">
                    <p className="mb-4">
                        &#8203;&#8203;In December 2015, U.S. Fish and Wildlife Service biologists and volunteers{' '}
                        <a
                            href="https://wietekeholthuijzen.weebly.com/graduate-work.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            discovered house mice attacking adult nesting Laysan and Black-footed Albatrosses
                        </a>{' '}
                        at Midway Atoll National Wildlife Refuge, part of Papahānaumokuākea Marine National Monument. Mice attacks have been documented at{' '}
                        <a
                            href="https://www.rspb.org.uk/our-work/conservation/projects/gough-island-restoration-programme/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            other islands and on other seabirds
                        </a>
                        , but never at Midway Atoll NWR on the adult, incubating albatrosses. House mice are not native to Midway Atoll and were inadvertently introduced to the atoll decades ago. Curiously enough, mice have coexisted among millions of seabirds nesting on the ground, in burrows, and in trees at Midway without obvious conflict — until now.
                    </p>

                    <p className="mb-4">
                        Working with{' '}
                        <a
                            href="https://www.islandconservation.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Island Conservation
                        </a>
                        , USFWS is proposing to protect seabirds on Midway Atoll NWR by completely removing the invasive house mouse from the atoll, which is necessary to protect the largest albatross colony in the world as well as 29 other species of birds that rely on this unique Refuge. For more information on this proposed eradication, read through the Midway Seabird Protection Project Draft Environmental Assessment above.
                    </p>

                    <p className="mb-4">
                        Collaborating with USFWS and Island Conservation, my graduate work will focus on the broader ecological monitoring of the mouse eradication on Midway Atoll NWR and quantifying the impacts of mice pre-/post-eradication on island flora and fauna. I am completing my PhD at the University of Tennessee's{' '}
                        <a
                            href="https://eeb.utk.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Ecology &amp; Evolutionary Biology Department
                        </a>{' '}
                        under the direction and guidance of{' '}
                        <a
                            href="https://eeb.utk.edu/people/daniel-simberloff/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Dr. Daniel Simberloff
                        </a>
                        .
                    </p>
                </div>
            </section>


            {/* Section 4: Section Title and 3 Cards */}
            <section className="bg-gray-700 py-16 px-8 lg:px-32">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    Midway Atoll NWR House Mouse Eradication Ecological Monitoring
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 (Map Location) */}
                    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col">
                        <div className="w-full h-48 mb-4 bg-gray-300 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181297.33420244872!2d-177.44845589699898!3d28.18862508706472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7cb82296a25179db%3A0xfd7d890b7cdafe6b!2sMidway%20Atoll!5e0!3m2!1sen!2sin!4v1732192070192!5m2!1sen!2sin"
                                title="Midway Atoll Map"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="w-full h-full object-cover rounded-lg"
                            ></iframe>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Project Overview
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 flex-grow text-justify">
                            Collaborating on ecological monitoring since 2017 with the U.S. Fish and Wildlife Service and Island Conservation, we seek to understand the broader impacts on invasive house mice on Midway Atoll's flora and fauna. Monitoring activities include mouse diet analysis, arthropod community composition and diversity, as well as seabird demography.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1MMCCOLyI1Fi9ybvy7yh6oUajRTa0iBzK/view"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="mt-4 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Learn More
                                </span>
                            </button>
                        </a>
                    </div>


                    {/* Card 2 */}
                    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col">
                        <div className="w-full h-48 mb-4 bg-gray-300 rounded-lg overflow-hidden">
                            <img
                                src={card2image}
                                alt="Conservation Strategies"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            House Mouse Diet Analysis
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 flex-grow text-justify">
                            What do house mice consume on Midway Atoll NWR? We will use eDNA metabarcoding/NGS combined with stable isotope analysis to ascertain mouse diet throughout different seasons and consequently use that data to inform ecological studies and ongoing monitoring to determine the direct and indirect ecological impacts of invasive mice on the Refuge.
                        </p>
                        <a
                            href="https://www.researchgate.net/publication/339814886_Mice_to_eat_you_uncovering_the_diet_of_invasive_house_mice"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="mt-4 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Learn More
                                </span>
                            </button>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col">
                        <div className="w-full h-48 mb-4 bg-gray-300 rounded-lg overflow-hidden">
                            <img
                                src={card3image}
                                alt="Data-Driven Insights"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            Arthropod Communities
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 flex-grow text-justify">
                            Although mice are omnivorous they can also be very selective and may prefer invertebrate prey. On islands, mice tend to exhibit a preference for invertebrates that are slow-moving and relatively large. On Midway Atoll NWR, we hypothesize that mice likely prey upon large, ground-dwelling insects, such as Blattaria (cockroaches) and Coleoptera (beetles).
                        </p>
                        <a
                            href="https://www.researchgate.net/publication/350824321_Fly_on_the_wall_comparing_arthropod_communities_between_islands_with_and_without_house_mice_Mus_musculus"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="mt-4 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Learn More
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>



            {/* Section 5: Image on the Right and Description on the Left */}
            <section className=" bg-gray-700 py-16 px-8 lg:px-32 flex flex-col lg:flex-row-reverse items-center lg:space-x-16 space-y-8 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                    <img
                        src={section5Image}
                        alt="NGS Open Explorer"
                        className="rounded-lg shadow-lg w-full mb-8 lg:mr-20" // Added margin-bottom for spacing
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-gray-800 dark:text-gray-100">
                    <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left">
                        Follow Us!
                    </h2>
                    <p className="text-lg leading-relaxed text-justify mb-6">
                        Check out our National Geographic Field Notes page for the latest updates on research and ecological monitoring out on Midway Atoll NWR!
                    </p>
                    <a
                        href="https://fieldnotes.nationalgeographic.org/expedition/midwaymice" // Replace with the actual URL
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                                Go to NGS Open Explorer
                            </span>
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Graduate;
