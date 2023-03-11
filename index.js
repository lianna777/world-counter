// Находим элемент в HTML, в котором пользователь вводит текст
const textarea = document.querySelector(".userInput");

// Находим элемент в HTML, где будем менять числа
const words = document.querySelector("#words");
const letters = document.querySelector("#letters");
const sentences = document.querySelector("#sentences");

// Находим кнопку, при нажатии на которую, будут считаться данные
const button = document.querySelector(".calc__button");

function counter() {
  if (textarea.value === "") {
    words.innerText = 0;
    sentences.innerText = 0;
    letters.innerText = 0;
  } else {
    countWords();
    countLetters();
    countSentences();
  }
}

function countWords() {
  const string = textarea.value;
  let array = string.split(" ");
  array = array.length;
  words.innerText = array;
}

function countSentences() {
  const string = textarea.value;
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

function countLetters() {
	``
}
