function rollDice() {
  const diceSound = new Audio("sounds/roll.mp3");
  diceSound.play();

  const dice1El = document.getElementById("dice1");
  const dice2El = document.getElementById("dice2");

  dice1El.classList.add("dice-roll");
  dice2El.classList.add("dice-roll");

  setTimeout(() => {
    dice1El.classList.remove("dice-roll");
    dice2El.classList.remove("dice-roll");
  }, 500);

  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  dice1El.src = `images/dice${dice1}.png`;
  dice2El.src = `images/dice${dice2}.png`;

  const resultText = document.getElementById("result");
  if (dice1 > dice2) {
    resultText.textContent = "🎉 Player 1 Wins!";
  } else if (dice2 > dice1) {
    resultText.textContent = "🎉 Player 2 Wins!";
  } else {
    resultText.textContent = "🤝 It's a Draw!";
  }
}
