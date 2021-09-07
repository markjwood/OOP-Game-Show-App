/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const heartLis = document.querySelectorAll('li.tries');

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
    phrases.forEach(phrase => {
      phrase = phrase.replace(/[^A-Za-z ]/g, '');
      phraseObjects.push(new Phrase(phrase));
    });
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
    const phrase = this.getRandomPhrase();
    
    overlay.style.display = 'none';
    overlay.className = '';
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;

    // reset scoreboard
    heartLis.forEach(li => {
      li.firstElementChild.setAttribute('src', 'images/liveHeart.png');
    });
  }

  /**
   * Listens for clicks on the onscreen keyboard,
   * captures chosen letter and passes it to checkLetter()
   * to check for a match.
   * Then calls appropriate method to
   * check for a win, remove a life, or
   * end the game.
   */
  handleInteraction(key) {
    const letter = key.textContent;
    key.disabled = true;

    if (this.activePhrase.checkLetter(letter)) {
      key.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);

      if (this.checkForWin()) this.gameOver(true);
    } else {
      key.classList.add('wrong');
      this.removeLife();
    }
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

  /**
   * Increases the value of the 'missed' property
   * Removes a life from the scoreboard
   * Checks if the player has remaining lives & ends game if not
   */
  removeLife() {
    this.missed++;
    const remainingLives = heartLis.length - this.missed;
    let heart;


    // get the last 'liveHeart' & change to 'lostHeart'
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

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const gameOverMessage = document.getElementById('game-over-message');

    // re-enable disabled keys
    keyboard.forEach(key => {
      key.disabled = false;
      key.classList.remove('wrong', 'chosen');
    });
    
    // clear phrase
    phraseUl.innerHTML = '';

    overlay.style.display = 'flex';
    if (gameWon) {
      gameOverMessage.textContent = 'You won! Great job!';
      overlay.classList.remove('start', 'lose');
      overlay.classList.add('win');
    } else {
      gameOverMessage.textContent = 'You lost. Better luck next time.';
      overlay.classList.remove('start', 'win');
      overlay.classList.add('lose');
    }
  }
}