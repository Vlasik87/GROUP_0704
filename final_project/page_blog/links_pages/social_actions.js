export class SocialActions {
  constructor(root) {
    this._root = root;
    this.render();
  }

  render() {
    this._renderUnderTextBlockLine();
    this._renderUnderTextBlockLineLow();
    this._Redirect();
  }

  _renderUnderTextBlockLine() {
    this._underTextBlockLine = document.createElement("div");
    this._underTextBlockLine.classList.add("undertextBlockLine");
    const socialActions = document.createElement("div");
    socialActions.classList.add("social-actions");
    socialActions.innerHTML = `
              <a href="https://www.facebook.com/"><span class="mdi mdi-facebook"></span></a>
              <a href="https://twitter.com/"><span class="mdi mdi-twitter"></span></a>
              <a href="https://www.linkedin.com/"><span class="mdi mdi-linkedin"></span></a>
              <a href="#"><span class="mdi mdi-link-variant"></span></a>
        `;
    this._news = document.createElement("a");
    this._news.id = "redirect";
    this._news.textContent = "News";
    this._underTextBlockLine.append(socialActions);
    this._underTextBlockLine.append(this._news);
    this._root.append(this._underTextBlockLine);
  }

  _renderUnderTextBlockLineLow() {
    this._underTextBlockLineLow = document.createElement("div");
    this._underTextBlockLineLow.classList.add("undertextBlockLine");
    const spanViews = document.createElement("span");
    spanViews.classList.add("views");
    spanViews.textContent = "6 Views";
    const button = document.createElement("button");
    button.classList.add("like");
    button.innerHTML = `
    <span class="mdi mdi-heart-outline"></span>`;
    this._underTextBlockLineLow.append(spanViews);
    this._underTextBlockLineLow.append(button);
    this._root.append(this._underTextBlockLineLow);
  }

  _Redirect() {
    this._redirect = document.querySelector("#redirect");
    this._redirect.addEventListener("click", () => {
      window.location.href = "../news/index.html";
    });
  }
}
