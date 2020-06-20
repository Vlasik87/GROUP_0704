export class Task {
  constructor(root) {
    this.root = root;
    this.moviesElements = [];
    this.textElements = [];
    this.activeMovieIndex = 0;
    this.fetchData();
  }

  fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/movies");
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      this.render(data);
    };
  }

  render(moviesArray) {
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

  renderMovie(movie) {
    console.log(movie);
    const li = document.createElement("li");
    li.classList.add("movies-list");
    li.innerHTML = `
    <img src="${movie.preview.high}" class="banner")/>
    <div class="genre">${movie.genre}</div>
    <div class="title">${movie.title}</div>
    <p class="description">${movie.description}</p>
    <div class="rating">${movie.rating}</div>
    `;

    return li;
  }
}
