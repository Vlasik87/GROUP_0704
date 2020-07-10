import { SectionSecond } from "../scripts/second_section.js";
import { SectionProduce } from "../scripts/section_produce.js";
import { PhotoSection } from "../scripts/photo_section.js";
import { BlogSection } from "../scripts/blog_section.js";
import { BlogSectionLinks } from "../scripts/blog_section_lnks.js";
import { Footer } from "../scripts/footer.js";
import { LoginForm } from "../scripts/loginform.js";

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

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);
