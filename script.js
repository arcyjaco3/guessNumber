'use strict';

let numberSecret;
let count = 0;
let inputValue;
let scoreValue = 0;
let highScoreValue = 720;
let startValue = 0;

const score = document.querySelector('#score');
const messageCheck = document.querySelector('.message');
const highScore = document.querySelector(".highscore")

highScore.textContent = highScoreValue;

function drawNumber() {
    numberSecret = Math.floor(Math.random() * 20) + 1;
}
drawNumber();
console.log(numberSecret);

const btnAgain = document.getElementById('again');
btnAgain.addEventListener("click", () => {
    drawNumber();
    console.log(numberSecret);
    inputGuess.value = startValue;
    messageCheck.textContent = 'Start guessing...';
    count = 0;

});

const inputGuess = document.getElementById("input_Guess");
inputGuess.addEventListener("input", (event) => {
    inputValue = event.target.value;

});

function updatePoints() {
    const pointsToAdd = 10 - count;
    scoreValue += pointsToAdd;

    if (scoreValue > highScoreValue) {
        highScoreValue = scoreValue;

        highScore.textContent = highScoreValue;
    }

    score.textContent = scoreValue;

}


const checkNumber = document.getElementById("btn_check");
checkNumber.addEventListener("click", function () {
    count++;

    const guess = Number(document.querySelector('.guess').value);

    const guessAbs = Math.abs(numberSecret - guess)

    console.log(guess, typeof guess);
    if (!guess) {
        messageCheck.textContent = "that is not a number"
    }
    else if (guess > 20 || guess < 0) {
        messageCheck.textContent = 'number is to low or to high'
    }
    else if (numberSecret === guess) {
        messageCheck.textContent = 'that is correct number!'
        updatePoints();
    }
    else if (guessAbs <= 5) {
        messageCheck.textContent = 'you are so close';
    }
    else if (guessAbs >= 5) {
        messageCheck.textContent = 'very far number'
    }



});








