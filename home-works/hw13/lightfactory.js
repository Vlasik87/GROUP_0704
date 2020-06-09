class Lights {
  constructor(root, onClick) {
    this.root = root;
    this.onClick = onClick;
  }

  render() {
    this.lightsElement = document.createElement("div");
    this.lightsElement.classList.add("lights");
    this.lightsElement.addEventListener("click", this.onClick);
    this.root.append(this.lightsElement);
  }
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  return bgColor;
}

export { Lights };
