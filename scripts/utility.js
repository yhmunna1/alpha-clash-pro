function hideElementById(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showElementById(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //   console.log(alphabet);

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}

function setBackgroundColorById(id) {
  const element = document.getElementById(id);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(id) {
  const element = document.getElementById(id);
  element.classList.remove("bg-orange-400");
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getElementValeById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}

function setElementValeById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
