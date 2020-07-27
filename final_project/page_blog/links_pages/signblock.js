export class SignBlock {
    constructor(root) {
        this._root = root;
        this.render();
    }

    render()

    renderLeftDiv() {
        this._leftDiv = document.createElement("div");
        this._leftDiv.classList.add("leftDiv");
        this._leftDiv.innerHTML = `
        `;
    }
}