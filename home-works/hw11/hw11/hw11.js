const buttonRed = document.querySelector(".redColor");
const buttonYellow = document.querySelector(".yellowColor");
const buttonGreen = document.querySelector(".greenColor");

function clickRed() {
  buttonRed.classList.add("active");
  buttonYellow.classList.remove("active");
  buttonGreen.classList.remove("active");
}

function clickYellow() {
  buttonYellow.classList.add("active");
  buttonRed.classList.remove("active");
  buttonGreen.classList.remove("active");
}

function clickGreen() {
  buttonGreen.classList.add("active");
  buttonRed.classList.remove("active");
  buttonYellow.classList.remove("active");
}
buttonRed.addEventListener("click", clickRed);
buttonYellow.addEventListener("click", clickYellow);
buttonGreen.addEventListener("click", clickGreen);
