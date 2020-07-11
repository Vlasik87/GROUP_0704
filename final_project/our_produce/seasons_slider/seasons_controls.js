export class Control {
  constructor(root, title, onClick) {
    this._root = root;
    this._title = title;
    this._clickHandler = onClick;
    this.render();
  }

  render() {
    this._control = document.createElement("button");
    this._control.classList.add("control-seasons");
    this._control.innerHTML = `<span>${this._title}</span>`;
    if (this._clickHandler) {
      this._control.addEventListener("click", (e) => this._clickHandler(e));
    }
    this._root.append(this._control);
  }
}
