import { Slide } from "../seasons_slides.js";
import { Control } from "../seasons_controls.js";

export class SliderAutumn {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      {
        image:
          "https://static.wixstatic.com/media/ad420a_ec5952a73d0a4fbba1ddf542f0aefa81~mv2_d_2401_2000_s_2.jpg/v1/fill/w_448,h_447,fp_0.46_0.49,q_90/ad420a_ec5952a73d0a4fbba1ddf542f0aefa81~mv2_d_2401_2000_s_2.jpg",
        title: "Carrots",
        description:
          "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_21cad799467a453bba7785fdb6b3e694~mv2_d_2338_1590_s_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_21cad799467a453bba7785fdb6b3e694~mv2_d_2338_1590_s_2.jpg",
        title: "Brussels Sprouts",
        description:
          "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_dd27ea88b63b452788c0ac08f6830ce0~mv2_d_3936_2624_s_4_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_dd27ea88b63b452788c0ac08f6830ce0~mv2_d_3936_2624_s_4_2.jpg",
        title: "Apples",
        description:
          "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_5dd3d63b5f4f49398d13209bcafe224c~mv2_d_7952_5304_s_4_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_5dd3d63b5f4f49398d13209bcafe224c~mv2_d_7952_5304_s_4_2.jpg",
        title: "Cabbage",
        description:
          "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_59d43270c1b1463fa5e7780a0fb81f18~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_703,h_468,fp_0.50_0.50,q_90/ad420a_59d43270c1b1463fa5e7780a0fb81f18~mv2_d_5760_3840_s_4_2.webp",
        title: "Kale",
        description:
          "Describe your image here. Use catchy text to tell people the story behind the photo. Go to “Manage Media” to add your content.",
      },
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
          item.image,
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
