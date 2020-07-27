import { GreenBlockBlogContent } from "../green_block.js";
import { BlogSectionLinks } from "../events/blog_content.js";

const greenblockelement = document.querySelector(".green-section-root");
const bloggreenelem = new GreenBlockBlogContent(greenblockelement);

const blogcontainer = document.querySelector(".blog-root");
const newElement = new BlogSectionLinks(blogcontainer);
