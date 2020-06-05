function lighterFactory(count) {
  for (let i = 0; i < count; i++) {
    const light = document.createElement("div");
    light.classList.add("lights");
    const newElement = document.querySelector("body");
    newElement.appendChild(light);
  }
  // тут нужно написать реализацию
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  return bgColor;
}

const colors = document.querySelectorAll(".lights");
function colorOff() {
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    color.classList.remove("active");
    color.style.backgroundColor = "white";
  }
}

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  color.addEventListener("click", function () {
    colorOff();
    color.classList.add("active");
    color.style.backgroundColor = random_bg_color();
  });
}

export { lighterFactory };
export { colors };
