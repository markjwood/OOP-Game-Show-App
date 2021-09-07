/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const overlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('.key');
const phraseUl = document.getElementById('phrase').firstElementChild;

startButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

keyboard.forEach(key => {
  key.addEventListener('click', k => game.handleInteraction(k.target));
});

// physical keyboard functionality
document.addEventListener('keyup', key => {
  const letter = key.key.toLowerCase();

  if (/[a-z]/.test(letter)) {
    for (let k of keyboard) {
      if (k.textContent === letter && !k.disabled) {
        game.handleInteraction(k);
        break;
      };
    }
  }
});