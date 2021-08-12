'use strict';

// Generates a secret number
let secretNumber;
const generateSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(`Secret Number: ${secretNumber}`);
  return secretNumber;
};
generateSecretNumber();

// *********************************
// Refactoring functions

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// *********************************
// Updates the score

let score = 10;
const decreaseScore = function () {
  score--;
  setScore(score);
  //   console.log(score, typeof score);
};

// *********************************
// Highscore Functionality

let highScore = 0;
const updateHighScore = function () {
  // if current score is higher than highscore
  if (score > highScore) {
    // then set the new score as the highscore
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

// *********************************
// When Check answer button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //   console.log(guessedNumber, typeof guessedNumber);

  // When there is no Input
  if (!guessedNumber) {
    setMessage = '⛔ No Number!!';
    console.log(!guessedNumber);

    // When player wins
  } else if (guessedNumber === secretNumber) {
    setMessage('Correct Number! 🎉');
    setBackgroundColor('#60b347');
    setWidth('25rem');
    setNumber(secretNumber);
    updateHighScore();
  }

  // When guessed number is wrong
  else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      decreaseScore();
      setMessage(
        guessedNumber > secretNumber
          ? 'Number too High! ☝'
          : 'Number too Low! 👇'
      );
    } else if (score === 1) {
      decreaseScore();
      setMessage('You Lost!! 🤣');
      setBackgroundColor('#FF4848');
    }
  }
});

// *********************************
// Resets the game

// If we would reload the whole page instead of doing this --> then the high score will also reset.
document.querySelector('.again').addEventListener('click', function () {
  generateSecretNumber();
  score = 10;
  setScore(score);
  setMessage('Start guessing...');
  setNumber('?');
  setWidth('15rem');
  setBackgroundColor('#222');
  document.querySelector('.guess').value = '';
});
