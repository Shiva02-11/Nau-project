import React from "react";
import PublicationImage from "../images/publication1.png"; // Update the path to your image
import pdfImage from "../images/pdfImage.png";
const Publications = () => {
    return (
        <div className="p-6 md:p-12 space-y-12">
            <section className="pt-4 flex justify-center">
                <h1 className="text-5xl font-bold text-center text-gray-900">Publications</h1>
            </section>
            {/* Image Section */}
            <section className="flex justify-center">
                <img
                    src={PublicationImage}
                    alt="Publications"
                    className="rounded-lg shadow-lg max-w-full"
                />
            </section>

            {/* Text Section */}
            <section className="text-justify space-y-6">
                <p className="text-2xl text-gray-700 mt-4">
                    Here is a list of publications and documents available for download
                    (including PDFs). These include my research articles, book chapters,
                    and other scholarly works.
                </p>
                <ul className="list-disc list-inside text-2xl text-gray-700 space-y-4">
                    <li>
                        Parsons, J., C. Motta, G. Sehgal, A. Miller-ter Kuile, H. Young, D. Orr. 2021. Interactive effects of large herbivores and climate on California oak seedling outcomes. Forest Ecology and Management.
                        <a
                            href="https://www.researchgate.net/publication/355078646_Interactive_effects_of_large_herbivores_and_climate_on_California_oak_seedling_outcomes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        A. Miller-ter Kuile, A. Apigo, H. Young. 2021. Effects of consumer surface sterilization on diet DNA metabarcoding data of terrestrial invertebrates in natural environments and feeding trials. Ecology and Evolution.
                        <a
                            href="https://www.researchgate.net/publication/353776482_Effects_of_consumer_surface_sterilization_on_diet_DNA_metabarcoding_data_of_terrestrial_invertebrates_in_natural_environments_and_feeding_trials"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        A. Miller-ter Kuile, D. Orr, A. Bui, R. Dirzo, M. Klope, D. McCauley, C. Motta, Hillary Young. 2021. Impacts of rodent eradication on seed predation and plant community biomass on a tropical atoll. Biotropica.
                        <a
                            href="https://www.researchgate.net/publication/344632449_Impacts_of_rodent_eradication_on_seed_predation_and_plant_community_biomass_on_a_tropical_atoll"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Lafferty, K., J. McLaughlin, D. Gruner, T. Bogar, A. Bui, J. Childress, M. Espinoza, E. Forbes, C. Johnston, M. Klope, A. Miller-ter Kuile, M. Lee, K. Plummer, D. Weber, R. Young, H. Young. 2018. Local extinction of the Asian tiger mosquito (Aedes albopictus) following rat eradication on Palmyra Atoll. Biology Letters.
                        <a
                            href="https://www.researchgate.net/publication/323447931_Local_extinction_of_the_Asian_tiger_mosquito_Aedes_albopictus_following_rat_eradication_on_Palmyra_Atoll?_sg=Q3dy-rcEgq8xI73KQvb7zYkovsKsIUhQyVg5Rk64GQIK2su_GDdakqNrN-wyM8QQdJ-wWNPDnCen_2Y8U8u8jmARZISFOMTEx6fR7okK.6jsY-3eTHKyjQ-dd6Z587v3npU969TF5deF1JcLYkJJMXrlWhtyT_xRGXckrGwkuiGoNhRvmSkBoZtDn-Sr_hQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Hardesty-Moore, M, S. Deinet, R. Freeman, G. Titcomb, E. Dillon, K. Stears, M. Klope, A. Bui, D. Orr, H. Young, A. Miller-ter Kuile, L. Hughey, D. McCauley. 2018. Migration in the Anthropocene: how collective navigation , environmental system, and taxonomy shape the vulnerability of migratory species. Phil. Trans. B: Biological Sciences.
                        <a
                            href="https://www.researchgate.net/publication/324016504_Migration_in_the_Anthropocene_how_collective_navigation_environmental_system_and_taxonomy_shape_the_vulnerability_of_migratory_species?_sg=jL6vtFuf_0leVByT6-geozhjvUQU2GlpWFQ3hyFBiNTXDABZD8nRwCvL3LYkAwEoE88NXckCrVQbF-tVxVlbMZrjkv5SXthKXKqgdpjJ.F0Ck4c_3D6r3nocybDemr9aK3Ime1IISCdumob94Q9r5YLEnuID1ozWxPJNVsx83EpiMc2YxQv6-cWFHGAljTA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Nigro, K., S. Hathaway, A. Wegmann, A. Miller-ter Kuile, R. Fisher, H. Young. 2017. Stable isotope analysis as an early monitoring tool for community-scale effects of rat eradication. Restoration Ecology.            <a
                            href="https://www.researchgate.net/publication/314164605_Stable_isotope_analysis_as_an_early_monitoring_tool_for_community-scale_effects_of_rat_eradication_Rat_eradication_affects_crab_trophic_ecology"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Young, H., A. Miller-ter Kuile, D. McCauley, R. Dirzo. 2017. Cascading community and ecosystem consequences of introduced palms in tropical islands. Canadian Journal of Zoology. 95(3): 139-148.            <a
                            href="https://www.researchgate.net/publication/311881476_Cascading_community_and_ecosystem_consequences_of_introduced_palms_in_tropical_islands"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Forbes, E, A. Miller-ter Kuile, D. Orr, G. Titcomb. 2016. Navigating the Cascades of Circumstance. Science. 352(6289):1062.            <a
                            href="https://www.researchgate.net/publication/303556563_Navigating_the_cascades_of_circumstance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    <li>
                        Young, H., D. McCauley, R. Dunbar, M. Hutson, A. Miller-ter Kuile, R. Dirzo. 2013. The roles of productivity and ecosystem size in determining food chain length in tropical Pacific islets. Ecology 94(3):692-701.            <a
                            href="https://www.researchgate.net/publication/236922185_The_roles_of_productivity_and_ecosystem_size_in_determining_food_chain_length_in_tropical_terrestrial_ecosystems"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            ResearchGate Link
                        </a>
                        .
                    </li>
                    {/* Add more publications as needed */}
                </ul>
            </section>
            {/* PDF Section */}
            <section className="flex items-center space-x-4 mt-8">
                {/* PDF icon and text that opens the PDF in a new tab */}
                <a
                    href={`${process.env.PUBLIC_URL}/ana_mtk_cv_sept27_2021.pdf`}
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
                        <span className="font-bold text-lg">ana_mtk_cv_sept27_2021.pdf</span>
                    </div>
                </a>

                {/* Download link */}
                <a
                    href={`${process.env.PUBLIC_URL}/ana_mtk_cv_sept27_2021.pdf`}
                    download
                    className="text-blue-500 font-bold ml-4"
                >
                    Download File
                </a>
            </section>

        </div>
    );
};

export default Publications;
