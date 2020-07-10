export class LoginForm {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderButton();
    this._renderForm();
    this._openform();
    this._hideForm();
  }

  _renderButton() {
    this._loginHideBtn = document.createElement("button");
    this._loginHideBtn.classList.add("hide-login-btn");
    this._loginHideBtn.id = "hide-login";
    this._loginHideBtn.innerHTML = `<span class="mdi mdi-close-thick"></span>`;
    this._root.append(this._loginHideBtn);
  }

  _renderForm() {
    this._formElem = document.createElement("form");
    this._formElem.classList.add("login");
    this._formElem.method = "Post";
    this._formElem.innerHTML = `
      <h2 class="form-title">Sign Up</h2>
        <span>Already a member?<a href="#">Log In</a></span>
        <button class="facebook">
        <span class=" icon-facebook mdi mdi-facebook"></span>
          Sign up with Facebook</button>
        <button class="google"><span class="icon-google mdi mdi-google"></span>Sign up with Google</button>
        <span class="or">or</span>
        <button class="mail">Sign up with Email</button>
        <div>
          <input type="checkbox" id="form-checkbox">
          <label class="label-checkbox" for="form-checkbox">Join this site’s community. <a href="#">Read more</a></label>
        </div>`;
    this._root.append(this._formElem);
  }

  _openform() {
    this._loginform = document.querySelector(".login-form");
    this._joinUsElem = document.querySelector(".joinus-btn");
    this._loginBtn = document.querySelector(".login-btn");
    this._loginBtn.addEventListener("click", () => {
      this._loginform.classList.add("active");
      this._joinUsElem.classList.add("inactive");
    });
  }

  _hideForm() {
    this._loginHide = document.querySelector("#hide-login");
    this._loginHide.addEventListener("click", () => {
      this._loginform.classList.remove("active");
      this._joinUsElem.classList.remove("inactive");
    });
  }
}
