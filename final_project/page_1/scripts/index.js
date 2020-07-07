import { SectionSecond } from "./second_section.js";
import { SectionProduce } from "./section_produce.js";
import { PhotoSection } from "./photo_section.js";

const rootElement = document.querySelector(".root");
const section = new SectionSecond(rootElement);

const rootElementProduce = document.querySelector(".rootPoint");
const sectionProduce = new SectionProduce(rootElementProduce);

const element = document.querySelector("#root");
const photos = new PhotoSection(element);
