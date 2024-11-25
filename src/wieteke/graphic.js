import React from 'react';
import image1 from './images/graphic1.png'
import image2 from './images/graphic2.png'

const Graphic = () => {
    return (
        <div className="bg-gradient-to-b bg-gray-800 min-h-screen">
            <main className="container mx-auto p-8 md:p-16 text-white">
                {/* Page Header */}
                <h2 className="text-center text-4xl font-bold mb-6">Graphic Design</h2>

                {/* Introductory Block */}
                <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg mb-10">
                    <blockquote className="font-semibold text-lg text-white text-center">
                        Plant identification materials and guides for the U.S. Fish and Wildlife Service
                    </blockquote>
                </div>
                <p className="text-white mb-8 leading-relaxed text-justify">
                    As an AmeriCorps member, I developed a 224-page identification book for all native and the most common non-native and invasive plant species found on Midway Atoll National Wildlife Refuge, including botanical descriptions, photographs of plants in different phenological stages, and general information about species occurrence and abundance across the Refuge over time. This document is used as the main guide for plant identification on the Refuge as well as a reference for vegetation monitoring.                </p>

                {/* Image Section */}
                <div className="flex justify-center mb-12">
                    <img
                        src="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/plant-book-cover.png"
                        alt="Plant Book Cover"
                        className="rounded-lg shadow-lg max-w-xs md:max-w-md"
                    />
                </div>

                {/* Section 1 */}
                <div className="mb-12 text-white">
                    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg mb-10">
                        <h3 className=" text-white text-center text-2xl font-semibold">
                            Non-profit communications and federal agency partnerships
                        </h3>
                    </div>
                    <p className="text-white leading-loose text-justify">
                        As a board member with the non-profit{' '}
                        <a
                            href="http://www.friendsofmidway.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Friends of Midway Atoll NWR
                        </a>
                        , I aid with communications and public awareness through creating visually-rich pieces that both engage and educate readers, such as the twice-yearly <em>Gooney Gazette II</em>, which highlights news, information, and events on Midway Atoll NWR. Other recent newsletters that I created (2015–2019) can be found{' '}
                        <a
                            href="https://friendsofmidway.org/get-involved/learn/gooney-gazette-ii-archive/" // Replace with the actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            here
                        </a>
                        . I also work with local Boise area businesses and organizations by creating a variety of hard-copy and online customized, unique, and audience-specific communications materials (written and graphic design). My graphic design and freelance work also includes background research and/or analyses, including policy, historical, ecological, and data analyses depending on project needs. For a recent indoor rock-climbing event held at Boise's{' '}
                        <a
                            href="https://www.urbanascent.com/" // Replace with the actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Urban Ascent
                        </a>{' '}
                        benefitting the{' '}
                        <a
                            href="https://www.accessfund.org/" // Replace with the actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Access Fund
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://www.fs.fed.us/visit/bears-ears-national-monument" // Replace with the actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Bears Ears National Monument
                        </a>{' '}
                        awareness efforts, I created a variety of educational materials (see sample below).
                    </p>

                    {/* PDF Viewer */}
                    <iframe
                        src="/bears_ears_timeline.pdf" // Replace with your actual PDF file path
                        className="w-full h-[90vh] border rounded-lg shadow-lg"
                        title="PDF Viewer"
                    ></iframe>
                </div>

                {/* Section 2 */}
                <div className="mb-12">
                    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg mb-10">
                        <h3 className="text-center text-2xl font-semibold">
                            Communicating and illustrating concepts of ecology
                        </h3>
                    </div>
                    <p className="text-white leading-relaxed mb-4">
                        Inspired by the art of Charley Harper, I am a self-taught (and constantly learning!) graphic designer with a passion to illustrate and explain scientific concepts, such as soundscape ecology, to the public through outreach and educational materials.
                    </p>
                    {/* PDF Viewer */}
                    <iframe
                        src="/soundscape_ecology_infographic_final.pdf" // Replace with your actual PDF file path
                        className="w-full h-[90vh] border rounded-lg shadow-lg"
                        title="PDF Viewer"
                    ></iframe>
                </div>


                {/* Section 3 */}
                <div className="mb-12">
                    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg mb-10">
                        <h3 className="text-center text-2xl font-semibold">
                            Public education and awareness of sustainable practices
                        </h3>
                    </div>
                    <p className="text-white leading-relaxed">
                        I have also assisted on other projects , specifically creating signage to streamline efforts related to sustainable lifestyles. The examples below are part of a sustainability initiative in addressing composting and recycling on Midway Atoll NWR.                    </p>
                </div>

                {/* Sustainability Images */}
                <div className="flex justify-center mb-12">
                    <img
                        src={image1}
                        alt="Sustainability Signage"
                        className="rounded-lg shadow-lg max-w-xs md:max-w-md"
                    />
                    <img
                        src={image2}
                        alt="Sustainability Signage"
                        className="rounded-lg shadow-lg max-w-xs md:max-w-md"
                    />
                </div>
            </main>
        </div>
    );
};

export default Graphic;
