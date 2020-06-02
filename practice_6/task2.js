// 1. запустить цикл
// 2. внутри цикла создать div добавить необходимый класс прописанный в css
// 3. внутри цикла вызвать root.append

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  return bgColor;
}

function createLights(count, root) {
  for (i = 0; i < count; i++) {
    const addedElement = document.createElement("div");
    addedElement.classList.add("element-div");
    root.appendChild(addedElement);
  }
}

createLights(100, document.querySelector("body"));

const lighters = document.querySelectorAll(".element-div");
function turnOff() {
  for (let i = 0; i < lighters.length; i++) {
    const light = lighters[i];
    light.classList.remove("active");
    light.style.backgroundColor = "white";
  }
}

for (let i = 0; i < lighters.length; i++) {
  const light = lighters[i];
  light.addEventListener("click", function () {
    turnOff();
    light.classList.add("active");
    light.style.backgroundColor = random_bg_color();
  });
}
