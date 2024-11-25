import React from 'react';
import image1 from './images/sustainability1.png';
import image2 from './images/sustainability2.png';

const Sustainability = () => {
    return (
        <div className="bg-gray-800 text-white">


            <main className="container mx-auto py-20 bg-gray-800 text-white text-justify">
                <section className="bg-cover bg-center h-20" style={{ backgroundImage: "url('/uploads/2/6/3/4/26343808/background-images/125439170.jpg')" }}>
                    <div className="flex items-center justify-center h-full">
                    <h2 className="text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-10">
                    Sustainability
                            </h2>
                    </div>
                </section>

                <div className="bg-gray-900 text-gray-300 p-5 rounded-lg shadow-lg mb-10">
                    <blockquote className="italic text-lg text-white text-center">
                        <br />
                        <p className="text-xl italic">"Sustainable development is the kind of development that meets the needs of the present without compromising the ability of future generations to meet their own needs."</p>
                        <footer className="text-sm text-right text-white">— Brundtland Commission 1987</footer>
                    </blockquote>
                </div>

                <div className="mt-8 text-white">
                    <p>Since my freshman year at the University of Idaho, I worked with the UI Sustainability Center to create an active campus culture dedicated to addressing sustainability-related issues. As a freshman, I applied for and received a $3,000 UISC student-led grant to construct a semi-permanent hoop house for use on the University of Idaho’s organic farm managed by the student organization, Soil Stewards, to grow organic produce and sell to the University of Idaho’s campus dining provider for use in student meals on campus. During my sophomore and junior year, I managed the UISC student-led grant program and initiated several new sustainability projects around campus, including:</p>
                    <ul className="list-disc list-inside mt-4">
                        <li>Coordinating the installation of a water bottle refill stations on the U-Idaho campus,</li>
                        <li>Planning and leading Sustainable Cooking Classes (“Good Eatings”) for students living in various residence halls across the U-Idaho campus,</li>
                        <li>Developing and hosting the UIdeas Symposium, an evening of inspirational and insightful presentations focused on sustainability by various U-Idaho faculty,</li>
                        <li>Working with Ink-O-Dem to develop a sustainable system of printer cartridge refills for students, faculty and staff on campus.</li>
                    </ul>
                    <p className="mt-4">As a senior, I became Director of the UISC and declared the 2013-2014 academic year as the "Year of Food." The majority of UISC events, programs, and volunteer opportunities focused on educating students about local food systems of the Palouse, engaging them in hands-on opportunities to participate in food systems, and empowering students to make policy change on campus to increase the procurement of regional and local food sources. In recognition of my work dedicated to sustainability, I received the Udall Scholarship in 2013 and was honored by the Moscow City Council with the Earth Day Award in 2014. I am incredibly grateful for the opportunities that I have experienced working through the UISC; sustainability has always been central to my life and the UISC gave me the support to share my passion with students, faculty, and staff.</p>
                    <p className="mt-4"><a href="http://www.udall.gov/OurPrograms/Scholarship/spotlights/WietekeHolthuijzen.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-500">Regardless of where I go in life, sustainability will be a part of it!</a ></p>
                    <p className="mt-4">Curious about current projects at the UISC and sustainability efforts at the U-Idaho Campus? Want to learn more about the Udall Scholarship? Read below!</p>
                </div>

                <div className="mt-8 flex items-center space-x-6">
                    <img
                        src={image1}
                        alt="Sustainability Project"
                        className="w-48 h-48 rounded-lg object-cover"
                    />
                    <div>
                        <strong>
                            <a
                                href="http://www.uidaho.edu/community-connections/sustainability-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500"
                            >
                                University of Idaho Sustainability Center (UISC)
                            </a>
                        </strong>
                        <p className="text-white mt-2">
                            Sustainability involves reorganizing our life support systems; climate,
                            energy, biodiversity, food, consumerism and consumption, waste,
                            transportation, and built environment. We do this through projects that
                            reduce our environmental footprint and increase participation and
                            collaboration among students, faculty, staff, and community members in
                            addressing sustainability-related issues. A student-led and student-funded
                            organization, the Sustainability Center supports efforts to create an
                            active culture of sustainability and we are committed to developing and
                            maintaining healthful, educational living environments while fully
                            integrating sustainable practices at the University of Idaho and in the
                            communities where we operate.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex items-center space-x-6">
                    <img
                        src={image2}
                        alt="Udall Foundation"
                        className="w-48 h-48 rounded-lg object-cover"
                    />
                    <div>
                        <strong>
                            <a href="http://udall.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                Udall Foundation
                            </a>
                        </strong>
                        <p className="text-white mt-2">
                            The Udall Foundation awards 50 scholarships of up to $5,000 to sophomore
                            and junior level college students committed to careers related to the
                            environment, tribal public policy, or Native American health care. In
                            2013, I was chosen from 488 eligible applicants from 49 states by a
                            14-member independent review committee on the basis of my commitment to
                            the environment; leadership potential; academic achievement; and record of
                            public service.
                        </p>
                    </div>
                </div>

            </main>


        </div>
    );
};

export default Sustainability;