import { Lights } from "./lightfactory.js";

const body = document.querySelector("body");
const light = new Lights(body, function () {
  this.lightsElement.classList.add("active");
});

light.render();
light.render();
