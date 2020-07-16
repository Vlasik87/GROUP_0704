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
    this._root.append(this._contentBox);
    this._renderButton();
  }

  _renderBlogSectionContentBox() {
    this._contentBox = document.createElement("div");
    this._contentBox.classList.add("blog-section-content-box");
  }

  _renderBasket() {
    const basketbox = document.createElement("div");
    basketbox.classList.add("box-content");
    basketbox.innerHTML = `
    <div class="image-wrapp">
                <a href="#">
                  <img
                    src="https://static.wixstatic.com/media/ad420a_a6917e35f02241c4801a874aab820004~mv2_d_4896_2754_s_4_2.jpg/v1/fit/w_294,h_165,al_c,q_80/file.webp"
                    alt=""
                  />
                </a>
              </div>
              <div class="title-wrapp">
                <a href="#">
                  <h5>New in the Basket: Seasonal Additions</h5>
                </a>
              </div>
              <div class="comment-wrapp">
                <span class="mdi mdi-eye-outline"></span>
                <span>8</span>
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
    <div class="image-wrapp">
                <a href="#">
                  <img
                    src="https://static.wixstatic.com/media/ad420a_04601c61916d4f2aa921752f35c7b4bd~mv2_d_5334_4000_s_4_2.jpg/v1/fit/w_290,h_218,al_c,q_80/file.webp"
                    alt=""
                  />
                </a>
              </div>
              <div class="title-wrapp">
                <a href="#">
                  <h5>Crispy Kale Salad</h5>
                </a>
              </div>
              <div class="comment-wrapp">
                <span class="mdi mdi-eye-outline"></span>
                <span>1</span>
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
    <div class="image-wrapp">
                <a href="#">
                  <img
                    src="https://static.wixstatic.com/media/ad420a_bc9e0090ba934790aa23d055e3299caa~mv2_d_5472_3648_s_4_2.jpg/v1/fit/w_290,h_194,al_c,q_80/file.webp"
                    alt=""
                  />
                </a>
              </div>
              <div class="title-wrapp">
                <a href="#">
                  <h5>Urban Garden Workshop</h5>
                </a>
              </div>
              <div class="comment-wrapp">
                <span class="mdi mdi-eye-outline"></span>
                <span>1</span>
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

  _renderButton() {
    this._btn = document.createElement("button");
    this._btn.classList.add("btn");
    this._btn.textContent = "See More";
    this._root.append(this._btn);
  }
}
