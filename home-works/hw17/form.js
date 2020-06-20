export class CreateForm {
  constructor(root) {
    this.root = root;
    this.render();
    this.FetchList();
  }

  FetchList() {
    const xhr = XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/movies");
    xhr.send();

    xhr.onload = () => {
      console.log(xhr);
      const posts = JSON.parse(xhr.response);
      console.log(posts);
      for (let post of posts) {
        this.renderPost(post);
      }
    };
  }

  renderPost(post) {
    const postRoot = document.createElement("div");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");

    h3.textContent = post.title;
    h4.textContent = post.genre;

    postRoot.append(h3);
    postRoot.append(h4);
    //чтоб создавать элемент Только когда есть url с картинкой, а если нет - то не создавался пустой элемент
    if (post.inputImage) {
      const img = document.createElement("img");
      img.src = post.inputImage;
      img.style.width = "150px";
      postRoot.append(img);
    }

    this.root.append(postRoot);
  }

  render() {
    this.form = document.createElement("form");
    this.inputTitle = document.createElement("input");
    this.inputGenre = document.createElement("input");
    this.inputImage = document.createElement("input");
    this.button = document.createElement("button");

    this.inputTitle.placeholder = "Title";
    this.inputGenre.placeholder = "Genre";
    this.inputImage.placeholder = "Img URL";
    this.button.textContent = "Send";
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = this.inputTitle.value;
      const genre = this.inputGenre.value;
      const image = this.inputImage.value;

      console.log({ title, genre, image });

      const xhr = XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/movies");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify({ title, genre, image }));

      xhr.onload = () => {
        console.log(xhr);
        //чтоб пост появлялся автоматически с нажатием кнопки без обновления страницы вызываем опять
        const posts = JSON.parse(xhr.response);
        this.renderPost(post);
      };

      console.log({ title, genre, image });
    });

    this.form.append(this.inputTitle);
    this.form.append(this.inputGenre);
    this.form.append(this.inputImage);
    this.form.append(this.button);
    this.root.append(this.form);
  }
}
