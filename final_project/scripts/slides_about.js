const ACTIVE_CLASS_NAME = "active";

export class Slide {
    constructor(root, image = [], styles = {}, isActive = false) {
        this._root = root;
        this._styles = styles;
        this._isActive = isActive;
        this.render();
    }

    render()

    _renderContainerElement() {
        this._containerElement - document.createElement("li");
        this._containerElement.classList.add("slide");
    }
} 