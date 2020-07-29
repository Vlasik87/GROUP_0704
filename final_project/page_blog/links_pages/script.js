import { SignBlock } from "./signblock.js";
import { SocialActions } from "./social_actions.js";

const signUp = document.querySelector(".signwindow-wrap");
const signPage = new SignBlock(signUp);

const socialBlock = document.querySelector(".undertextBlock");
const social = new SocialActions(socialBlock);
