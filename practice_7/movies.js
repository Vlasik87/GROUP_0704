export class Task {
  constructor(root) {
    this.root = root;
    this.moviesElements = [];
    this.textElements = [];
    this.activeMovieIndex = 2;
    this.fetchData();
  }

  fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/movies");
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      this.renderBaner(data);
      this.renderText(data);
    };
  }

  renderBaner(moviesArray) {
    for (let i = 0; i < moviesArray.length; i++) {
      console.log(i);
      const element = this.renderMovie(moviesArray[i]);
      if (i === this.activeMovieIndex) {
        element.classList.add("active");
      }
      this.root.append(element);
      this.moviesElements.push(element);
    }
    console.log("Rendered", this.moviesElements);
  }

  renderText(textArray) {
    for (let i = 0; i < textArray.length; i++) {
      console.log(i);
      const textElement = this.renderMovieText(textArray[i]);
      if (i === this.activeMovieIndex) {
        textElement.classList.add("active");
      }
      this.root.append(textElement);
      this.textElements.push(textElement);
    }
    console.log("Rendered", this.textElements);
  }

  renderMovie(movie) {
    console.log(movie);
    const li = document.createElement("li");
    li.classList.add("movies-list");
    const img = document.createElement("img");
    img.classList.add("banner");
    img.src = movie.preview.high;
    li.append(img);

    return li;
  }

  renderMovieText(text) {
    console.log(text);
    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    const genre = document.createElement("p");
    genre.classList.add("genre");
    genre.textContent = text.genre;
    textBox.append(genre);
    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = text.title;
    textBox.append(title);
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = text.description;
    textBox.append(description);
    const rating = document.createElement("p");
    rating.classList.add("rating");
    rating.textContent = text.rating;
    textBox.append(rating);

    return textBox;
  }
}
