# OOP Game Show App

## Description

Treehouse Full-Stack JavaScript Techdegree - Unit 4

A browser-based word guessing game using JavaScript and Object-Oriented Programming.

Chooses a random phrase from an array of phrases and displays placeholders, showing the correct number of letters and spaces in the phrase. The player "guesses" letters, one at a time; if a guessed letter appears in the phrase, it is "revealed" in each spot where it appears. Each time a letter is guessed, that key is disabled on the keyboard and that letter's color changes to indicate that it is no longer available as a choice.

The game ends after 5 incorrect guesses or when the phrase is completed, and a "win" or "lose" message is displayed.

## Additional features
In addition to the onscreen "virtual" keyboard, the game is playable with a normal physical keyboard.

The virtual keyboard is disabled until the game is started. Prior to adding this feature, a user who navigates with the tab key on the computer keyboard could accidentally tab past the "Start Game" button to the virtual keyboard; however, since the virtual keyboard isn't visible, it would be unclear where the keyboard focus is, giving the appearance that keyboard navigation is not working.

## Personalization
I changed the colors of disabled keys on the onscreen keyboard, to make it more apparent that they are disabled. I also added a red border-color to those disabled keys.