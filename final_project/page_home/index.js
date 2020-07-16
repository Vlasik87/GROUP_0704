import { Header } from "../header&footer/scripts/header_content.js";
import { SectionSecond } from "../page_home/scripts/second_section.js";
import { SectionProduce } from "../page_home/scripts/section_produce.js";
import { PhotoSection } from "../page_home/scripts/photo_section.js";
import { BlogSection } from "../page_home/scripts/blog_section.js";
import { BlogSectionLinks } from "../page_home/scripts/blog_section_lnks.js";
import { Footer } from "../header&footer/scripts/footer.js";
import { SideContainerJoin } from "../header&footer/scripts/side_panel_join.js";
import { LoginForm } from "../header&footer/scripts/loginform.js";
import { SectionSliderBannerHome } from "./scripts/slider_banner.js";

const headerPanel = document.querySelector(".header_content");
const headerelem = new Header(headerPanel);

const rootElement = document.querySelector(".root");
const section = new SectionSecond(rootElement);

const rootElementProduce = document.querySelector(".rootPoint");
const sectionProduce = new SectionProduce(rootElementProduce);

const element = document.querySelector("#root");
const photos = new PhotoSection(element);

const blogcontainer = document.querySelector(".blog-section");
const newsection = new BlogSection(blogcontainer);
const newElement = new BlogSectionLinks(blogcontainer);

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const joinside = document.querySelector(".joinUs-side-conteiner-root");
const sidecontentjoin = new SideContainerJoin(joinside);

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);

const newslider = new SectionSliderBannerHome();
newslider.renderTest();
