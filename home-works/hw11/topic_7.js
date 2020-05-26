// Создаем массив со словами
var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "любовь",
  "дружба",
];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var attempts = 10;

// Игровой цикл
while (remainingLetters > 0 && attempts > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  var guessLetter = prompt(
    "Угадайте букву, или нажмите Отмена для выхода из игры."
  );
  var guess = guessLetter.toLowerCase();
  if (guess === null) {
    //Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    attempts--;
    //Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  //Конец игрового цыкла
}

//Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
if (attempts <= 10 && remainingLetters === 0) {
  alert("Отлично! Было загадано слово " + word);
} else {
  alert("Вы превысили количество попыток!");
}
