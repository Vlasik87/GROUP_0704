/*1.Обьявить переменную firstName
  Обьвить переменную lastName
  Показать текст 'Hello {firstName} {lastName}'
*/
let firstName = "Mila";
let lastName = "Vlasenko";
console.log("Hello " + firstName + " " + lastName);

/* 2.Показать модальное окно с просьбой ввести имя
  Если пользователь ввел имя admin показать преветственное сообщение
  Если нет то сообщение о неправильности введенных значение */

let user = prompt("Enter your user name");
if (user === "admin") {
  alert("Hello " + user);
} else {
  alert("Incorrect user name");
}

/*3-4. Показать модальное окно с просьбой ввести имя
  Если пользователь ввел имя admin показать преветственное сообщение
  Если нет то снова показать модальное окно с просьбой ввести имя  + ограничить ввод 3-мя попытками */

let userName = prompt("Enter your user name");
let i = 0;

while (
  userName === null ||
  userName === "" ||
  userName === undefined ||
  userName !== "admin"
) {
  if (i > 3) {
    break;
  }
  userName = prompt("Enter your user name");
  i++;
}
alert("hello");

/* 5. Открыть модальное окно с просьюой ввести любое слово
  показать модальное окно с текстом в данном слове n символов */

let anyWord = prompt("Please, enter any word");
alert("В данном слове " + anyWord.length + " символов");

/*8. Запросить у пользователя текст и каждый символ заменить на символ *
пример введенное слово hello преобразовуется в ***** 
*/
let word = prompt("Please, enter any word");
let answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "*";
}
alert(answerArray.join(" "));

/*9. Запросить текст у пользователя если его длина больше чем 4 символов то остальные заменить на ...  'hell...' */
const anyText = prompt("Please, enter any word");
let answerArray = "";
if (anyWord.length > 4) {
  for (let i = 0; i < 4; i++) {
    answerArray += anyText[i];
  }
  answerArray += "...";
} else {
  answerArray = anyText;
}
alert(answerArray);
