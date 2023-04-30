"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number!");
    // document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct answer!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // dry code
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too High!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }

    //wet code
    // if (score > 1) {
    //       document.querySelector(".message").textContent = "Too High!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game!";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too Low!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game!";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //location.reload(); --- will reload th ewhole page and not save the high score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".guess").value = "";
  displayMessage("Start guessing ... ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
