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
