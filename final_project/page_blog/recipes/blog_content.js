export class BlogSectionLinks {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderBlogSectionContentBox();
    this._renderFirstPost();
    this._renderSecondPost();
    this._renderThirdPost();
    this._root.append(this._contentBox);
  }

  _renderBlogSectionContentBox() {
    this._contentBox = document.createElement("div");
    this._contentBox.classList.add("blog-section-content-box");
  }

  _renderFirstPost() {
    const basketbox = document.createElement("div");
    basketbox.classList.add("box-content");
    basketbox.innerHTML = `
    <div class="container imgContent">
      <a href="#">
        <div class="image-wrapp  second"></div> 
      </a>
    </div>
    <div class="container textContent">
      <div class="title-wrapp">
        <a href="#">
          <h5>Crispy Kale Salad</h5>
          <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel... </p>
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
    </div>  
    `;
    this._contentBox.append(basketbox);
  }

  _renderSecondPost() {
    const gardenbox = document.createElement("div");
    gardenbox.classList.add("box-content");
    gardenbox.innerHTML = `
    <div class="container imgContent">
    <a href="#">
      <div class="image-wrapp six"></div> 
    </a>
  </div>
  <div class="container textContent">
    <div class="title-wrapp">
      <a href="#">
        <h5>Sweet Potato Fries
        </h5>
        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel... </p>
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
  </div>  
  `;
    this._contentBox.append(gardenbox);
  }

  _renderThirdPost() {
    const avocadobox = document.createElement("div");
    avocadobox.classList.add("box-content");
    avocadobox.innerHTML = `
    <div class="container imgContent">
    <a href="#">
      <div class="image-wrapp seven"></div> 
    </a>
  </div>
  <div class="container textContent">
    <div class="title-wrapp">
      <a href="#">
        <h5>Creamy Pumpkin Soup
        </h5>
        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel... </p>
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
  </div>  
  `;
    this._contentBox.append(avocadobox);
  }
}
