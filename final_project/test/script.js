export class SliderAutumn {
  constructor(root = document.querySelector("body")) {
    this._root = root;
    this._activeSlide = 1;
    this._data = [
      {
        image:
          "https://static.wixstatic.com/media/ad420a_ec5952a73d0a4fbba1ddf542f0aefa81~mv2_d_2401_2000_s_2.jpg/v1/fill/w_448,h_447,fp_0.46_0.49,q_90/ad420a_ec5952a73d0a4fbba1ddf542f0aefa81~mv2_d_2401_2000_s_2.jpg",
        title: "Carrots",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_21cad799467a453bba7785fdb6b3e694~mv2_d_2338_1590_s_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_21cad799467a453bba7785fdb6b3e694~mv2_d_2338_1590_s_2.jpg",
        title: "Brussels Sprouts",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_dd27ea88b63b452788c0ac08f6830ce0~mv2_d_3936_2624_s_4_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_dd27ea88b63b452788c0ac08f6830ce0~mv2_d_3936_2624_s_4_2.jpg",
        title: "Apples",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_5dd3d63b5f4f49398d13209bcafe224c~mv2_d_7952_5304_s_4_2.jpg/v1/fill/w_448,h_447,fp_0.50_0.50,q_90/ad420a_5dd3d63b5f4f49398d13209bcafe224c~mv2_d_7952_5304_s_4_2.jpg",
        title: "Cabbage",
      },
      {
        image:
          "https://static.wixstatic.com/media/ad420a_59d43270c1b1463fa5e7780a0fb81f18~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_703,h_468,fp_0.50_0.50,q_90/ad420a_59d43270c1b1463fa5e7780a0fb81f18~mv2_d_5760_3840_s_4_2.webp",
        title: "Kale",
      },
    ];
    this._slides = [];
  }

  renderSlidesUl() {
    this._slides = this._data.map((item, i, arr) => {
      return ${item.image}:${item.title};
    });
    console.log(this._slides);
  }
}
