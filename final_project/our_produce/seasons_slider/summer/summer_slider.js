import { Slide } from "../seasons_slides.js";
import { Control } from "../seasons_controls.js";

export class SliderSummer {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      "https://static.wixstatic.com/media/ad420a_47ee5a5bac624a0cb441faedf520d087~mv2_d_2500_1662_s_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_47ee5a5bac624a0cb441faedf520d087~mv2_d_2500_1662_s_2.webp",
      "https://static.wixstatic.com/media/ad420a_d7374f1d4f5748ab86cc1d789ffd705c~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_d7374f1d4f5748ab86cc1d789ffd705c~mv2_d_5760_3840_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_0f9b00b04e4041b5a7061e4eb72d0733~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_0f9b00b04e4041b5a7061e4eb72d0733~mv2_d_3024_4032_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_51efef84707c40079f7ec4cc72ceb15e~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_51efef84707c40079f7ec4cc72ceb15e~mv2_d_4272_2848_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_6cc4e8b82f74417c95aca4d531198a4c~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.63_0.33,q_90/ad420a_6cc4e8b82f74417c95aca4d531198a4c~mv2_d_5184_3456_s_4_2.webp",
    ];
    this._slides = [];
  }

  renderTest() {
    this._renderSliderContainer();
    this._renderBtnHide();
    this._renderSlidesUl();
    this._renderControls();
  }

  _renderSlidesUl() {
    this._ul = document.createElement("ul");
    this._ul.classList.add("slideshow-slides-seasons");
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

  _renderSliderContainer() {
    this._sliderElem = document.createElement("div");
    this._sliderElem.classList.add("slideshow-container-seasons");
    this._root.append(this._sliderElem);
  }

  _renderBtnHide() {
    this._loginHideBtn = document.createElement("button");
    this._loginHideBtn.classList.add("hide-login-btn");
    this._loginHideBtn.id = "hide-login";
    this._loginHideBtn.innerHTML = `<span class="mdi mdi-close-thick"></span>`;
    this._sliderElem.append(this._loginHideBtn);
  }

  _renderControls() {
    const controlsWrapper = document.createElement("div");
    controlsWrapper.classList.add("slideshow_controls-seasons");
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
