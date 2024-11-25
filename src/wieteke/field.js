import React from "react";
import field1 from "./images/field1.jpg";
import field2 from "./images/field2.jpg";
import field3 from "./images/field3.jpg";
import field4 from "./images/field4.jpg";
import field5 from "./images/field5.jpg";
import field6 from "./images/field6.jpg";
import field7 from "./images/field7.jpg";
import field8 from "./images/field8.jpg";
import field9 from "./images/field9.jpeg";

const Field = () => {
    const images = [
        {
            img: field1,

            title: <u>Tennessee Fellow for Graduate Excellence</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold ">
                            University of Tennessee, Ecology & Evolutionary Biology Department
                            "Global" Island Study
                        </strong>
                        <br />
                        2021 - present
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Collecting house mouse (Mus musculus) hairs from islands on a
                                global scale to trace nutrient and energy flow within and among
                                organisms and ecosystems in order to predict mouse impacts on
                                island ecosystems.
                            </li>
                            <li>
                                Investigating compound-specific isotope analysis (CSIA) methods
                                to predict potential and patterns of seabird depredation by
                                invasive house mice using mouse hair.
                            </li>
                        </ul>
                    </p>
                </>
            ),
        },
        {
            img: field2,
            label: "House mouse (Mus musculus) on Midway Atoll NWR",
            title: <u>NSF Graduate Research Fellow</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            NSF Graduate Research Fellow Northern Illinois University,
                            Biological Sciences Department Midway Atoll National Wildlife
                            Refuge (Papahānaumokuākea Marine National Monument)
                        </strong>
                        <br />
                        2018 - 2021
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Developed detailed and standardized protocols for mouse trapping
                                and sampling (for fecal and hair samples) as well as pre- and
                                post-eradication monitoring activities, including tracking
                                arthropod community composition and abundance, Emerald Beetle
                                (Protaetia pryeri) abundance and emergence trends, as well as
                                Laysan Duck arthropod consumption.
                            </li>

                            <li>
                                Implemented lab procedures for house mouse fecal sample
                                extraction as well as sample preparation for stable isotope
                                analysis (including cleaning, drying, weighing, and packing);
                                created identification materials and data entry sheets for
                                identifying and counting arthropods captured via pitfall traps.
                            </li>
                            <li>
                                Co-developed and tested protocols for next-generation sequencing
                                (NGS) of mouse fecal samples with <a href="https://rrc.uic.edu/cores/genome-research/genome-research-core/" target="_blank" rel="noopener noreferrer" className="text-blue-500"> UIC Genome Research Core </a>for
                                detection of plants and arthropods, as well as qPCR for the
                                presence of Laysan Albatross (Phoebastria immutabilis) and Bonin
                                Petrel (Pterodroma hypoleuca) DNA.
                            </li>
                        </ul>
                    </p>
                </>
            ),
        },
        {
            img: field3,
            label:
                "Laysan Albatross (Phoebastria immutabilis) surrounded by Golden Crownbeard (Verbesina encelioides)",
            title: <u>Invasive Plant Control Specialist</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Kupu (AmeriCorps Conservation Leadership Program) Midway Atoll
                            National Wildlife Refuge (Papahānaumokuākea Marine National
                            Monument)
                        </strong>
                        <br />
                        2016 - 2017
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Conducted vegetation surveys to monitor invasive plant species
                                and mapped incipient weed breakouts; worked with staff to
                                prioritize and coordinate control efforts.
                            </li>

                            <li>
                                Conducted post-control monitoring of past invasive plant control
                                areas to advise Refuge staff on plant response; using precision
                                methods, applied herbicides in sensitive areas.
                            </li>
                            <li>
                                Developed a weed risk assessment specific to the Refuge to
                                prioritize invasive plant species particularly harmful to
                                wildlife and native plant communities; created a comprehensive
                                invasive weed management plan to guide the Refuge’s habitat
                                restoration efforts.
                            </li>
                            <li>
                                Studied and documented phenology of top priority invasive plant
                                species to fine-tune control and eradication strategies.
                            </li>
                            <li>
                                Assisted with invasive plant control data entry and analyses.
                            </li>
                        </ul>
                    </p>
                </>
            ),
        },
        {
            img: field4,
            title: <u>Laysan Duck Volunteer</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            USGS Pacific Island Ecosystems Research Center (Kilauea Field
                            Station, Hawaii)
                        </strong>
                        <br />
                        2015
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Maintained all Laysan Duck data, including datasheets and
                                electronic copies: resight/population surveys, incidental
                                resights, dead/sick duck log, and duck captive care records
                            </li>

                            <li>Confirmed all resight data and edit for analysis</li>
                            <li>
                                Maintained/reorganized photo files; cleaned-up old data files
                                and reorganized systems as needed
                            </li>
                            <li>
                                Assembled Laysan Duck identification, natural history, and
                                history reference materials for other staff/volunteer education;
                                updated protocols for USFWS on Midway Atoll NWR
                            </li>
                        </ul>{" "}
                    </p>
                </>
            ),
        },
        {
            img: field5,
            title: <u>Wildlife Biology and Laysan Duck Volunteer</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Midway Atoll National Wildlife Refuge (Papahānaumokuākea Marine
                            National Monument)
                        </strong>
                        <br />
                        2014 - 2015
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Monitored for incidences of botulism outbreaks among Laysan
                                Ducks and helped to rehabilitate sick ducks, including training
                                in duck handling, gavaging, and other botulism related protocols
                            </li>

                            <li>
                                Resighted bands on Laysan Ducks and participated in duck
                                population surveys to aide with demographic monitoring efforts
                            </li>
                            <li>
                                Conducted demographic work on Laysan and Black-footed Albatross,
                                including reproductive success and adult survival
                            </li>
                            <li>
                                Restored native and appropriate habitat through native plant
                                propagation and outplanting, removal of invasive plants both by
                                hand and through chemical application of herbicide
                            </li>
                            <li>
                                Developed a 170-page identification book for all native and the
                                most common non-native and invasive plant species found on
                                Midway Atoll NWR
                            </li>
                            <li>
                                Entered albatross demographic data and built/utilized templates
                                in Microsoft Office (Word, Excel) for data
                                management/organization
                            </li>
                            <li>
                                Drafted a sustainability policy for Midway Atoll NWR and
                                initiated several sustainability projects, notably streamlining
                                recycling efforts on the Refuge and developing a basic
                                composting program to create needed potting soil amendments for
                                native plant propagation
                            </li>
                            <li>
                                Aided with various other work on Midway Atoll NWR, including
                                marine debris removal and grounds maintenance
                            </li>
                        </ul>{" "}
                    </p>
                </>
            ),
        },
        {
            img: field6,
            title: <u>Mist-netter and Target-netter</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Montana Wildlife Cooperative Research Unit (Arizona)
                        </strong>
                        <br />
                        2014
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Captured and banded various adult passerine species (ground
                                nesters, shrub nesters, cavity nesters) during nestling and
                                fledgling stages of offspring
                            </li>
                            <li>
                                Successfully performed Doubly-Labeled Water technique on adult
                                passerines species
                            </li>
                            <li>
                                Bled both adult and nestling passerine species and processed
                                blood samples (separated blood from plasma, sealed microtubes,
                                etc.)
                            </li>
                            <li>
                                Handled and measured nestlings (including tarsus length, wing
                                chord, P8 broken, tail length, weight)
                            </li>
                            <li>
                                Conducted vegetation surveys, which included species
                                identification, estimating ground cover and average canopy
                                height, measuring litter depth, counting stems and trees, and
                                making other measurements using a densiometer, clinometer, and
                                compass
                            </li>
                            <li>
                                Further refined passive netting and target netting techniques by
                                using male playback or alarm calls, flushing incubating females,
                                and setting nets in known flight paths
                            </li>
                        </ul>
                        {""}
                    </p>
                </>
            ),
        },
        {
            img: field7,
            title: <u>Summer Field Assistant</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Cary Institute of Ecosystem Studies (New York)
                        </strong>
                        <br />
                        2013
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Found and monitored veery nests for study, including data entry
                            </li>
                            <li>
                                Able to age various ground-nesting bird nestlings from hatch
                                date to fledge date
                            </li>
                            <li>
                                Analyzed nest camera data for predation events and general
                                nestling behavior and parental care
                            </li>
                            <li>
                                Further refined skills necessary to mist-net and band birds
                                (included tarsus length, wing length, weight, identification of
                                species, sex determination, age determination)
                            </li>
                            <li>Set-up and executed recordings of the avian dusk chorus</li>
                        </ul>
                        {""}
                    </p>
                </>
            ),
        },
        {
            img: field8,
            title: <u>Bird Research Intern</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Missouri Ozark Forest Ecosystem Project (Missouri)
                        </strong>
                        <br />
                        2012
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Learned to identify over forty birds (specifically Neotropical
                                migrant passerines) by sight and sound
                            </li>
                            <li>
                                Trained to spot map the locations of breeding birds and conduct
                                point counts
                            </li>
                            <li>
                                Able to navigate through Ozark Mountain Forest and Missouri
                                Conservation area by use of topographic maps, compass, and GPS
                            </li>
                            <li>Found and monitored focal species’ nests for MOFEP study</li>
                            <li>
                                Gained skills necessary to mist-net and band birds (included
                                tarsus length, wing length, weight, identification of species,
                                sex determination, age determination){" "}
                            </li>
                        </ul>
                        {""}
                    </p>
                </>
            ),
        },
        {
            img: field9,
            title: <u>Researcher</u>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        <strong className="font-bold">
                            Field Inquire Research Experience (FIRE Up!) Program (Idaho)
                        </strong>
                        <br />
                        2008
                        <br />
                        <ul className="list-disc pl-6">
                            <li>
                                Completed an independent research project analyzing restoration
                                efforts of a degraded stream bed (Dry Creek) through cross
                                sections, vegetation cover and bank stability
                            </li>
                            <li>
                                Collected data for the Homestead Bitterbrush/Sagebrush Survey to
                                report on the success rate of the replanting and reestablishing
                                of bitterbrush in areas burned by the Homestead Fire
                            </li>
                            <li>
                                Established baseline data for the restoration efforts on Dry
                                Creek using stream vegetation, bank stability, and cross section
                                as indicators
                            </li>
                            <li>
                                Collected data using Firemon Survey technology concerning
                                vegetation coverage and species present in West Antelope, Owyhee
                                Mountain Range
                            </li>
                            <li>
                                Prepared fire safety recommendations based upon collected
                                Redzone Survey data in Oasis and Tipanuk communities to assess
                                the quality and defensible space of various homes and buildings{" "}
                            </li>
                        </ul>
                        {""}
                    </p>
                </>
            ),
        },
        // Add the remaining 6 images similarly
    ];

    return (
        <div>
            {/* Section 1 */}
            <div
                className="bg-gray-700 relative h-[100vh] bg-cover bg-center flex items-center "
                style={{ backgroundImage: "url('your-background-image-url.jpg')" }}
            >
                <div className="text-left px-8 max-w-md ">
                    <h1 className="text-4xl font-bold  text-white mb-4 ">
                        Field and Lab Work
                    </h1>
                    <p className="text-lg text-white text-justify">
                        If you love something, you have a duty to protect it; but to love
                        something, you must understand it first. Simply put, birds are my
                        love. However, birds are simply one facet of an intricate ecosystem;
                        to understand their particular role, it means taking the time to
                        holistically comprehend their habitat and, more importantly, human
                        interactions with and within that given area. Field work has given
                        me the opportunity to apply science learned in the classroom in a
                        meaningful way and to give back to the natural environment.
                    </p>
                </div>
            </div>

            {/* Section 2 */}

            <div className="bg-gray-600 text-white grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-1">
                {images.map((image, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex flex-col items-center">
                            <img
                                src={image.img} // Corrected to 'src'
                                alt={`Image ${index + 1}`}
                                className="w-64 h-64 object-cover rounded-lg"
                            />

                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2">{image.title}</h2>{" "}
                            {/* Use image.title */}
                            <p className="text-black-700 ">{image.description}</p>{" "}
                            {/* Use image.description */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Field;

