export class SectionSecond {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._containerElement = document.createElement("div");
    this._containerElement.classList.add("support-section");
    this._containerElement.innerHTML = `
    <div class="support-section-content">
            <div class="second-section-text">
              <h2 class="head-text">Support Sustainable
              </br>Farming</h2>
              <div class="line"></div>
              <p class="underhead-text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <button class="csa-btn">Join Our CSA</button>
            </div>
          </div>
    <div class="support-section-content">
          <img class="svg-image" src="../icons/image.svg" alt="" />
    </div>
`;
    this._root.append(this._containerElement);
  }
}
