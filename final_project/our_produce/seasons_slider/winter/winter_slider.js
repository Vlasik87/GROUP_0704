import { Slide } from "../seasons_slides.js";
import { Control } from "../seasons_controls.js";

export class SliderWinter {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      "https://static.wixstatic.com/media/ad420a_6aaef85bf6774cb0a905da973cff61e8~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_6aaef85bf6774cb0a905da973cff61e8~mv2_d_6000_4000_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_6bf65c80bef246ed82af0b1c747f70ff~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_460,h_447,fp_0.50_0.50,q_90/ad420a_6bf65c80bef246ed82af0b1c747f70ff~mv2_d_6000_4000_s_4_2.jpg",
      "https://static.wixstatic.com/media/ad420a_78bfa6b8af174abb934e16d02eafacbe~mv2_d_1734_2131_s_2.jpg/v1/fill/w_592,h_727,fp_0.50_0.50,q_90/ad420a_78bfa6b8af174abb934e16d02eafacbe~mv2_d_1734_2131_s_2.webp",
      "https://static.wixstatic.com/media/ad420a_312735f74ee74be59c8a2452150d94c3~mv2_d_1544_1994_s_2.jpg/v1/fill/w_563,h_727,fp_0.50_0.50,q_90/ad420a_312735f74ee74be59c8a2452150d94c3~mv2_d_1544_1994_s_2.webp",
      "https://static.wixstatic.com/media/ad420a_2a1b21e133294dd5b6247c62ac898ca8~mv2_d_2848_4288_s_4_2.jpg/v1/fill/w_483,h_727,fp_0.50_0.50,q_90/ad420a_2a1b21e133294dd5b6247c62ac898ca8~mv2_d_2848_4288_s_4_2.webp",
    ];
    this._slides = [];
  }

  renderTest() {
    this._renderSliderContainer();
    this._renderBtnHide();
    this._renderSlidesUl();
    this._renderControls();
    this._hidePage();
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
    this._loginHideBtn.classList.add("hide-seasons-btn");
    this._loginHideBtn.id = "hide-season";
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

  _hidePage() {
    this._hideBtn = document.querySelector("#hide-season");
    this._hideBtn.addEventListener("click", () => {
      window.location.href = "../../index.html";
    });
  }
}
