import { Header } from "./scripts/header_content.js";
import { Footer } from "./scripts/footer.js";
import { LoginForm } from "./scripts/loginform.js";
import { SideContainerJoin } from "./scripts/side_panel_join.js";

const headerPanel = document.querySelector(".header_content");
const headerelem = new Header(headerPanel);

const footerBlock = document.querySelector(".footer-section");
const block = new Footer(footerBlock);

const loginFormElem = document.querySelector("#rootPoint");
const loginpage = new LoginForm(loginFormElem);

const joinside = document.querySelector(".joinUs-side-conteiner-root");
const sidecontentjoin = new SideContainerJoin(joinside);
