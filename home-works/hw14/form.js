function createForm() {
  const formContent = document.createElement("form");
  formContent.classList.add("form_content");
  const formTemplate = `
  <label for="">Enter your "To Do List"</label>
        <textarea
          cols="30"
          rows="10"
          class="text_content"
          placeholder="To_do_list"
        ></textarea>
        <button class="btn">Submit</button>
        `;
  formContent.innerHTML = formTemplate;
  return formContent;
}

/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */

const sanitizeHTML = (str) => {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
};

function createList(text) {
  const textContent = document.createElement("div");
  textContent.classList.add("comment");
  textContent.innerHTML = `
  <button class="btn_remove">[x]</button>
  <div class="comment_text"><p>${sanitizeHTML(text)}</p></div>`;
  return textContent;
}

function createPage(root) {
  const form = createForm();

  //отключение автоматического обновления страницы после отправки формы
  form.addEventListener("submit", function (eventObject) {
    eventObject.preventDefault;
    const textArea = eventObject.target[0];
    console.log("submit", textArea.value);
    const list = createList(textArea.value);
    textArea.value = "";
    root.appendChild(list);
  });

  root.onclick = function (event) {
    if (event.target.className != "btn_remove") return;
    let comment = event.target.closest(".comment");
    comment.remove();
  };

  root.appendChild(form);
  console.log(form);
}

export { createPage };
