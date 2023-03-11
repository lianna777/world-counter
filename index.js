// Находим элемент в HTML, в котором пользователь вводит текст
const textarea = document.querySelector(".userInput");

// Находим элемент в HTML, где будем менять числа
const words = document.querySelector("#words");
const character = document.querySelector("#characters");
const sentences = document.querySelector("#sentences");

// Находим кнопку, при нажатии на которую, будут считаться данные
const button = document.querySelector(".calc__button");

// Функция-обертка, которая запускает функции внутри
function counter() {
  if (textarea.value == "") {
    words.innerText = 0;
    sentences.innerText = 0;
    character.innerText = 0;
  } else {
    countWords();
    countCharacters();
    countSentences();
  }
}

// Функция, которая считает слова
function countWords() {
  const string = textarea.value;
  let array = string.split(" ");
  array = array.length;
  words.innerText = array;
}

// Функция считает количество предложений
function countSentences() {
  const string = textarea.value;
  // Создаем счетчик, который считает количество предложение в строке
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ".") {
      counter = counter + 1;
    } else if (string[i] == "!") {
      counter = counter + 1;
    } else if (string[i] == "?") {
      counter = counter + 1;
    }
  }
  sentences.innerText = counter;
}

function countCharacters() {
  // Здесь забираем строку из textarea
  const string = textarea.value;
  // Здесь разбиваем на элементы массива по разделителю ''
  const array = string.split("");
  // Создаем счетчик, который считает количество символов
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != " ") {
      counter = counter + 1;
    }
  }
  character.innerText = counter;
}
