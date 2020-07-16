export class SectionProduce {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    console.log("hi");
    this._renderWhiteContainer();
    this._renderSvg();
    this._renderSliderBox();
    this._renderButton();
  }

  _renderWhiteContainer() {
    this._whiteBox = document.createElement("div");
    this._whiteBox.classList.add("white-container");
    this._whiteBox.innerHTML = `
                <div class="line-before"></div>
                <div class="title-wrapper">
                <h2 class="title">Season's Produce </h2>
                </div>
  `;
    this._root.append(this._whiteBox);
  }

  _renderSvg() {
    const svg = document.createElement("img");
    svg.classList.add("svg-img");
    svg.src = "../icons/circle-santa.svg";
    this._root.append(svg);
  }

  _renderSliderBox() {
    this._sliderBox = document.createElement("div");
    this._sliderBox.classList.add("slideshow");
    this._sliderBox.innerHTML = `
    <div class="mySlides fade">
    <img src="./Screenshot_1.png" alt="">
    </div>
    `;
    this._root.append(this._sliderBox);
  }

  _renderButton() {
    this._button = document.createElement("button");
    this._button.classList.add("button-produce");
    this._button.textContent = "View All Produce";
    this._root.append(this._button);
  }
}
