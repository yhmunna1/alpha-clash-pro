// function play() {
//   const element = document.getElementById("home-screen");
//   element.classList.add("hidden");
//   const startGame = document.getElementById("start-game");
//   startGame.classList.remove("hidden");
// }
function play() {
  hideElementById("home-screen");
  showElementById("start-game");
  continueGame();
}

function continueGame() {
  const alphabet = getRandomAlphabet();

  // Set Alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerHTML = alphabet;

  // Set Background Color
  setBackgroundColorById(alphabet);
}
