export class SideContainerJoin {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderSideConteiner();
    this._renderHideSideBtn();
    this._renderSideTitle();
    this._renderInputsContainer();
    this._renderFormJoin();
    this._renderSubmitBtn();
    this._root.append(this._sideConteiner);
    this._openSide();
    this._hideSide();
  }

  _renderSideConteiner() {
    this._sideConteiner = document.createElement("div");
    this._sideConteiner.classList.add("joinUs-side-conteiner");
  }

  _renderHideSideBtn() {
    this._hideSideBtn = document.createElement("button");
    this._hideSideBtn.classList.add("hide-side-btn");
    this._hideSideBtn.id = "hide-button";
    this._hideSideBtn.innerHTML = `<span class="mdi mdi-close-thick"></span>`;
    this._sideConteiner.append(this._hideSideBtn);
  }

  _renderSideTitle() {
    this._sideTitle = document.createElement("div");
    this._sideTitle.classList.add("side-title");
    this._sideTitle.innerHTML = `<h3>Join Our Farm CSA </br>Program</h3>`;
    this._sideConteiner.append(this._sideTitle);
  }

  _renderInputsContainer() {
    this._inputsConteiner = document.createElement("div");
    this._inputsConteiner.classList.add("inputs-container");
    this._inputsConteiner.innerHTML = `<div class="inputs-area">
        <div class="input-wrapper">
          <label for="name">Enter Your First Name </label>
          <input type="text" placeholder="First Name" id="name">
        </div>
        <div class="input-wrapper">
          <label for="email">Enter Your Email* </label>
          <input type="text" placeholder="Email" id="email">
        </div>
        <div class="input-wrapper">
          <label for="city">Enter Your City </label>
          <input type="text" placeholder="City" id="city">
        </div>
      </div>
      <div class="inputs-area">
        <div class="input-wrapper">
          <label for="lastname">Enter Your Last Name </label>
          <input type="text" placeholder="Last Name" id="lastname">
        </div>
        <div class="input-wrapper">
          <label class="phone-label" for="phone">Enter Your Phone </label>
          <input type="tel" placeholder="Phone" id="phone">
        </div>
        <div class="input-wrapper">
          <label for="state">Enter Your State </label>
          <input type="text" placeholder="State" id="state">
        </div>
      </div>`;
    this._sideConteiner.append(this._inputsConteiner);
  }

  _renderFormJoin() {
    this._formJoin = document.createElement("form");
    this._formJoin.innerHTML = `<fieldset>
        <legend>Choose the package that Fits your Family*</legend>
          <div>
            <input type="checkbox" id="weekly" name="package" value="weekly">
            <label for="weekly">Weekly Share</label>
          </div>
          <div>
            <input type="checkbox" id="bi-weekly" name="package" value="bi-weekly">
            <label for="bi-weekly">Bi-Weekly Share</label>
          </div>
          <div>
            <input type="checkbox" id="wholesome" name="package" value="wholesome">
            <label for="wholesome">Wholesome Family Package</label>
          </div>
        </fieldset>`;
    this._sideConteiner.append(this._formJoin);
  }

  _renderSubmitBtn() {
    this._submitBtn = document.createElement("button");
    this._submitBtn.classList.add("submit-btn");
    this._submitBtn.textContent = "Sumbit";
    this._sideConteiner.append(this._submitBtn);
  }

  _openSide() {
    this._joinSideBlock = document.querySelector(".joinUs-side-conteiner-root");
    this._joinUsBtn = document.querySelector(".joinus-btn");
    this._joinUsBtn.addEventListener("click", () => {
      this._joinSideBlock.classList.add("active");
      this._joinUsBtn.classList.add("inactive");
    });
  }

  _hideSide() {
    this._sideBlockHide = document.querySelector("#hide-button");
    this._sideBlockHide.addEventListener("click", () => {
      this._joinSideBlock.classList.remove("active");
      this._joinUsBtn.classList.remove("inactive");
    });
  }
}
