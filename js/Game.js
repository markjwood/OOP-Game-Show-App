/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @returns {array} An array of phrase objects
   */
  createPhrases() {
    const phrases = [
      'speak of the devil',
      'time flies when you are having fun',
      'a penny for your thoughts',
      'every cloud has a silver lining',
      'kill two birds with one stone'
    ];
    const phraseObjects = [];
    phrases.forEach(phrase => phraseObjects.push(new Phrase(phrase)));
    return phraseObjects;
  }

  /**
   * Selects random phrase from phrases property
   * @returns {Object} Phrase object to be used
   */
  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }

  /**
   * Begins game by selecting a random phrase
   * then displaying appropriate placeholders
   */
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    const phrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }

  /**
   * Listens for clicks on the onscreen keyboard,
   * captures chosen letter and passes it to checkLetter()
   * to check for a match.
   * Then calls appropriate method to
   * check for a win, remove a life, or
   * end the game.
   */
  handleInteraction() {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
      key.addEventListener('click', e => {
        const letter = e.target.textContent;

        if (this.activePhrase.checkLetter(letter)) {
          this.activePhrase.showMatchedLetter(letter);
          if (this.checkForWin()) this.gameOver(true);
        } else {
          this.removeLife();
        }
      });
    });
  }

  /**
   * Checks for winning move
   * @returns {boolean} True if game has been won
   */
  checkForWin() {
    const letterLis = document.querySelectorAll('li.letter');
    let remainingCount = letterLis.length;

    letterLis.forEach(li => {
      if (li.classList.contains('show')) {
        remainingCount--;
      }
    });
    return remainingCount === 0;
  }

  removeLife() {
    this.missed++;
    const heartLis = document.querySelectorAll('li.tries');
    const remainingLives = heartLis.length - this.missed;
    let heart;

    heartLis.forEach(li => {
      const heartImg = li.firstElementChild;
      if (heartImg.getAttribute('src').includes('liveHeart')) {
        heart = heartImg;
      }
    });
    heart.setAttribute('src', 'images/lostHeart.png');
    
    if (remainingLives === 0) {
      this.gameOver(false);
    }
  }

  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');

    overlay.style.display = 'flex';
    if (gameWon) {
      gameOverMessage.textContent = 'You won! Great job!';
      overlay.classList.remove('start');
      overlay.classList.add('win');
    } else {
      gameOverMessage.textContent = 'You lost. Better luck next time.';
      overlay.classList.remove('start');
      overlay.classList.add('lose');
    }
  }
}