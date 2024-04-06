// function play() {
//   const element = document.getElementById("home-screen");
//   element.classList.add("hidden");
//   const startGame = document.getElementById("start-game");
//   startGame.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // console.log(playerPressed);

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;

  // console.log(alphabet);
  // if (playerPressed === currentAlphabet) {
  //   console.log("correct");
  //   removeBackgroundColorById(playerPressed);
  //   const scoreElementText = document.getElementById("score");
  //   const scoreElement = scoreElementText.innerText;
  //   const score = parseInt(scoreElement);
  //   const newScore = score + 1;
  //   continueGame();
  //   scoreElementText.innerText = newScore;
  // } else {
  //   const lifeElementText = document.getElementById("life");
  //   const lifeElement = lifeElementText.innerText;
  //   const life = parseInt(lifeElement);
  //   const newLife = life - 1;
  //   lifeElementText.innerText = newLife;
  // }
  if (playerPressed === currentAlphabet) {
    console.log("correct");
    removeBackgroundColorById(playerPressed);
    const scoreElementText = getElementValeById("score");
    const newScore = scoreElementText + 1;
    continueGame();
    setElementValeById("score", newScore);
  } else {
    const lifeElementText = getElementValeById("life");
    const newLife = lifeElementText - 1;
    setElementValeById("life", newLife);

    if (newLife === 0) {
      console.log("game over");
      gameOver();
    }
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

function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("start-game");

  // For reset game:
  setElementValeById("life", 5);
  setElementValeById("score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("start-game");
  showElementById("final-score");

  const correctAns = getElementValeById("score");
  console.log(correctAns);
  setElementValeById("correct-ans", correctAns);

  const currentAlphabet = getElementTextById("current-alphabet");
  console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
