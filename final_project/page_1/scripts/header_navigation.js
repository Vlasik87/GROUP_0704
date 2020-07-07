const menuControl = document.querySelector(".show-menu-btn");
const menuContent = document.querySelector(".menu-content");
const nameTitle = document.querySelector(".name-title");
const showBtn = document.querySelector(".show-menu-btn");
const headerBackground = document.querySelector(".header_content");
const joinUsBtn = document.querySelector(".joinus-btn");
const menu = document.querySelector(".menu");
const loginBtn = document.querySelector(".login-btn");
const navItem = document.querySelector(".nav_item");
const hideBtn = document.querySelector(".hide-menu-btn");
menuControl.addEventListener("click", () => {
  menuContent.classList.add("active");
  nameTitle.classList.add("inactive");
  showBtn.classList.add("inactive");
  headerBackground.classList.add("active");
  joinUsBtn.classList.add("inactive");
  menu.classList.add("active");
  navItem.classList.add("active");
  loginBtn.classList.add("active");
  hideBtn.classList.add("active");
  console.log("hi");
});

const menuHide = document.querySelector("#hide-btn");
menuHide.addEventListener("click", () => {
  menuContent.classList.remove("active");
  nameTitle.classList.remove("inactive");
  showBtn.classList.remove("inactive");
  headerBackground.classList.remove("active");
  joinUsBtn.classList.remove("inactive");
  menu.classList.remove("active");
  navItem.classList.remove("active");
  loginBtn.classList.remove("active");
  hideBtn.classList.remove("active");
});
