export class GreenBlockBlogContent {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderGreenBlock();
    this._root.append(this._greenBlock);
    this._showAllPosts();
  }

  _renderGreenBlock() {
    this._greenBlock = document.createElement("div");
    this._greenBlock.classList.add("green-section-content");
    this._greenBlock.innerHTML = `
      <h3 class="green-section-content-title">Our Blog</h3>`;
    const menu = document.createElement("ul");
    menu.classList.add("blog-menu");
    menu.innerHTML = `
          <li><a href="#" class="nav_item" id="AllPosts">All Posts</a></li>
          <li><a href="#" class="nav_item">News</a></li>
          <li><a href="#" class="nav_item">Recipes</a></li>
          <li><a href="#" class="nav_item">Events</a></li>`;
    this._greenBlock.append(menu);
  }

  _showAllPosts() {
    this._menuAllPosts = document.querySelector("#AllPosts");
    this._menuAllPosts.classList.add("active");
    this._menuAllPosts.addEventListener("click", () => {
      window.location.href = "../page_blog/index.html";
    });
  }
}
