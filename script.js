"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function () {
  document.querySelector(".score").textContent = score;
};

const displaySecretNumber = function (num) {
  document.querySelector(".number").textContent = num;
};

const changeBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const changeBoxSize = function (size) {
  document.querySelector(".number").style.width = size;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When no number was input
  if (!guess) {
    displayMessage("No Number!");
  }
  //player wins
  else if (guess == secretNumber) {
    displayMessage("Correct Number");
    displaySecretNumber(secretNumber);
    changeBackgroundColor("#60b347");
    changeBoxSize("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      displayScore();
      //score reaches 0 and game is lost
    } else {
      displayMessage("You lost the game");
      score = 0;
      displayScore();
    }
  }

  //resets everything to default values
  document.querySelector(".again").addEventListener("click", function () {
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayScore();
    displaySecretNumber("?");
    displayMessage("Start guessing....");
    changeBackgroundColor("#222");
    changeBoxSize("15rem");
    document.querySelector(".guess").value = " ";
  });
});
