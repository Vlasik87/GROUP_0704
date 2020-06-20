const ACTIVE_CLASS_NAME = "active";

export class Slide {
  constructor(root, slideData, styles = {}, isActive = false) {
    this._root = root;
    this._slideData = slideData;
    this._styles = styles;
    this._isActive = isActive;
    this.render();
  }

  get isActive() {
    return this._container.classList.contains(ACTIVE_CLASS_NAME);
  }

  render() {
    this._renderContainer();
    this._renderImg();
    this._root.append(this._container);
  }

  _renderContainer() {
    this._container = document.createElement("li");
    this._container.classList.add("slide");
    if (this._isActive) {
      this.setActive();
    }
    this._setStyles();
  }

  _renderImg() {
    const img = document.createElement("img");
    img.classList.add("slide_img");
    img.src = this._slideData.img;
    this._container.append(img);
  }

  _setStyles() {
    for (let style in this._styles) {
      this._container.style[style] = this._styles[style];
    }
  }

  setActive() {
    this._container.classList.add(ACTIVE_CLASS_NAME);
  }

  removeActive() {
    this._container.classList.remove(ACTIVE_CLASS_NAME);
  }
}
