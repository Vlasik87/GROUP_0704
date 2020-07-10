import { Slide } from "./slides_about.js";
import { Control } from "../scripts/controls_about.js";

export class SectionSliderAbout {
  constructor(root = document.querySelector("#sliderAbout")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      "https://static.wixstatic.com/media/ad420a_38d1e23656b94099a252a25844101942~mv2_d_5700_3804_s_4_2.jpg/v1/fill/w_660,h_531,al_c,q_80,usm_0.66_1.00_0.01/ad420a_38d1e23656b94099a252a25844101942~mv2_d_5700_3804_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_8e8d80c3f6664a6a8ba8f3ac6b9ba018~mv2_d_2157_1438_s_2.jpg/v1/fill/w_660,h_531,al_c,q_80,usm_0.66_1.00_0.01/ad420a_8e8d80c3f6664a6a8ba8f3ac6b9ba018~mv2_d_2157_1438_s_2.webp",
      "https://static.wixstatic.com/media/ad420a_7cdd2653d64044f59e42b037b8f299f7~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_660,h_531,al_c,q_80,usm_0.66_1.00_0.01/ad420a_7cdd2653d64044f59e42b037b8f299f7~mv2_d_5184_3456_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_1a5a2048a4e246638c6203e514686a69~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_660,h_531,al_c,q_80,usm_0.66_1.00_0.01/ad420a_1a5a2048a4e246638c6203e514686a69~mv2_d_5760_3840_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_ac0ac3a3ad134b4abbd9617d6878edb1~mv2_d_5700_3804_s_4_2.jpg/v1/fill/w_660,h_531,al_c,q_80,usm_0.66_1.00_0.01/ad420a_ac0ac3a3ad134b4abbd9617d6878edb1~mv2_d_5700_3804_s_4_2.webp",
    ];
    this._slides = [];
  }

  renderTest() {
    this._renderWhiteSquare();
    this._renderSvgicon();
    this._renderSliderContainer();
    this._renderSlidesUl();
    this._renderControls();
  }

  _renderSlidesUl() {
    this._ul = document.createElement("ul");
    this._ul.classList.add("slideshow-slides");
    this._slides = this._data.map(
      (item, i) =>
        new Slide(
          this._ul,
          item,
          { transform: `translateX(-${100 * i}%)` },
          i === this._activeSlide
        )
    );
    this._sliderElem.append(this._ul);
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

    this._sliderElem.append(controlsWrapper);
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
