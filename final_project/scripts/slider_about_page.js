export class SectionSliderAbout {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderWhiteSquare();
    this._renderSvgicon();
    this._renderSliderContainer();
  }

  _renderWhiteSquare() {
    this._whiteElem = document.createElement("div");
    this._whiteElem.classList.add("white-wrap");
    this._root.append(this._whiteElem);
  }

  _renderSvgicon() {
    const svgElem = document.createElement("img");
    svgElem.classList.add("svgicon-img");
    svgElem.src = "../icons/circle-santa.svg";
    this._root.append(svgElem);
  }

  _renderSliderContainer() {
    this._sliderElem = document.createElement("div");
    this._sliderElem.classList.add("slideshow-container");
    this._root.append(this._sliderElem);
  }
}
