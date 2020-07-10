import { Footer } from "../scripts/footer.js";
import { SectionOurStory } from "../scripts/ourstory_section_about.js";
import { LoginForm } from "../scripts/loginform.js";
import { SectionSliderAbout } from "../scripts/slider_about_page.js";

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const storyBlock = document.querySelector(".story-root");
const story = new SectionOurStory(storyBlock);

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);

const sliderAbout = document.querySelector("#sliderAbout");
const newslider = new SectionSliderAbout(sliderAbout);
