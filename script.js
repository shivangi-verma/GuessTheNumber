"use strict";
// Steps :
// generate a randomNumber
// get the value from input field
// match the value with the number
//     print the message
//     inc or dec the score

let score = 20;
let highScore = 0;

localStorage.getItem("highScore");
// random number generator funciton
function randomNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

// random Number generated
let randomNumber = randomNumberGenerator();

// let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log("randomNumber : " + randomNumber);

// got the value form input
let userInput = document.querySelector(".guess");

let checkBtn = document.querySelector(".check");

let message = document.querySelector(".message");

let hiddenNumber = document.querySelector(".number");

checkBtn.addEventListener("click", () => {
  let inputNumber = Number(userInput.value);

  console.log(inputNumber, randomNumber);

  if (inputNumber < randomNumber) {
    message.textContent = "Low";
    score--;
  } else if (inputNumber > randomNumber) {
    message.textContent = "High";
    score--;
  } else if (inputNumber == randomNumber) {
    message.textContent = "You Guessed it Right! ✅";
    document.querySelector(".highscore").textContent = score;
    hiddenNumber.textContent = randomNumber;
    
    if (score > highScore) {
      highScore = score;
    }
  }

  document.querySelector(".score").textContent = score;
});

// working of again btn
// generate a new random number
// reset the number to question mark
// empty the input field
// change msg to start guessing
// score = 20
// highscore = 0

let againBtn = document.querySelector(".again");
againBtn.addEventListener("click", () => {
  randomNumber = randomNumberGenerator();
  hiddenNumber.textContent = "?";
  userInput.value = "";
  message.textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;

  console.log("Again clicked !! ");
  console.log("random number gen again : " + randomNumber);
});
