import { Footer } from "../page_1/scripts/footer.js";
import { SectionOurStory } from "../page_1/scripts/ourstory_section_about.js";

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const storyBlock = document.querySelector(".story-root");
const story = new SectionOurStory(storyBlock);
