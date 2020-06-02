/* Задача 1
let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

let generateRandomString = function () {
  let bodyParts = ["ухо", "голова", "язык"];
  let adjectives = ["страшная", "огромная", "волосатая"];
  let animals = ["жаба", "мыша", "горила", "ворона", "обезьяна"];

  let randomString =
    "У тебя " +
    pickRandomWord(bodyParts) +
    " словно " +
    pickRandomWord(adjectives) +
    " " +
    pickRandomWord(animals) +
    "!!!";
  return randomString;
};

generateRandomString(); 


Задача 2
let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

let generateRandomString = function () {
  let bodyParts = ["ухо", "голова", "язык"];
  let adjectives = ["страшная", "огромная", "волосатая"];
  let bodyAnimalParts = ["хвост", "глаз", "нос"];
  let animals = ["жабы", "мыши", "горилы", "вороны", "обезьяны"];

  let randomString =
    "У тебя " +
    pickRandomWord(bodyParts) +
    " еще более " +
    pickRandomWord(adjectives) +
    " чем " +
    pickRandomWord(bodyAnimalParts) +
    " у " +
    pickRandomWord(animals) +
    "!!!";
  return randomString;
};

generateRandomString();

Задача 3 
let bodyParts = ["ухо", "голова", "язык"];
let adjectives = ["страшная", "огромная", "волосатая"];
let animals = ["жаба", "мыша", "горила", "ворона", "обезьяна"];
let bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let randomWord = animals[Math.floor(Math.random() * animals.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomString = [
  "У тебя ",
  bodyPart,
  " словно ",
  adjective,
  " ",
  randomWord,
  "!!!",
].join(" ");

Задача 4 */
let numbers = [3, 2, 1];

let str = [
  numbers[0],
  " больше, чем ",
  numbers[1],
  " больше, чем ",
  numbers[2],
].join("");
