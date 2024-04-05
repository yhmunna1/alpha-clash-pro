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

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // console.log(playerPressed);

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  // console.log(alphabet);
  if (playerPressed === currentAlphabet) {
    console.log("currect");
    removeBackgroundColorById(playerPressed);
    continueGame();
  } else {
    console.log("wrong");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();

  // Set Alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerHTML = alphabet;

  // Set Background Color
  setBackgroundColorById(alphabet);
}
