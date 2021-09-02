/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * adds letter placeholders to game board
   */
  addPhraseToDisplay() {
    const charsArray = this.phrase.split('');
    const phraseUl = document.getElementById('phrase').firstElementChild;

    charsArray.forEach(char => {
      const li = document.createElement('li');
      if (char === ' ') {
        li.className = 'space';
      } else {
        li.classList.add('hide', 'letter', char);
      }
      li.textContent = char;
      phraseUl.appendChild(li);
    });
  }

  /**
   * Checks if selected letter is in the phrase
   * @param {string} letter - the letter to check
   * @returns {boolean} - True if letter is in phrase
   */
  checkLetter(letter) {
    if (document.querySelectorAll('.letter.' + letter).length > 0) {
      return true;
    }
    return false;
  }

  /**
   * Displays letter on screen when a match is found
   * @param {string} letter - letter to display
   */
  showMatchedLetter(letter) {
    const matches = document.querySelectorAll('.letter.' + letter);
    console.log(matches);
    
    matches.forEach(match => {
      match.classList.remove('hide');
      match.classList.add('show');
    });
  }
}