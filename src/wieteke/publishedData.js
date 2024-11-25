import image1 from "./images/published1.jpg";
import image2 from "./images/published2.jpg";
import image3 from "./images/published3.jpg";
import image4 from "./images/published4.jpg";
import image5 from "./images/published5.jpg";
import image6 from "./images/published6.jpg";
import image7 from "./images/published7.jpg";
import image8 from "./images/published8.jpg";
import image9 from "./images/published9.jpg";
import image10 from "./images/published10.jpg";
import image11 from "./images/published11.jpg";
import image12 from "./images/published12.jpg";
import image13 from "./images/published13.jpg";
import image14 from "./images/published14.jpg";
import image15 from "./images/published15.jpg";
import image16 from "./images/WIP.jpg";
import image17 from "./images/WIP1.jpg";

const publishedData = [

    {
        id: 2,
        image: image1,
        title: "Wildfowl (ISSN: 2052-6458)",
        description: `
        "A next-generation sequencing study of arthropods in the diet of Laysan Teal Anas laysanensis"<br />
        Co-writers: Carmen C. Antaky, Elizabeth N. Flint, Jonathan H. Plissner, Coral A. Wolf, and Holly P. Jones<br /><br />
        To inform mitigation measures to reduce bait ingestion during rodent eradication, we determined arthropod consumption of a critically-endangered species, the Laysan Teal. Using next-generation sequencing, we determined that Laysan Teal frequently consume cockroaches (Blattodea), freshwater ostracods (Cyprididae), midges (Chironomidae), and isopods (Porcellionidae). In turn, this arthropod data can help to guide environmental monitoring of rodenticide presence during and after rodent eradication. 
        Read the full article <a href="https://link-to-full-article.com" target="_blank" class="text-blue-500 underline">here.</a>
      `,
    },
    {
        id: 3,
        image: image2,
        title: "PLoS ONE (DOI: 10.1371/journal.pone.0293092)",
        description: `
        "An invasive appetite: Combining molecular and stable isotope analyses to reveal the diet of introduced house mice (<i>Mus musculus</i>) on a small, subtropical island"<br />
        Co-writers: Elizabeth N. Flint, Stefan J. Green, Jonathan H. Plissner, Daniel Simberloff, Dagmar Sweeney, Coral A. Wolf, and Holly P. Jones<br /><br />
        Invasive house mice recently began to attack nesting adult Laysan Albatross on Midway Atoll NWR, prompting efforts to eradicate mice in the near future. However, knowledge of mouse diet is needed to predict ecosystem response and recovery following mouse removal. Here, we use next-generation sequencing in tandem with stable isotope analysis of <i>Mus musculus</i> fecal and hair samples to investigate what diet items house mice consume and to what extent. 
        Read the full article <a href="https://doi.org/10.1371/journal.pone.0293092" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 4,
        image: image3,
        title: "PNAS (DOI: 10.1073/pnas.2122354119)",
        description: `
    "Harnessing island–ocean connections to maximize marine benefits of island conservation"<br />
    Co-writers: Stuart A. Sandin, Penny A. Becker, Ceiba Becker, Kate Brown, Natalia G. Erazo, Cielo Figuerola, Robert N. Fisher, Alan M. Friedlander, Tadashi Fukami, Nicholas A. J. Graham, Daniel S. Gruner, Nick D. Holmes, Holly P. Jones, Mariela Rios, Araceli Samaniego, Wes Sechrest, Brice X. Semmens, Hazel E. Thornton, Rebecca Vega Thurber, Christy N. Wails, Coral A. Wolf, Brian J. Zgliczynski<br /><br />
    Islands support unique plants, animals, and human societies found nowhere else on Earth. Local and global stressors threaten the persistence of island ecosystems, with invasive species being among the most damaging, yet solvable, stressors. While the threat of invasive terrestrial mammals on island flora and fauna is well recognized, recent studies have begun to illustrate their extended and destructive impacts on adjacent marine environments. Eradication of invasive mammals and restoration of native biota are promising tools to address both island and ocean management goals. 
    Read the full article <a href="https://doi.org/10.1073/pnas.2122354119" target="_blank" class="text-blue-500 underline">here</a>.
  `,
    },
    {
        id: 5,
        image: image4,
        title: "International Review of Environmental History (DOI: 10.22459/IREH.07.02.2021.02)",
        description: `
    "Fatal fashions and caring actions: Florence Merriam Bailey and the rise of avian conservation"<br /><br />
    As a budding, young ornithologist, Florence Merriam Bailey (1863-1948) was appalled by the latest fashion trend common among her female friends and soon became involved in the rising bird conservation sentiment. However, bird conservation appealed to only a small, elite fraction of the American public—either the rich upper class or progressive conservationists. Through her writings, Bailey developed an important middle ground that incorporated both scientific arguments for conservation as well as moral and emotional ones, which not only made her oeuvre widely accessible, but in a practical way quietly spread the message of conservation to a much larger audience. 
    Read the full article <a href="https://doi.org/10.22459/IREH.07.02.2021.02" target="_blank" class="text-blue-500 underline">here</a>.
  `,
    },
    {
        id: 6,
        image: image5,
        title: "Pacific Science (DOI: 10.2984/75.3.6)",
        description: `
    "Fly on the wall: comparing arthropod communities between islands with and without house mice"<br /><br />
    Co-writers: Susan Durham, Elizabeth N. Flint, Jonathan H. Plissner, Kaylee J. Rosenberger, Coral A. Wolf, and Holly P. Jones<br /><br />
    Invertebrates are key to island ecosystems, but impacts from invasive mammalian predators are not well documented or understood. Given this knowledge gap, we studied terrestrial arthropod communities in the presence of a common invasive rodent (house mice, Mus musculus) on a subtropical atoll—Midway Atoll NWR. Here, invasive mice recently began to attack and depredate nesting seabirds, prompting a mouse eradication. Although eradication planning efforts are underway, uncertainty remains regarding the ecosystem’s response to mouse removal. As part of a pre-eradication investigation, we conducted a baseline survey of Midway Atoll NWR's arthropod community structure and diversity, comparing islands with and without mice. 
    Read the full article <a href="https://doi.org/10.2984/75.3.6" target="_blank" class="text-blue-500 underline">here</a>.
  `,
    },
    {
        id: 7,
        image: image6,
        title: "Biological Invasions (DOI: 10.1007/s10530-021-02540-5)",
        description: `
        "Assessing changes to ecosystem structure and function following invasion by Spartina alterniflora and Phragmites australis: a meta-analysis"<br /><br />
        Co-writers: Christy N. Wails, Kaleb Baker, Ryan Blackburn, Antonio Del Valle, Jeff Heise, Heather Herakovich, Matthew P. Nissenbaum, Dr. Lindsay Rankin, Kirstie Savage, John P. Vanek, and Holly P. Jones<br /><br />
        Biological invasions resulting from anthropogenic activities are one of the greatest threats to maintaining ecosystem functioning and native biodiversity​. Of particular concern is the spread of emergent wetland grasses whose root systems alter hydrology and structural stability of soils, modify ecosystem functions, and change community dynamics and species richness. Here, we conducted a meta-analysis to quantify ecological alterations and the efficacy of management following the invasion of Spartina alterniflora and Phragmites australis, two common and pervasive invaders in coastal wetlands. 
        Read the full article <a href="https://doi.org/10.1007/s10530-021-02540-5" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 8,
        image: image7,
        title: "Ecological Solutions and Evidence (DOI: 10.1002/2688-8319.12007)", description: ` "Using Phenology Data to Improve Control of Invasive Plant Species: A Case Study from Midway Atoll NWR"<br /> Co-writers: Robert Taylor, Ann Humphrey, and Erin Posthumus<br /><br /> Successful restoration of degraded land often depends on well-timed interventions to control invasive species. In our recently published article, we present a case study of the effects of incorporating phenology information into invasive plant control operations at Midway Atoll National Wildlife Refuge (NWR). Read the full article <a href="https://link-to-full-article.com" target="_blank" class="text-blue-500 underline">here.</a> `,
    },
    {
        id: 9,
        image: image8,
        title: "Birding Magazine (October 2018), American Birding Association", description: ` "Fighting at the Frontline: Volunteer Recollections of Seabird Conservation and Habitat Restoration at Midway Atoll National Wildlife Refuge"<br /> Co-writer: Eric Baker<br /><br /> Unfolding its six-foot wingspan, the Laysan Albatross (Phoebastria immutabilis) faces into the wind and is seemingly levitated into the sky, as if by magic. Without effort, those graceful twin airfoils carry it up and away from the coral sands of Midway Atoll, out to the trackless expanse of the North Pacific. Some fifty feet in the air, still gaining altitude and speed, it banks sharply to the right and rockets back toward the sea. In the calm water between the waves, its wingtip carves an arc upon the surface—momentary evidence of its passage through space and time—as wind and momentum carry it up the face of the next wave. Down between the waves, up over their crests. Banking right, now left. The dance of the albatross between sea and sky repeats endlessly. Read the full article <a href="https://link-to-full-article.com" target="_blank" class="text-blue-500 underline">here.</a> `,
    },
    {
        id: 10,
        image: image9,
        title: "The Wilson Journal of Ornithology (DOI: 10.1676/16-149.1)",
        description: `
        "Stranger Danger: Acoustic Response of the Veery (Catharus fuscescens) via Heterospecific Eavesdropping on the Tufted Titmouse (Baeolophus bicolor)"<br /><br />
        In this study, I examine heterospecific eavesdropping in passerines by investigating how information broadcast by the Tufted Titmouse at dusk modifies singing and calling vocalizations of a common avian dusk chorus species, the Veery. 
        Read the full article <a href="https://doi.org/10.1676/16-149.1" target="_blank" class="text-blue-500 underline">here</a>; listen to sound files of Veery calls <a href="https://link-to-sound-files.com" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 11,
        image: image10,
        title: "Global Policy (DOI: 10.1111/1758-5899.12469)",
        description: `
        "Non-epistemic Values and Concerns about Evolutionary Mindsets in Conservation Policy"<br /><br />
        Co-writer: Bert Baumgaertner<br /><br />
        This short article offers reflections on an approach to environmental policy and land management forwarded by Peter Kareiva and Emma Fuller. We analyze the main driver behind Kareiva and Fuller’s article (an evolutionary perspective in regards to policy) with respect to non-epistemic values and outline key questions that will be important to inform environmental and conservation research, efforts, and policy.
        Read the full article <a href="https://doi.org/10.1111/1758-5899.12469" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 12,
        image: image11,
        title: "Conservation Biology (DOI: 10.1111/cobi.12756)",
        description: `
        "On Non-Epistemic Values in Conservation Biology"<br /><br />
        Co-writer: Bert Baumgaertner<br /><br />
        We argue that conservation biology is in a unique position as a science but that it is not served well by certain attempts to separate facts and values. Rather than continue to split these two, we put forward a conception of the relation between facts (or measures) and values that better serves conservation biology and also clarifies how the discipline can make progress in ways that are not available to other sciences.
        Read the full article <a href="https://doi.org/10.1111/cobi.12756" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 13,
        image: image12,
        title: "Contemporary Aesthetics (Volume 14, 2016)",
        description: `
        "Using Soundscape Ecology in Design and Function"<br /><br />
        Although broadly defined, environmental aesthetics tends to focus on the aesthetic value of human and human-influenced systems in addition to that of natural systems. Sound, however, is rarely identified as a critical component of an aesthetic analysis. This short note examines soundscape ecology—an emerging discipline in ecology—and its strong ties and potential contributions to environmental aesthetics.
        Read the full article <a href="https://doi.org/10.1111/j.1751-1350.2016.01606.x" target="_blank" class="text-blue-500 underline">here</a>.
      `,
    },
    {
        id: 14,
        image: image13,
        title: "Journal of Sustainable Development in Africa (Volume 13, No.7, 2011)",
        description: `
      "Dry, Hot, and Brutal: Climate Change and Desertification in the Sahel of Mali"<br /><br />
      Co-writer: Jacqueline Rugaimukamu Maximillian<br /><br />
      Written in conjunction with University of Idaho faculty member Jacqueline Rugaimukamu Maximillian, this paper describes the connections and effects between climate change and desertification in the Sahel region of Mali as well as proposing mitigation strategies for sustainable development.
      Read the full article <a href="https://www.jsd-africa.com" target="_blank" class="text-blue-500 underline">here</a>.
    `,
    },
    {
        id: 15,
        image: image14,
        title: "High Country News (HCN) 2012 Student Essay Contest, Runner Up",
        description: `
      "Lost and Found in the Sagebrush"<br /><br />
      I wrote a short, nostalgic essay about growing up in the sagebrush steppe of southwest Idaho for HCN's annual student essay contest in response to the 2012 theme of "How I Became a Westerner."
      Read the full essay <a href="https://www.hcn.org" target="_blank" class="text-blue-500 underline">here</a>.
    `,
    },
    {
        id: 16,
        image: image15,
        title: "She's Out There: Essays by 35 Young Women Who Aspire to Lead the Nation: The Next Generation of Presidential Candidates (2009)",
        description: `
      It is now not a question of when we will have a female president, it is a question of who it will be. In She's Out There!, noted documentary filmmaker Amy Sewell (Mad Hot Ballroom) and writer/editor Heather Ogilvie present a collection of essays from thirty-five young women under the age of thirty-five who aspire to become the leader of the Free World.<br /><br />
      As part of the thirty-five women featured in this publication, I contributed an essay recounting the struggles of growing up in a politically polarizing state but also becoming inspired to take part in the political arena, locally and nationally.
      Learn more and order the book <a href="https://www.amazon.com" target="_blank" class="text-blue-500 underline">here</a>.
    `,
    },
    {
        id: 17,
        image: image16,
        title: "Dispelling the mirage of C4 driven drought tolerance in Poaceae: a phylogenomic study (in preparation)",
        description: `
        <br />
       Co-writers: Matthew P. Nissenbaum, Sean V. Burke, Lauren M. Orton, and Mel R. Duvall
Climate change is a key driver for adaptations in water use efficiency (WUE). Perceptions persist that C4 photosynthesis indicates drought tolerance. Here, we examined the interaction and evolution of WUE within Poaceae as it pertains to photosynthetic pathway. Unique to this study is the magnitude of taxa sampled, degree of intrageneric sampling, and complete plastid genomes (plastomes) used for phylogenomic analyses.​
      `,
    },
    {
        id: 18,
        image: image17,
        title: "Jewels from the Heavens: The Extraordinary Diversity of Birds of Paradise in New Guinea (synthesis article, in preparation)",
        description: `Co-writer: Michael Jennings <br />
        Proclaimed as “birds of the Gods,” birds of paradise (Family Paradisaeidae) have been the most popular and colorful examples of biodiversity existing in New Guinea. The aim of this article is to present a synthesis of the biological and physical mechanisms that have and continue to drive the high degree of biodiversity of flora and fauna on New Guinea by focusing on the Paradisaeidae.
      `,
    },
];

export default publishedData;
