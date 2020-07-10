import { Header } from "../header&footer/scripts/header_content.js";
import { Footer } from "../header&footer/scripts/footer.js";
import { SectionOurStory } from "../page_about/scripts/ourstory_section_about.js";
import { LoginForm } from "../header&footer/scripts/loginform.js";
import { SideContainerJoin } from "../header&footer/scripts/side_panel_join.js";
import { SectionSliderAbout } from "../page_about/scripts/slider_about_page.js";

const headerPanel = document.querySelector(".header_content");
const headerelem = new Header(headerPanel);

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const storyBlock = document.querySelector(".story-root");
const story = new SectionOurStory(storyBlock);

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);

const joinside = document.querySelector(".joinUs-side-conteiner-root");
const sidecontentjoin = new SideContainerJoin(joinside);

const newslider = new SectionSliderAbout(sliderAbout);
newslider.renderTest();
