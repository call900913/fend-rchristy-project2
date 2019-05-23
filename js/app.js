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
const resetBtn = document.querySelector('.restart');

let storage = [];
let score = 0;
let count = 0;
let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let starCount = 3;
let proceed = false;

function stopWatch() {
  seconds++;

  if (seconds % 60 === 0) {
    seconds = 0;
    minutes++;

    if (minutes % 60 ===0) {
      minutes = 0;
      hours++;
    }
  }
  document.querySelector('.swBox').textContent = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, 0);
};


function resetFunc() {

  score = 0;
  storage = [];
  seconds = 0;
  minutes = 0;
  hours = 0;
  count = 0;
  window.clearInterval(interval);

  document.querySelectorAll('.card').forEach(element => element.className = "card");
  document.querySelector('.swBox').textContent = '00:00:00';
  document.querySelector('.moves').textContent = 'Click on a card to begin!';
  document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li>\
  <li><i class="fa fa-star"></i></li>\
  <li><i class="fa fa-star"></i></li>';

  selection.addEventListener('click', runGame);

};


function runGame(evt) {
  if (evt.target.className !== 'deck') {

    if (count === 0) {
      interval = window.setInterval(stopWatch, 1000);
      console.log('interval is' + interval)
    }

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
      }
      count++;
      console.log('count is: '+count);
      document.querySelector('.moves').textContent = 'Number of moves: ' + count;
      if (count === 64) {
        document.querySelector('li').remove();
        starCount -= 1;
      } else if (count === 96) {
        document.querySelector('li').remove();
        starCount -= 1;
      }

      console.log('score is: ' + score);

      if (score === 2) {
        selection.removeEventListener('click', runGame);
        let time2 = minutes * 60 + seconds;
        proceed = confirm(`\
        Congratulations! ${starCount} stars out of 3! \n\
        And it took you ${time2} seconds to win the game!\n\
        Click OK to start a new game.\n\
        Click Cancel to stay on the current page.`);
        if (proceed) {
          resetFunc();
        } else {
          window.clearInterval(interval);
        }
      }

    }, 800);


    console.log(storage);


  }
};

resetBtn.addEventListener('click', resetFunc);

selection.addEventListener('click', runGame);














/*
RESET FUNCTIONALITY

document.querySelectorAll('.card').forEach(elenent => element.className = "card");

--------------------------------------------------
// might want to add pause
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopWatch() {

  seconds++;

  if (seconds % 60 === 0) {
    seconds = 0;
    minutes++;

    if (minutes % 60 ===0) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('display').textContent = hours.padStart(2, '0') + ":" + minutes.padStart(2, '0') + ":" + seconds.padStart(2, 0);
}

window.setInterval(stopWatch, 1000);



HTML:

<div class="swContainer">
  <div id="display">
    00:00:00
  </div>

  <div  class="buttons">
    <button id="startstop">start/stop<button> <button id="swreset">reset<button>
  </div>
</div>



.container {
  height: 300px;
  width: 100%;
}


#display {
  width: 100%;

}


.buttons {

}

confirm("

Click OK to start a new game.
");

*/





/*

1.
• the game randomly  shuffles the cards

2.
• modal to ask if user wants to play again?
  prompt or a couple of yes-no buttons.
• tells the user also how much time it  took to win the game.
• what the star rating is

3. (DONE)
• a restart button to reset the game board, the timer, star rating.

4. (DONE)
• game displays a star rating that reflects a player's performance.
• after a number of certain moves, it should  change to a lower star rating.

5. (DONE)
• implement hte move counter that displays the number of moves the user has made.

6. (DONE)
• display timer that stops when the player wins.



code for timer:

window.setInterval(stopWatch, 1000);

consider .padStart();











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
