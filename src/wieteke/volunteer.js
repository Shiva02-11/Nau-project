import React from 'react';
import image1 from './images/volunteer1.jpg';

const Volunteer = () => {
    return (
        <div className="bg-cover bg-no-repeat min-h-screen bg-gray-800 text-gray-200">
            <div className="container mx-auto py-16 px-5 sm:px-10 md:px-24">
                {/* Title */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-10">
                    Volunteer
                </h2>
                {/* Quote Section */}
                <div className="bg-gray-900 text-gray-300 p-5 rounded-lg shadow-lg mb-10">
                    <blockquote className="text-center">
                        <p className="italic text-lg">
                            "It's the little things that citizens do. That's what will make the difference."
                        </p>
                        <em className="block text-sm mt-2">- Wangari Maathai</em>
                    </blockquote>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-16 text-justify">
                    {/* Text Section */}
                    <div className="lg:w-2/3 space-y-5 ">
                        <p className='text-justify'>
                            Through my experiences in the field, I hope to share my enthusiasm for science with a wide variety of audiences and encourage them to discover the flora and fauna wherever they live. I enjoy a variety of volunteer work, from trail maintenance to public outreach and education. Below is a summary of my current volunteer efforts.
                        </p>

                        <section>
                            <h3 className="text-white font-bold mb-2">
                                <a
                                    href="http://www.friendsofmidway.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Friends of Midway Atoll NWR (FOMA)
                                </a>
                                , Board Director (2015-present)
                            </h3>
                            <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                                <li >Supporting Midway Atoll National Wildlife Refuge in its efforts to preserve, protect, and restore its biological diversity and historical resources.<br />
                                    Aiding with operations and projects on Midway Atoll NWR via creating communications materials, writing, submitting, and executing grants that relate to priority projects and programs on the Refuge and/or increasing capacity and outreach via the Friends group, and assisting with conservation efforts as initiated through the Refuge.</li>
                                <li>Developing FOMA's Education Committee to better engage with the public, share science and research from Midway Atoll NWR, and increase public awareness and understanding of Midway Atoll NWR's history, ecology, and cultural significance </li>
                                <li>Supporting communications work and social media presence (Facebook, Instagram, etc.) to maintain connection with Midway Atoll NWR supporters and followers. </li>
                                <li>Maintaining records of members, donation history, and other key aspects of data collection critical to non-profit organization management.</li>
                            </ul>
                        </section>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/3 flex-shrink-0 text-justify">
                        <img
                            src={image1}
                            alt="Building trail at PCEI"
                            className="rounded-lg shadow-lg border border-gray-300"
                        />
                        <p className="text-sm text-gray-400 text-center mt-2">Building trail at PCEI.</p>
                    </div>
                </div>

                {/* Additional Volunteer Sections */}
                <div className="space-y-10">
                    {/* Pacific Seabird Group */}
                    <section>
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="https://pacificseabirdgroup.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Pacific Seabird Group
                            </a>
                            , Communications Committee (Co-Coordinator), Corresponding Members Committee (Co-Coordinator), Equity, Inclusion, and Diversity Committee
                        </h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                            <li>Co-coordinate the Communications Committee to ensure news, information, and updates are shared with PSG members and the broader seabird research community; post jobs, academic openings, and volunteer opportunities; facilitate organization of the Annual Meeting as well as Executive Council and Committee meetings; support social media (Facebook, Instagram, and Twitter) efforts and create a more inclusive and diverse space for seabird students, early career scientists, and researchers.</li>
                            <li>Update content for PSG website, develop and compile student and early career scientist resources, as well as field/lab safety and harassment resources.</li>
                            <li>Co-coordinate the Corresponding Members Committee to foster involvement of seabird researchers and conservationists in developing countries or those working in regions with little or no institutional support for seabird conservation.</li>
                            <li>Recruit and retain PSG members throughout the Pacific, increase diversity of PSG membership, support and facilitate greater representation of BIPOC students, researchers, and scientists through PSG membership, and develop support systems and mentorship for the broader seabird research community.</li>

                        </ul>
                    </section>

                    {/* World Seabird Union */}
                    <section>
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="https://www.seabirds.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                World Seabird Union
                            </a>
                            , Website Content Editor (2019-2021)
                        </h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                            <li>Main content editor for seabirds.net and active member of the Communications subcommittee.</li>
                            <li>Update webpages with information  regarding upcoming seabird conferences; curate databases for the Seabird Information Network (S. I. N.); catalog useful, peer-reviewed papers for plastics research related to seabirds.
                            </li>
                        </ul>
                    </section>

                    {/* Wilson Journal of Ornithology */}
                    <section>
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="http://wjoonline.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Wilson Journal of Ornithology
                            </a>
                            , French Translator (2017-present)
                        </h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                            <li>Translating titles, abstracts, and key words of peer-reviewed manuscripts, articles, and other documents submitted to the Wilson Journal of Ornithology to standard French and utilizing the AOU checklist and Avibase for proper bird names.</li>
                        </ul>
                    </section>

                    {/* Peer Review Referee */}
                    <section className="mt-10">
                        <h3 className="text-white font-bold mb-2">Peer Review Referee:</h3>
                        <p className="text-gray-200">
                            <em>
                                <a href="https://environmentalevidencejournal.biomedcentral.com/" className="underline">Environmental Evidence</a>,{' '}
                                <a href="https://onlinelibrary.wiley.com/journal/14429993" className="underline">Austral Ecology</a>,{' '}
                                <a href="https://www.bioacoustics.info/" className="underline">Bioacoustics</a>,{' '}
                                <a href="https://www.cambridge.org/core/journals/environmental-conservation" className="underline">Environmental Conservation</a>,{' '}
                                <a href="https://onlinelibrary.wiley.com/journal/17494877" className="underline">Integrative Zoology</a>,{' '}
                                <a href="https://link.springer.com/journal/10336" className="underline">Journal of Ornithology</a>,{' '}
                                <a href="https://www.sciencedirect.com/journal/perspectives-in-ecology-and-conservation" className="underline">Perspectives in Ecology and Conservation</a>,{' '}
                                <a href="https://meridian.allenpress.com/wjo" className="underline">Wilson Journal of Ornithology</a>
                            </em>
                        </p>
                    </section>

                    {/* University of Idaho Sustainability Center */}
                    <section className="mt-10">
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="https://www.uidaho.edu/community-connections/office-of-community-partnerships/sustainability-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                University of Idaho Sustainability Center (UISC)
                            </a>
                            , Moscow, Idaho.
                        </h3>
                        <p className="text-gray-200">Volunteer activities included the following:</p>
                        <ul className="list-disc list-inside text-gray-200 ml-4">
                            <li>
                                Vandal Football GameDay Tailgate Recycling: aided students and community during the tailgate to correctly sort and dispose of their recyclables.
                            </li>
                            <li>Food and Farm Composting Volunteer: helped students properly sort their food waste.</li>
                            <li>
                                “Get Rooted” Volunteer Activity: planted over 100 native species on campus to help increase biodiversity and stabilize soil.
                            </li>
                            <li>
                                UISC Recycling Petition Signing Days Volunteer: encouraged students and staff to support the initiative for a permanent, campus-wide recycling program.
                            </li>
                        </ul>
                    </section>

                    {/* Palouse-Clearwater Environmental Institute */}
                    <section className="mt-10">
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="https://pcei.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Palouse-Clearwater Environmental Institute (PCEI)
                            </a>
                            , Moscow, Idaho.
                        </h3>
                        <p className="text-gray-200">Volunteer activities included the following:</p>
                        <ul className="list-disc list-inside text-gray-200 ml-4">
                            <li>Excavating ground for installation of benches for children education area.</li>
                            <li>Leading student trail crews and building new trail as well as maintaining existing trail.</li>
                        </ul>
                    </section>

                    {/* The Peregrine Fund World Center for Birds of Prey */}
                    <section className="mt-10">
                        <h3 className="text-white font-bold mb-2">
                            <a
                                href="https://peregrinefund.org/visit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                The Peregrine Fund World Center for Birds of Prey
                            </a>
                            , Boise, Idaho.
                        </h3>
                        <p className="text-gray-200">
                            Volunteer at gift shop, interpretive center, and various events.
                        </p>
                    </section>


                    {/* Miscellaneous Volunteer Activities */}
                    <section>
                        <h3 className="text-white font-bold mb-2">Miscellaneous Volunteer Activities:</h3>
                        <ul className="list-disc list-inside text-gray-200 space-y-2 text-justify">
                            <li>National History Day Regional and State competition judge.</li>
                            <li>Breakthrough volunteer through United Way.</li>
                            <li>Paint the Town, Boise, Idaho.</li>
                            <li>Rake Up Boise, Idaho.</li>
                            <li>Earthfest Boise, Idaho.</li>
                            <li>Boise Iron Man 70.3 Competition, Idaho.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
