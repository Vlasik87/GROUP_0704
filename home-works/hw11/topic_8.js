/*var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(100);

var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
var generateRandomInsult = function () {
  var randomBodyParts = ["глаз", "нос", "череп"];
  var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
  var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
  // Соединяем случайные строки в предложение:
  var randomString =
    "У тебя " +
    pickRandomWord(randomBodyParts) +
    " словно " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
};
*/

var add = function (number1, number2) {
  return number1 + number2;
};
var multiply = function (number3, number4) {
  return number3 * number4;
};

add(multiply(36325, 9824), 777);

var areArraysSame = function (opt1, opt2) {
  if (opt1.length !== opt2.length) {
    return false;
  }
  for (var i = 0; i < opt1.length; i++) {
    if (opt1[i] !== opt2[i]) {
      return false;
    }
  }
  for (var i = 0; i < opt1.length; i++) {
    if (opt1[i] === opt2[i]) {
      return true;
    }
  }
};
