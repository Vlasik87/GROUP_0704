export class PhotoSection {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderGreenContainer();
    this._renderBigImage();
  }

  _renderGreenContainer() {
    this._greenBox = document.createElement("div");
    this._greenBox.classList.add("photo-conteiner-content");
    this._greenBox.innerHTML = `
         <div class="image-wrapper-green">
         <img src="https://static.wixstatic.com/media/ad420a_a28d302b2cba4d88adeb9bc4f4692d3d~mv2_d_5700_3804_s_4_2.jpg/v1/fill/w_488,h_335,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-916358088.webp" alt="">
         </div>
      `;
    this._root.append(this._greenBox);
  }

  _renderBigImage() {
    this._bigImage = document.createElement("div");
    this._bigImage.classList.add("photo-conteiner-content");
    this._bigImage.innerHTML = `
           <div class="image-wrapper">
           <img class="static-image" src="https://static.wixstatic.com/media/ad420a_3a81fba6eaac4f47bc45e66572c0bda2~mv2_d_5700_3804_s_4_2.jpg/v1/fill/w_551,h_866,al_c,q_85,usm_0.66_1.00_0.01/ad420a_3a81fba6eaac4f47bc45e66572c0bda2~mv2_d_5700_3804_s_4_2.webp" alt="">
           </div>
        `;
    this._root.append(this._bigImage);
  }
}
