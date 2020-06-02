const lightAll = document.querySelectorAll(".lights");
const className = "active";

function turnOffAll() {
  for (let i = 0; i < lightAll.length; i++) {
    const light = lightAll[i];
    light.classList.remove(className);
  }
}

for (let i = 0; i < lightAll.length; i++) {
  const light = lightAll[i];
  light.addEventListener("click", function () {
    turnOffAll();
    light.classList.add(className);
  });
}
