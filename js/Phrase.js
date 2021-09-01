/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * adds letter placeholders to display
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
}