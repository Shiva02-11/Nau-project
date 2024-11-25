import React from "react";
import { Link } from "react-router-dom";
import Section1 from "../images/sharingscience1.png";
import Section2 from "../images/img-0237.jpeg";
import Section3 from "../images/img-2850.jpeg";
import Section4 from "../images/gopr5441_orig.jpg";

const SharingScience = () => {
    return (
        <div className="space-y-12 p-6 md:p-12">
            <section className="pt-4 flex justify-center">
                <h1 className="text-5xl font-bold text-center text-gray-900">Sharing Science</h1>
            </section>
            {/* Section 1 */}
            <section className="flex justify-center">
                <img src={Section1} alt="Section 1" className="rounded-lg shadow-lg max-w-full" />
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2 text-xl text-gray-900 text-justify">
                    <h2 className="text-5xl font-semibold mb-20">Undergraduate Research</h2>
                    <p>
                        I started on the road to science as an undergraduate student, and I love engaging undergraduate students in my research.<br /><br />
                        I currently do not have any ongoing projects for which I may need help from undergraduate students. Feel free to email me a cover letter and resume if you are interested in future opportunities!
                    </p>
                    <div className="text-center mt-10">
                        <a
                            href="mailto:ana.miller-ter-kuile@nau.edu"
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Email Me
                            </span>
                        </a>
                    </div>
                </div>
                <img src={Section2} alt="Section 2" className="md:w-1/2 rounded-lg shadow-lg" />
            </section>


            {/* Section 3 */}
            <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                <img src={Section3} alt="Section 3" className="md:w-1/2 rounded-lg shadow-lg" />
                <div className="md:w-1/2 text-xl text-gray-900 text-justify">
                    <h2 className="text-3xl font-semibold mb-4">SEEDS</h2>
                    <p>
                        SEEDS (Strategies for Ecology Education, Diversity, and Sustainability) is an group founded through the Ecological Society of America (ESA). The UCSB SEEDS chapter aims to get undergraduates involved in ecology through research, outreach, and interactions with faculty and graduate students.
                    </p>
                    <div className="text-center mt-4">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                More About UCSB SEEDS
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="md:w-1/2 text-xl text-gray-900 text-justify">
                    <h2 className="text-3xl font-semibold mb-4">Conservation and Management</h2>
                    <p>
                        I spent a few years before graduate school working at an environmental non-profit, and still work with non-profits and government agencies to apply new science in conservation and management. I'm currently helping Island Conservation and researchers at Northern Illinois University use next generation DNA sequencing to determine the diets of invasive house mice on Midway Atoll. They will use this information to inform eradication efforts and measure management outcomes in Midway's plant and animal communities.
                    </p>
                    <div className="text-center mt-4">
                        <Link to="/home">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Learn About this Project
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={Section4} alt="Section 4" className="md:w-1/2 rounded-lg shadow-lg" />
            </section>

            {/* Section 5 */}
            <section className=" text-justify space-y-4 text-xl text-gray-900 ">
                <h2 className="text-3xl font-semibold">Data Sharing and Reproducible Science</h2>
                <p>
                    For science transparency and for more impactful conservation, I aim to share data, analyses, and methods for all my work. You can find code, data, and methods on my GitHub!
                </p>
                <div className="text-center">
                    <a
                        href="https://github.com/anamtk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                anamtk on GitHub
                            </span>
                        </button>
                    </a>
                </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 text-xl text-gray-900 text-justify">
                <h2 className="text-3xl font-semibold">Statistics and Programming for Ecologists</h2>
                <p>
                    I continue to lead workshops on using computer programming and statistics in ecology! I've led several workshops on generalized linear models in R and on programming in R for ecologists.
                </p>
                <div className="text-center">
                    <a
                        href="https://hlowman.github.io/ucsb_r_workshop/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Programming in R
                            </span>
                        </button>

                    </a>

                    <a
                        href="https://anamtk.github.io/GLM_tutorials/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                GLM in R Tutorials
                            </span>
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SharingScience;
