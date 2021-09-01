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
}