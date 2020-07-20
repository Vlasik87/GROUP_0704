import { SlideHomePage } from "./slides_banner.js";
import { Control } from "./controls_banner.js";

export class SectionSliderBannerHome {
  constructor(root = document.querySelector(".baner_slider")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      "https://static.wixstatic.com/media/ad420a_504f6c7af23a40d096817ce8903c6c5e~mv2_d_6240_4160_s_4_2.jpg/v1/fill/w_980,h_750,al_c,q_85,usm_0.66_1.00_0.01/ad420a_504f6c7af23a40d096817ce8903c6c5e~mv2_d_6240_4160_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.jpg/v1/fill/w_980,h_750,al_c,q_85,usm_0.66_1.00_0.01/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_35126ea55d8249c08c638a8478dada30~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_980,h_750,al_c,q_85,usm_0.66_1.00_0.01/ad420a_35126ea55d8249c08c638a8478dada30~mv2_d_4032_3024_s_4_2.webp",
      "https://static.wixstatic.com/media/ad420a_66bb032f4e6e4ab6adf8d2642f5000e0~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_980,h_750,al_c,q_85,usm_0.66_1.00_0.01/ad420a_66bb032f4e6e4ab6adf8d2642f5000e0~mv2_d_5472_3648_s_4_2.webp",
    ];
    this._slides = [];
    this._slideIndex = 1;
  }

  renderTest() {
    this._renderSliderContainer();
    this._renderSlidesUl();
    this._renderControls();
    this._renderBannerTextBox();
    this._renderShowSlides(this._slideIndex);
    this._startSlide();
  }

  _renderSlidesUl() {
    this._ul = document.createElement("ul");
    this._ul.classList.add("slideshow-slides-banner");
    this._slides = this._data.map(
      (item, i) =>
        new SlideHomePage(
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
    this._sliderElem.classList.add("banner-wrap");
    this._root.append(this._sliderElem);
  }

  _renderBannerTextBox() {
    const textwrap = document.createElement("div");
    textwrap.classList.add("text-banner-wrap");
    textwrap.innerHTML = `
      <h2 class="text-title-banner">Welcome </br>
      to Our Farm </h2>
      <span class="undertext-banner">Fresh | Organic | Local </span>
      <button class="banner-button"> Learn More </button>
      `;
    this._sliderElem.append(textwrap);
  }

  _renderControls() {
    const controlsWrapper = document.createElement("div");
    controlsWrapper.classList.add("slideshow_controls-banner");
    const controls = [
      {
        title: "",
        onClick: () => this._renderCurrentSlide(1),
      },
      {
        title: "",
        onClick: () => this._renderCurrentSlide(2),
      },
      {
        title: "",
        onClick: () => this._renderCurrentSlide(3),
      },
      {
        title: "",
        onClick: () => this._renderCurrentSlide(4),
      },
    ];
    controls.forEach(
      ({ title, onClick }) => new Control(controlsWrapper, title, onClick)
    );

    this._sliderElem.append(controlsWrapper);
  }

  _renderCurrentSlide(n) {
    this._renderShowSlides((this._slideIndex = n));
  }

  _renderShowSlides(n) {
    this._dots = document.querySelectorAll(".dot");
    if (n > this._slides.length) {
      this._slideIndex = 1;
    }
    if (n < 1) {
      this._slideIndex = this._slides.length;
    }
    for (let i = 0; i < this._slides.length; i++) {
      this._slides[i].removeActive();
    }
    for (let i = 0; i < this._dots.length; i++) {
      this._dots[i].className = this._dots[i].className.replace("active", "");
    }
    this._slides[this._slideIndex - 1].setActive();
    this._dots[this._slideIndex - 1].classList.add("active");
  }

  _showSlide() {
    this._slides[this._activeSlide].setActive();
    this._dots[this._slideIndex].classList.add("active");
  }

  _hideSlide() {
    this._slides[this._activeSlide].removeActive();
    for (let i = 0; i < this._dots.length; i++) {
      this._dots[i].className = this._dots[i].className.replace("active", "");
    }
  }

  _nextSlideToggle() {
    if (this._activeSlide < this._slides.length - 1) {
      this._activeSlide++;
    } else {
      this._activeSlide = 0;
    }
    if (this._slideIndex < this._dots.length - 1) {
      this._slideIndex++;
    } else {
      this._slideIndex = 0;
    }
  }

  _startSlide() {
    const animationInterval = 3000;
    setInterval(() => {
      this._hideSlide();
      this._nextSlideToggle();
      this._showSlide();
    }, animationInterval);
  }
}
