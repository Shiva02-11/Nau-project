import React from "react";
import section1Image from "../images/research1.png";
import section2Image from "../images/dna_orig.png";
import section3Image from "../images/img-3361.jpeg";
import section4Image1 from "../images/palmyra2010-034_1_orig.jpg";
import section4Image2 from "../images/dscn1431_orig.jpg";

const Research = () => {
  return (
    <div className="p-6 md:p-12 space-y-12">
      <section className="pt-4 flex justify-center">
        <h1 className="text-5xl font-bold text-center text-gray-900">Research</h1>
      </section>
      {/* Section 1: Image */}
      <section className="flex justify-center">
        <img
          src={section1Image}
          alt="Research Overview"
          className="rounded-lg shadow-lg max-w-full"
        />
      </section>

      {/* Section 2: Image with Description */}
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <img
          src={section2Image}
          alt="Research Focus 1"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-justify md:w-1/2">
          <h2 className="text-5xl font-semibold text-gray-900">My Research</h2>
          <p className="text-2xl text-gray-700 mt-9">
            My research is focused on building our knowledge of biological
            interactions and using what we know about these interactions to
            understand the impacts of invasive species and of invasive species
            management. My work focuses on islands as model systems in ecology
            as well as examines the unique invasive species challenges and
            benefits of island conservation.
          </p>
        </div>
      </section>

      {/* Section 3: Image with Description */}
      <section className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-8">
        <img
          src={section3Image}
          alt="Research Focus 2"
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:ml-8"
        />
        <div className="text-justify md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900">
            A Deeper Look at Species Interactions
          </h2>
          <p className="text-2xl text-gray-700 mt-4">
            Understanding biological complexity and how it shapes ecological
            functions (such as stability) has been a core aim of ecology since
            the dawn of the science. As human influences now shape a majority
            of the earth's ecosystems, understanding what makes complex
            communities resilient (or not) to change is even more imperative.
            I use tools in high throughput DNA sequencing of invertebrate
            predator diets to revisit ecological questions with the goal of
            building a more realistic picture of the biological interactions
            that comprise complex biological communities.
          </p>
        </div>
      </section>

      {/* Section 4: Two Photos with a Single Description */}
      <section className="space-y-4">
        <h3 className="text-3xl font-semibold text-center text-gray-900">
          Conservation Shapes Ecosystems
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src={section4Image1}
              alt="Research Detail 1"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="text-center">
            <img
              src={section4Image2}
              alt="Research Detail 2"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        <div className="text-justify max-w-7xl mx-auto mt-6">
          <p className="text-2xl text-gray-700">
            Conservation actions such as eradications often lead to fundamental
            changes in the properties and functions of ecosystems. One of the
            most commonly-reported post-eradication responses on islands is the
            recovery of nesting seabirds and the nutrients they provide to
            island ecosystems. While this is a common eradication outcome, many
            other ecosystem responses are likely to occur as the species
            remaining in an ecosystem adjust to the loss of invasive species.
            <br />
            <br />
            I study the plant and animal community dynamics of forests on
            Palmyra Atoll following the eradication of black rats (Rattus
            rattus) and show that forests and forest communities have shifted
            substantially following eradication towards new ecological states.
            The above pictures depict forests with rats (left) and without
            (right), with an increased dominance of an introduced palm species
            (Cocos nucifera) which negatively impacts nesting seabirds. This
            work was published in Biotropica in 2020 (
            <a
              href="https://www.researchgate.net/publication/344632449_Impacts_of_rodent_eradication_on_seed_predation_and_plant_community_biomass_on_a_tropical_atoll"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              ResearchGate link
            </a>
            )!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Research;
