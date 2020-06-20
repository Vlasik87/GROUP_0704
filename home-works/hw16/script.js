export class PostsPage {
  constructor(root) {
    this.root = root;
    this.fetchData();
  }

  fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/posts"
    );
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      this.render(data);
    };
  }

  render(postsArray) {
    for (const post of postsArray) {
      console.log(post);
      const li = document.createElement("li");
      li.innerHTML = `
      <div>
        <h4>${post.title}</h4>
        <img src="${post.img}"/>
        <p>${post.content}</p>
      </div>
      `;
      /*const title = document.createElement("h4");
      const content = document.createElement("p");
      title.textContent = post.title;
      content.textContent = post.content;
      li.append(title);
      li.append(content);*/
      this.root.append(li);
      console.log(li);
    }

    return li;
  }
}
