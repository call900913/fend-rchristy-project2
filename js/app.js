/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const selection = document.querySelector('.deck');

let storage = [];
let score = 1;

function runGame(evt) {
  evt.target.classList.toggle('open');
  evt.target.classList.toggle('show');
  if (evt.target.nodeName.toLowerCase() === 'i') {
    evt.target.parentElement.classList.toggle('open');
    evt.target.parentElement.classList.toggle('show');
  }

  storage.push(evt.target.firstElementChild);
  console.log(storage.length);

  setTimeout(function() {
    if (storage.length >= 2) {
      if (storage[0].classList[1] !== storage[1].classList[1]) {
        storage[0].parentElement.classList.toggle('open');
        storage[0].parentElement.classList.toggle('show');
        storage[1].parentElement.classList.toggle('open');
        storage[1].parentElement.classList.toggle('show');
      } else {
        storage[0].parentElement.classList.toggle('match');
        storage[1].parentElement.classList.toggle('match');
        score += 1;
      }
      storage.length = 0;
      if (score === 8) {
        alert('You won');
        selection.removeEventListener('click', runGame);
      }
      console.log(storage);
    }
  }, 900);
};

selection.addEventListener('click', runGame);







/*

.classList[1]

if (storage.length > 0) {
  if (evt.target.firstElementChild.classList[1] !== storage[0]) {
    evt.target.classList.toggle('open');
    evt.target.classList.toggle('show');
  }
}

The user clicks, the card shows up.

Then the name is saved

Now you compare it with the name inside there if hte length is 1.


  console.log(typeof(evt.target.classList[0])); // string






const test1 = document.querySelector('.fa-diamond');
console.log(test1.className); // returns a string
console.log(test1.classList); // returns a DOMTokenList -- it's an array-like structure


*/


/*


1. They click on something

2. then they click on another square

3. the thing then gets matched.


*/

// store the name of the icon


// compare it with the next icon


// what happens if they match?
// match gets toggleed open and it no longer responds to clicks.

// what happens if they dont' match?
// 'open show' gets toggled off



















/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
