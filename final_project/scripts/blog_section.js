export class BlogSection {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderBlogSectionContent();
    this._renderTextBox();
    this._root.append(this._blogConteiner);
  }

  _renderBlogSectionContent() {
    this._blogConteiner = document.createElement("div");
    this._blogConteiner.classList.add("blog-section-content");
  }

  _renderTextBox() {
    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    textBox.innerHTML = `
        <h2 class="head">From Our Blog</h2>
        <div class="line"></div>
        `;
    this._blogConteiner.append(textBox);
  }
}
