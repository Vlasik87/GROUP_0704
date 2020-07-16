const ACTIVE_CLASS_NAME = "active";

export class SlideHomePage {
  constructor(root, slideData, styles = {}, isActive = false) {
    this._root = root;
    this._styles = styles;
    this._isActive = isActive;
    this._slideData = slideData;
    this.render();
  }

  get isActive() {
    return this._containerElement.classList.contains(ACTIVE_CLASS_NAME);
  }

  render() {
    this._renderContainerElement();
    this._renderImageElement();
    this._root.append(this._containerElement);
  }

  _renderContainerElement() {
    this._containerElement = document.createElement("li");
    this._containerElement.classList.add("slide_banner_homepage");
    if (this._isActive) {
      this.setActive();
    }
    this._setStyles();
  }

  _renderImageElement() {
    const imgElement = document.createElement("img");
    imgElement.classList.add("slide-img-banner-homepage");
    imgElement.src = this._slideData;
    this._containerElement.append(imgElement);
  }

  _setStyles() {
    for (let style in this._styles) {
      this._containerElement.style[style] = this._styles[style];
    }
  }

  setActive() {
    this._containerElement.classList.add(ACTIVE_CLASS_NAME);
  }

  removeActive() {
    this._containerElement.classList.remove(ACTIVE_CLASS_NAME);
  }
}
