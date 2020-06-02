const btn = document.querySelector(".someBtn");
let divBlock = document.querySelector(".paragraph");

function clickMe() {
  console.log("hello");
  if (btn.classList.contains("active") !== true) {
    divBlock.style.color = "red";
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
    divBlock.style.color = "black";
  }
}

btn.addEventListener("click", clickMe);
