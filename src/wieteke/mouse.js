import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import mapsIcon from './images/mapsIcon.jpg'
import image1 from "./images/mouse1.png";
import image2 from "./images/mouse2.jpg";
import image3 from "./images/holly-jones.jpg";
import image4 from "./images/kelton.jpg";
import image5 from "./images/michael.jpg";
import image6 from "./images/daniel.jpg";

const Mouse = () => {
    return (
        <div className="bg-gray-700 text-white">
            {/* Section 1: Hero */}
            <section className="h-screen flex flex-col justify-center items-center p-6 bg-gray-700">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center">
                    Mouse Trophic Position on Islands
                </h1>
            </section>
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Introduction */}
                <section className="mb-12 text-justify">
                    <h2 className="text-4xl italic text-center mb-4">
                        Investigating what role house mice play in island ecosystem food webs
                    </h2>
                    <p className="leading-relaxed text-xl">
                        The house mouse (<em>Mus musculus</em>), after humans, is the most
                        ubiquitous mammal on the globe, and has adapted to a wide range of
                        environments, colonizing every continent except Antarctica.
                        Plasticity in diet is one of the key adaptations that allows house
                        mice to survive and thrive across various regions and climates.
                        <span className="hidden sm:inline">
                            On islands, mice have exhibited surprising prey-switching
                            behavior, in some cases attacking and depredating breeding
                            seabirds that are magnitudes larger than the mice themselves.
                            Despite increasing observations of seabird depredations by house
                            mice, it remains unknown if seabird consumption constitutes an
                            incidental or foundational component of mouse diet on islands—a
                            critical knowledge gap in mouse behavior and ecology.
                        </span>
                    </p>
                </section>

                <section className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-1">
                        <img
                            src={image1}
                            alt="Mouse preying on Laysan Albatross"
                            className="w-full h-[500px] object-cover rounded shadow-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <img
                            src={image2}
                            alt="Mouse preying on seabirds"
                            className="w-full h-[500px] object-cover rounded shadow-lg"
                        />
                    </div>
                </section>

                {/* para section */}
                <section className="mb-12 text-justify">
                    <p className="leading-relaxed text-xl">
                        The novel behavior of seasonal prey-switching to island avifauna by house mice often occurs when other preferred food sources, such as arthropods and seeds, are limited. In particular, this prey-switching behavior has only been documented when mice are the sole (introduced) predatory mammal in island ecosystems. Under these circumstances, the species’ effects on insular food webs may be amplified as house mice shift to a predatory behavior more commonly associated with Rattus spp. However, when house mice co-occur with Rattus spp., evidence suggests that these rodent species collectively participate in niche partitioning. Thus, prey-switching by mice could be very important in top-down control of island ecosystems, given that invasive rodents are typically the only vertebrate predators in these ecosystems. Moreover, with the increasing use of rodent eradications to restore island ecosystems, predicting both the nature and magnitude of direct and indirect ecosystem effects that follow eradications is critical. For example, if house mice effectively operate as a top predator on islands, their eradication could result in a sudden and unanticipated release of prey species, which could be challenging if mice were also controlling other problematic species (e.g., invasive plants or agricultural pests). Few studies have examined the diet and trophic niche of house mice on island ecosystems; consequently, the broader island ecosystem effects of this species are largely unknown.
                    </p>
                </section>
                {/* Paragraph Section */}
                <section className="mb-12 text-justify">
                    <p className="leading-relaxed text-xl">
                        The novel behavior of seasonal prey-switching to island avifauna by house mice often occurs when other preferred food sources, such as arthropods and seeds, are limited. In particular, this prey-switching behavior has only been documented when mice are the sole (introduced) predatory mammal in island ecosystems. Under these circumstances, the species’ effects on insular food webs may be amplified as house mice shift to a predatory behavior more commonly associated with Rattus spp. However, when house mice co-occur with Rattus spp., evidence suggests that these rodent species collectively participate in niche partitioning. Thus, prey-switching by mice could be very important in top-down control of island ecosystems, given that invasive rodents are typically the only vertebrate predators in these ecosystems. Moreover, with the increasing use of rodent eradications to restore island ecosystems, predicting both the nature and magnitude of direct and indirect ecosystem effects that follow eradications is critical. For example, if house mice effectively operate as a top predator on islands, their eradication could result in a sudden and unanticipated release of prey species, which could be challenging if mice were also controlling other problematic species (e.g., invasive plants or agricultural pests). Few studies have examined the diet and trophic niche of house mice on island ecosystems; consequently, the broader island ecosystem effects of this species are largely unknown.
                    </p>
                </section>

                {/* Our Objective and Methods Section */}
                <section className="mb-12 text-justify">
                    <h2 className="text-2xl italic font-bold mb-4">Our Objective</h2>
                    <p className="leading-relaxed italic text-xl mb-6">
                        Conduct a global study of islands to investigate the trophic position of invasive house mice and understand the broader effects of house mice on insular food webs.
                    </p>

                    <h2 className="text-2xl italic font-bold mb-4">Methods</h2>
                    <p className="leading-relaxed italic text-xl">
                        Use amino-acid compound specific isotope analysis (CSIA) and bulk tissue stable isotope analysis in tandem of house mouse hairs to infer trophic position and diet.
                    </p>
                </section>


                {/* Team Section */}
                <section className="mb-12 ">
                    <h2 className="text-center text-3xl font-semibold mb-8">Meet Our Team</h2>
                    <p className="text-center mb-4 text-xl">Our project involves the participation of numerous university labs, research groups, and non-profit organizations. </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="text-center bg-gray-800 p-4 rounded-lg shadow-lg"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p>
                                    {member.position}
                                    <br />
                                    {member.university}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Collaboration Section */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-semibold mb-4">
                        Get on the Map – Join Our Growing List of Collaborators!
                    </h2>
                    <p className="mb-4 text-xl">
                        Join our project! If you work on islands with house mice (
                        <em>Mus musculus</em>) as the only invasive rodent present, let us
                        know and fill out the form below! We hope to obtain at least 10
                        house mouse hair samples per island in this study.
                    </p>
                    Download the house mouse hair collection protocol <a
                        href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/holthuijzen_iacuc_appendix_b.pdf"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        here.
                    </a><br /><br />
                    <p>As a note: Participation in this project is voluntary and we do not assume responsibility for completing the needed permits, licenses, or other paperwork that may be required by your respective institutions. We will assist you in preparing and shipping the house mouse hair samples.</p>
                </section>

                {/* Map Section */}
                <section id="map" className="mb-12">
                    <div className="w-full h-[500px]">
                        <MapContainer center={[35.18046129367325, -111.6540336048328]} zoom={5} scrollWheelZoom={false} className="w-full h-full">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {/* Example Marker */}
                            <Marker position={[35.18046129367325, -111.6540336048328]} icon={new Icon({ iconUrl: mapsIcon, iconSize: [32, 32] })}>
                                <Popup>
                                    <span>Our Collaboration Location</span>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </section>

                {/* Contact Form */}
                <section>
                    <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold text-center mb-4">
                            Interested in participating? Message us here!
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-2 rounded border border-gray-400 bg-gray-900 focus:ring focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-2 rounded border border-gray-400 bg-gray-900 focus:ring focus:ring-blue-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 rounded border border-gray-400 bg-gray-900 focus:ring focus:ring-blue-500"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                className="p-2 rounded border border-gray-400 bg-gray-900 focus:ring focus:ring-blue-500"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

const teamMembers = [
    {
        name: "Holly P. Jones",
        position: "Biological Sciences",
        university: "Northern Illinois University",
        image: image3,
    },
    {
        name: "Kelton McMahon",
        position: "Biological Oceanography",
        university: "University of Rhode Island",
        image: image4,
    },
    {
        name: "Michael Polito",
        position: "Oceanography and Coastal Sciences",
        university: "Louisiana State University",
        image: image5,
    },
    {
        name: "Daniel Simberloff",
        position: "Ecology and Evolutionary Biology",
        university: "University of Tennessee",
        image: image6,
    },
];

export default Mouse;
