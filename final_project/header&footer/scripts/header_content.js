export class Header {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderNameTitle();
    this._renderControlsBtn();
    this._renderMenuContent();
    this._renderLoginBlock();
    this._renderJoinUsBlock();
    this._renderOpenMenu();
    this._renderHideMenu();
  }

  _renderNameTitle() {
    this._nameTitle = document.createElement("div");
    this._nameTitle.classList.add("name-title");
    this._nameTitle.innerHTML = `
        <h3 class="title_text_primary">Deerfield Farm</h3>
        <span class="title_text">Season's Best</span>`;
    this._root.append(this._nameTitle);
  }

  _renderControlsBtn() {
    this._controlsBtn = document.createElement("div");
    this._controlsBtn.classList.add("controls-btn");
    this._controlsBtn.innerHTML = `<button class="show-menu-btn">
        <span class="mdi mdi-menu"></span>
      </button>
      <button class="hide-menu-btn" id="hide-btn">
        <span class="mdi mdi-close-thick"></span>
      </button>`;
    this._root.append(this._controlsBtn);
  }

  _renderMenuContent() {
    this._menu = document.createElement("div");
    this._menu.classList.add("menu-content");
    this._menu.innerHTML = `
        <ul class="menu">
          <li><a href="../page_1/index.html" class="nav_item">Home</a></li>
          <li><a href="../page_about/index.html" class="nav_item">About</a></li>
          <li><a href="#" class="nav_item">Our Produce</a></li>
          <li><a href="#" class="nav_item">Blog</a></li>
          <li><a href="#" class="nav_item">Contact Us</a></li>
        </ul>`;
    this._root.append(this._menu);
  }

  _renderLoginBlock() {
    this._loginblock = document.createElement("div");
    this._loginblock.classList.add("login-btn");
    this._loginblock.innerHTML = `<a href="#" class="logIn">
        <span class="logIn-icon icon mdi mdi-account"></span>
        Log In</a
        >`;
    this._root.append(this._loginblock);
  }

  _renderJoinUsBlock() {
    this._joinUsBlock = document.createElement("div");
    this._joinUsBlock.classList.add("joinus-btn");
    this._joinUsBlock.innerHTML = `
        <div>
          <a href="#" class="link-image">
            <img class="santa-svg" src="../icons/santa.svg" alt="" />
          </a>
        </div>
        <div class="text-container">
          <a href="#" class="joinUs-icon">
            <span>Join Us</span>
          </a>
        </div>`;
    this._root.append(this._joinUsBlock);
  }

  _renderOpenMenu() {
    this._menuControl = document.querySelector(".show-menu-btn");
    this._menuContent = document.querySelector(".menu-content");
    this._nameTitle = document.querySelector(".name-title");
    this._showBtn = document.querySelector(".show-menu-btn");
    this._headerBackground = document.querySelector(".header_content");
    this._joinUsBtn = document.querySelector(".joinus-btn");
    this._menu = document.querySelector(".menu");
    this._loginBtn = document.querySelector(".login-btn");
    this._navItem = document.querySelector(".nav_item");
    this._hideBtn = document.querySelector(".hide-menu-btn");
    this._joinSideBlock = document.querySelector(".joinUs-side-conteiner-root");
    this._menuControl.addEventListener("click", () => {
      this._menuContent.classList.add("active");
      this._nameTitle.classList.add("inactive");
      this._showBtn.classList.add("inactive");
      this._headerBackground.classList.add("active");
      this._joinUsBtn.classList.add("inactive");
      this._menu.classList.add("active");
      this._navItem.classList.add("active");
      this._loginBtn.classList.add("active");
      this._hideBtn.classList.add("active");
    });
  }

  _renderHideMenu() {
    this._menuHide = document.querySelector("#hide-btn");
    this._menuHide.addEventListener("click", () => {
      this._menuContent.classList.remove("active");
      this._nameTitle.classList.remove("inactive");
      this._showBtn.classList.remove("inactive");
      this._headerBackground.classList.remove("active");
      this._joinUsBtn.classList.remove("inactive");
      this._menu.classList.remove("active");
      this._navItem.classList.remove("active");
      this._loginBtn.classList.remove("active");
      this._hideBtn.classList.remove("active");
    });
  }
}
