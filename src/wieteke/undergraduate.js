import React from "react";
import pdfImage from "../images/pdfImage.png";
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.gif'

const Undergraduate = () => {
    const images = [
        {
            img: image1,

            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/senior_thesis_final_report.pdf">
                    <u>
                        Stranger Danger: Interspecific Vocal Responses of Selected Diurnal
                        Passerines to Indirect Predator Alarm Calls{" "}
                    </u>
                </a>
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        Senior Thesis ENVS 497
                        <br />
                        This study examines how an avian community as a whole and
                        specifically three common diurnal passerines, the veery (Catharus
                        fuscescens), wood thrush (Hylocichla mustelina), and scarlet tanager
                        (Piranga olivacea), respond to indirect predator alarm calls of the
                        eastern tufted titmouse (Baeolophus bicolor) around dusk.<br />
                        <section className="flex items-center space-x-4 mt-8">
                            {/* PDF icon and text that opens the PDF in a new tab */}
                            <a
                                href={`${process.env.PUBLIC_URL}/senior_thesis_poster.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4"
                            >
                                <img
                                    src={pdfImage}
                                    alt="PDF Icon"
                                    width="36"
                                    height="36"
                                    className="inline-block"
                                />
                                <div className="text-left">
                                    <span className="font-bold text-lg">senior_thesis_poster.pdf</span>
                                </div>

                            </a>

                            {/* Download link */}
                            <a
                                href={`${process.env.PUBLIC_URL}/senior_thesis_poster.pdf`}
                                download
                                className="text-blue-500 font-bold ml-4"
                            >
                                Download File
                            </a>
                        </section>
                    </p>
                </>
            ),
        },
        {
            img: image2,
            label: "House mouse (Mus musculus) on Midway Atoll NWR",
            title: (<a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/of_birds_and_brush.pdf">
                <u>
                    Of Birds and Brush: A Case Study of the Juniper Titmouse Baeolophus
                    ridgwayi in the Great Basin
                </u></a>
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        WLF 316 Wildlife Ecology II
                        <br />
                        The purpose of this paper is to (1) identify and examine the threats
                        facing the juniper titmouse, (2) population ecology and dynamics of
                        this species, and (3) provide critique of current management as well
                        as suggestions of better management for this species and the broader
                        avian community of the piñon-juniper woodlands ecosystem.
                    </p>
                </>
            ),
        },
        {
            img: image3,
            label:
                "Laysan Albatross (Phoebastria immutabilis) surrounded by Golden Crownbeard (Verbesina encelioides)",
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/griffon_vultures_and_wind_energy_development_in_spain.pdf">
                    <u>
                        “The Answer, My Friend, is Blowin’ in the Wind...” The Unintended
                        Consequences of Wind Energy: A Case Study of the Griffon Vulture Gyps
                        fulvus in Spain
                    </u></a>
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        WLF 482 Ornithology
                        <br />
                        In Spain, the Griffon Vulture has experienced the highest mortality
                        rates of any bird species affected by wind farms. The aim of this
                        paper is to explore this species' vulnerability to turbine-related
                        death as well as future implications and suggestions for wind energy
                        mitigation in Spain and other nations engaged in wind energy
                        expansion. The predicament of this species highlights the unintended
                        consequences and threats posed by quickly-expanding wind farms that
                        can lead to population declines and local extirpations.
                    </p>
                </>
            ),
        },
        {
            img: image4,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/fatal_fashions_and_caring_actions.pdf"><u>
                    Fatal Fashions and Caring Actions: Florence Merriam Bailey and the
                    Rise of Bird Conservation
                </u></a>

            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        HIST 424 American Environmental History
                        <br />
                        As a budding, young ornithologist, Florence Merriam Bailey
                        (1863-1948) was appalled by the latest fashion trend common among
                        her female friends and soon became involved in the rising bird
                        conservation sentiment. However, bird conservation appealed to only
                        a small, elite fraction of the American public- either the rich
                        upper class or progressive conservationists. Through her writings,
                        Bailey developed an important middle ground that incorporated both
                        scientific arguments for conservation as well as moral and emotional
                        ones, which not only made her oeuvre widely accessible, but in a
                        practical way quietly spread the message of conservation to a much
                        larger audience.
                    </p>
                </>
            ),
        },
        {
            img: image5,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/des_paysan_et_des_alimentations.pdf"><u>
                    Des Paysans et des Alimentations: Comment la Mondialisation Menace
                    l’Identité Culturelle de la France
                </u></a>

            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        FREN 408 French and Francophone Culture
                        <br /> En dépit du fait que la mondialisation ouvre les portes du
                        commerce international et qu’elle permet la circulation plus libre
                        d’idées, de cultures et de traditions globalement, elle rapporte des
                        changements économiques, sociaux et politiques qui causent la perte
                        de traditions et d’articles locaux, surtout l’intégrité de
                        l’alimentation traditionnelle et française qui est sans doute la
                        plus grande partie de l’identité culturelle et de la fierté de la
                        France. Cet exposé examinera et analysera la variété de raisons
                        pourquoi les Français opposent la mondialisation, vu les idées
                        traditionnelles de « terroir » et il comparera l’histoire du paysan
                        ainsi que le développement et l’expansion du commerce global
                        d’agriculture.
                    </p>
                </>
            ),
        },
        {
            img: image6,
            title: (
                `Vector Data Analysis Project: Women in US Congress over Time`
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        GEOG 385 GIS Primer
                        <br /> Over the course of nearly 100 years (since the first woman
                        was elected to Congress) women have witnessed some major,
                        progressive measures both at home and in the workplace (mainly due
                        to the work of the Women’s Liberation Movement). As such we might
                        expect to see an equal increase in women in government over time
                        across the nation. This GIS vector data analysis project seeks to
                        illustrate and determine the change in women in the United States
                        Congress (in the House of Representatives and Senate) per state over
                        time (from 1917- when the first woman served in congress- to the
                        present day). The video of women per state in the House of
                        Representatives over time can be viewed here; another video of women
                        per state in the Senate over time can be viewed{" "}
                        <u>
                            <a href="/https://vimeo.com/93040985">here</a>
                        </u>
                        .
                    </p>
                </>
            ),
        },
        {
            img: image7,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/university_of_idaho_soil_management_guide.pdf"><u>
                    Study Site Soil Properties & Management Plan: A Proposal to the
                    University of Idaho
                </u></a>

            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        SOIL 206 The Soil Ecosystem Lab
                        <br />
                        This semester-long report details various soil-related aspects from
                        data collection and analysis at a 17-acre study site located near
                        U-Idaho's Arboretum as well as a management plan for best future use
                        of the site. Topics covered in this report include a soil profile
                        description of the study site, particle size analysis, soil physical
                        properties (bulk density, porosity, etc.), saturated hydraulic
                        conductivity, soil organism sampling, cation exchange capacity, pH
                        and salt-affected status, and carbon, nitrogen, and nutrient status.
                    </p>
                </>
            ),
        },
        {
            img: image8,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/conservation_payments_to_ecuador.pdf">
                    <u>Conservation Payments to Ecuador: Not a Sustainable Approach</u></a>
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        WLF 440 Conservation Biology <br />
                        Part of a class debate on Yasuni-ITT Initiative, this paper outlines
                        the flaws in the philosophy and structure of this particular
                        initiative. Although the Yasuni-ITT Initiative is unique in that it
                        sought to obtain conservation payments from the international
                        community to preserve parts of the Yasuni National Park in Ecuador,
                        it unfortunately failed due to insufficient international donations
                        and fundamental issues in the framework of the initiative.
                    </p>
                </>
            ),
        },

        {
            img: image9,
            title: <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/international_studies_through_a_coffee_bean.pdf"><u>International Studies Through a Coffee Bean</u></a>,
            description: (
                <>
                    <p className="mb-4 text-justify">
                        IS 299 Independent Study International Studies <br />
                        The coffee plant and its associated roasted seed, commonly called
                        the coffee bean, seems relatively simple. However, coffee is
                        actually quite a complicated crop and is a major part of global
                        trade. In fact, coffee is one of the most traded commodities on the
                        planet and ranks as the second most valuable primary commodity
                        exported by developing countries.
                    </p>
                </>
            ),
        },
        {
            img: image10,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/position_paper_for_the_conference_on_sustainable_development.pdf">
                    <u>
                        Position Paper for the Conference on Sustainable Development (Rio
                        +20): The Green Economy in the Context of Sustainable Development and
                        Poverty Eradication
                    </u>
                </a>
            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        IS 310 The United Nations <br />
                        Representing the delegation from Canada, I summarized how this
                        nation has long been on the forefront of combating climate change
                        and identifies the global shift toward a green economy as a
                        sustainable economic practice that improves the standard of living
                        by protecting human health, conserving the environment, using
                        resources efficiently and advancing long-term economic
                        competitiveness.
                    </p>
                </>
            ),
        },
        {
            img: image11,
            title: (
                <a href="https://wietekeholthuijzen.weebly.com/uploads/2/6/3/4/26343808/om_mani_padme_hum.pdf"><u>Mina and Sage: A Spiritual Journey Through Om Mani Padme Hum</u></a>

            ),
            description: (
                <>
                    <p className="mb-4 text-justify">
                        CORE 116 The Sacred Journey <br />This short story follows the friendship
                        between two unlikely people while explaining the age-old the
                        six-syllabled Sanskrit mantra, "Om Mani Padme Hum," that is
                        particularly associated with the four-armed Shadakshari form of
                        Avalokiteshvara, the bodhisattva of compassion in the Buddhist
                        philosophy.
                    </p>
                </>
            ),
        },
        // Other entries...
    ];

    return (
        <div className="bg-gray-700 min-h-screen py-12">
            <div className="container mx-auto px-4 ">
                <br />
                <h1 className="text-3xl font-bold text-white mb-4 text-center" >
                    <br />
                    Undergraduate Work
                </h1>
                <p className="mb-8 text-white">
                    During my undergraduate career at the University of Idaho, I took 136
                    credits in a variety of courses ranging from Ornithology to French and
                    Francophone Cultures to American Environmental History. The University
                    of Idaho Environmental Science and Water Resources program provided me
                    with a solid, scientific base of knowledge but also many opportunities
                    for interdisciplinary learning experiences that have made me into a
                    well-rounded and informed student. Below are summaries of projects and
                    papers that I have completed during my undergraduate career. Click on
                    the titles or hyperlinks to view each piece in its entirety.
                </p>
                <div className="bg-gray-700 grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-1">
                    {images.map((image, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={image.img} // Corrected to 'src'
                                    alt={`Image ${index + 1}`}
                                    className="object-cover rounded-lg"
                                />

                            </div>

                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-2 text-blue-400">{image.title}</h2>{" "}

                                <p className="text-black-700 text-white">{image.description}</p>{" "}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Undergraduate;
