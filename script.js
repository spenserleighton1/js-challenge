submitBtn = document.querySelector('#submit-btn');
clearBtn = document.querySelector('#clear-form-btn');
userInput = document.querySelector('#user-input');
displayFeedback = document.querySelector('#feedback');
displayGuess = document.querySelector('#display-user-guess').innerText = userInput.value;
userInput.addEventListener('keyup', enableButtons);

submitBtn.addEventListener('click', submitGuess);
clearBtn.addEventListener('click', clearGuess);
var num;

window.onload = randomNumber()

function enableButtons() {
  submitBtn.disabled = false
  clearBtn.disabled = false
}

function randomNumber() {
  num = Math.floor(Math.random() * 100) + 1;
}

function clearGuess(e) {
  e.preventDefault();
  userInput.value = ''
};

function submitGuess(e,randoNum) {
  e.preventDefault();
  var userGuess = parseInt(userInput.value);
  checkGuess(userGuess);
};

function checkGuess(guess) {
  if (guess > 100 || guess < 0) {
    displayFeedback.innerText = 'Out of range you idiot.';
  } else if (guess > num) {
    displayFeedback.innerText = 'Guess again dummy! ' + guess + ' is way too high...';
  } else if (guess < num) {
    displayFeedback.innerText = 'Wow, seriously? Get your shit together, ' + guess + ' is pretty low.';
  } else if (guess === num) {
    displayFeedback.innerText = 'Way to go, you finally guessed it, great job.';
  }
};