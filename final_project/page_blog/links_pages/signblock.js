export class SignBlock {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderBlueCircle();
    this._renderAuthorLink();
    this._renderSpan();
    this._renderBtnDots();
    this._openform();
    this._hideForm();
    this._renderDotsAlert();
    this._fullScreenImg();
    this._closeFullScreen();
  }

  _renderBlueCircle() {
    this._blueCircle = document.createElement("div");
    this._blueCircle.classList.add("blueElem");
    this._root.append(this._blueCircle);
  }

  _renderAuthorLink() {
    this._authorLink = document.createElement("a");
    this._authorLink.classList.add("author");
    this._authorLink.textContent = "Ilya Lytvynov";
    this._root.append(this._authorLink);
  }

  _renderSpan() {
    this._spantext = document.createElement("span");
    this._spantext.classList.add("textAfterAuthor");
    this._spantext.textContent = "| Apr 8 | 1 min read";
    this._root.append(this._spantext);
  }

  _renderBtnDots() {
    this._btnDots = document.createElement("button");
    this._btnDots.classList.add("btn-dots");
    this._btnDots.innerHTML = `
        <span class="mdi mdi-dots-vertical"></span>`;
    this._root.append(this._btnDots);
  }

  _openform() {
    this._loginform = document.querySelector(".login-form");
    this._joinUsElem = document.querySelector(".joinus-btn");
    this._signPage = document.querySelector(".blueElem");
    this._signUp = document.querySelector(".author");
    this._signPage.addEventListener("click", () => {
      this._loginform.classList.add("active");
      this._joinUsElem.classList.add("inactive");
    });
    this._signUp.addEventListener("click", () => {
      this._loginform.classList.add("active");
      this._joinUsElem.classList.add("inactive");
    });
  }

  _hideForm() {
    this._signHide = document.querySelector("#hide-login");
    this._signHide.addEventListener("click", () => {
      this._loginform.classList.remove("active");
      this._joinUsElem.classList.remove("inactive");
    });
  }

  _renderDotsAlert() {
    this._dotsAlert = document.querySelector(".btn-dots");
    this._dotsAlert.addEventListener("click", () => {
      alert("Share Post");
    });
  }

  _fullScreenImg() {
    this._joinUsElem = document.querySelector(".joinus-btn");
    this._imageFullSize = document.querySelector(".blogAdditionalSection");
    this._bigImgScreen = document.querySelector(".imgBtn");
    this._header = document.querySelector("header");
    this._mainContent = document.querySelector("main");
    this._footer = document.querySelector("footer");
    this._bigImgScreen.addEventListener("click", () => {
      this._imageFullSize.classList.add("active");
      this._joinUsElem.classList.add("inactive");
      this._header.style = "display: none";
      this._mainContent.style = "display: none";
      this._footer.style = "display: none";
    });
  }

  _closeFullScreen() {
    this._loginHide = document.querySelector("#hide-login");
    this._loginHide.addEventListener("click", () => {
      this._imageFullSize.classList.remove("active");
      this._joinUsElem.classList.remove("inactive");
      this._header.style = "display: flex";
      this._mainContent.style = "display: block";
      this._footer.style = "display: block";
    });
  }
}
