import { Slide } from "./slide.js";
import { Control } from "./controls.js";

const SOURCE_URL =
  "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads";

export class SlideShow {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [];
    this._slides = [];
  }

  async init() {
    this._renderContainer();
    await this._fetchData();
    console.log(this._data);
    this._renderSlides();
    this._renderControls();
  }

  _renderSlides() {
    const ul = document.createElement("ul");
    ul.classList.add("slideshow_slides");
    this._slides = this._data.map(
      (item, i) =>
        new Slide(
          ul,
          item,
          {
            transform: `translateX(-${100 * i}%)`,
          },
          i === this._activeSlide
        )
    );
    this._container.append(ul);
  }

  _renderContainer() {
    this._container = document.createElement("div");
    this._container.classList.add("slideshow");
    this._root.append(this._container);
  }

  _renderControls() {
    const controlsWrapper = document.createElement("div");
    controlsWrapper.classList.add("slideshow_controls");
    const controls = [
      {
        title: "<",
        onClick: () => this._previosSlide(),
      },
      {
        title: ">",
        onClick: () => this._nextSlide(),
      },
    ];
    controls.forEach(
      ({ title, onClick }) => new Control(controlsWrapper, title, onClick)
    );

    this._container.append(controlsWrapper);
  }

  async _fetchData() {
    const response = await fetch(SOURCE_URL);
    const list = await response.json();
    this._data = list;
  }

  _increaseIndex() {
    if (this._activeSlide + 1 < this._slides.length) {
      this._activeSlide += 1;
    } else {
      this._activeSlide = 0;
    }
  }

  _decreaseIndex() {
    if (this._activeSlide - 1 >= 0) {
      this._activeSlide -= 1;
    } else {
      this._activeSlide = this._slides.length - 1;
    }
  }

  _previosSlide() {
    this._hideSlide();
    this._decreaseIndex();
    this._showSlide();
  }

  _nextSlide() {
    this._hideSlide();
    this._increaseIndex();
    this._showSlide();
  }

  _showSlide() {
    this._slides[this._activeSlide].setActive();
  }

  _hideSlide() {
    this._slides[this._activeSlide].removeActive();
  }
}
