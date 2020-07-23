export class BlogSectionLinks {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderBlogSectionContentBox();
    this._renderBasket();
    this._renderCrispy();
    this._renderUrbanGarden();
    this._renderPumpkin();
    this._renderFarmTour();
    this._renderSweetPotato();
    this._renderPumpkinSoup();
    this._renderGarden();
    this._renderAvocado();
    this._root.append(this._contentBox);
  }

  _renderBlogSectionContentBox() {
    this._contentBox = document.createElement("div");
    this._contentBox.classList.add("blog-section-content-box");
  }

  _renderBasket() {
    const basketbox = document.createElement("div");
    basketbox.classList.add("box-content");
    basketbox.innerHTML = `
    <a href="#">
    <div class="image-wrapp  first"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>New in the Basket: Seasonal Additions</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(basketbox);
  }

  _renderCrispy() {
    const crispyBox = document.createElement("div");
    crispyBox.classList.add("box-content");
    crispyBox.innerHTML = `
    <a href="#">
    <div class="image-wrapp  second"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Crispy Kale Salad</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(crispyBox);
  }

  _renderUrbanGarden() {
    const urbanGardenBox = document.createElement("div");
    urbanGardenBox.classList.add("box-content");
    urbanGardenBox.innerHTML = `
    <a href="#">
    <div class="image-wrapp  third"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Urban Garden Workshop</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(urbanGardenBox);
  }

  _renderPumpkin() {
    const pumpkinbox = document.createElement("div");
    pumpkinbox.classList.add("box-content");
    pumpkinbox.innerHTML = `
    <a href="#">
    <div class="image-wrapp fourth"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Pumpkin Carving Festival</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(pumpkinbox);
  }

  _renderFarmTour() {
    const farmtourbox = document.createElement("div");
    farmtourbox.classList.add("box-content");
    farmtourbox.innerHTML = `
    <a href="#">
    <div class="image-wrapp fifth"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Farm Tour: Get to Know the Land</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(farmtourbox);
  }

  _renderSweetPotato() {
    const sweetPotatobox = document.createElement("div");
    sweetPotatobox.classList.add("box-content");
    sweetPotatobox.innerHTML = `
    <a href="#">
    <div class="image-wrapp six"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Sweet Potato Fries</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(sweetPotatobox);
  }

  _renderPumpkinSoup() {
    const pumpkinsoupbox = document.createElement("div");
    pumpkinsoupbox.classList.add("box-content");
    pumpkinsoupbox.innerHTML = `
    <a href="#">
    <div class="image-wrapp seven"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Creamy Pumpkin Soup</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(pumpkinsoupbox);
  }

  _renderGarden() {
    const gardenbox = document.createElement("div");
    gardenbox.classList.add("box-content");
    gardenbox.innerHTML = `
    <a href="#">
    <div class="image-wrapp eight"></div> 
  </a>
  <div class="title-wrapp">
    <a href="#">
       <h5>Tips for Your Herb Garden</h5>
    </a>
  </div>
  <div class="comment-wrapp">
    <span class="mdi mdi-eye-outline"></span>
    <span>0</span>
    <a href="#">
      <span class="write-comment">Write a comment </span>
    </a>
    <button class="like-btn">
      <span class="mdi mdi-heart-outline"></span>
    </button>
  </div>
  `;
    this._contentBox.append(gardenbox);
  }

  _renderAvocado() {
    const avocadobox = document.createElement("div");
    avocadobox.classList.add("box-content");
    avocadobox.innerHTML = `
      <a href="#">
        <div class="image-wrapp  nine"></div> 
      </a>
      <div class="title-wrapp">
        <a href="#">
           <h5>Avocado Season Is Here</h5>
        </a>
      </div>
      <div class="comment-wrapp">
        <span class="mdi mdi-eye-outline"></span>
        <span>0</span>
        <a href="#">
          <span class="write-comment">Write a comment </span>
        </a>
        <button class="like-btn">
          <span class="mdi mdi-heart-outline"></span>
        </button>
      </div>
      `;
    this._contentBox.append(avocadobox);
  }
}
