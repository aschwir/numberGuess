"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //When no number was input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    //player wins
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //if guess is greater than the secret number
  } else if (guess > secretNumber) {
    //before score reached 0
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
      //score reaches 0 and game is lost
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
    //if guess is lower than the secret number
  } else {
    //score is above 0
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
      //score reaches 0 and game is lost
    } else {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
    // score--;
    // document.querySelector(".score").textContent = score;
  }
});
