/*
 * Create a list that holds all of your cards
 */
const deck = document.querySelector('.deck');
//const cards = document.querySelectorAll('.card li');

console.log(deck);

deck.addEventListener('click', function () {
    const card = event.target;
    if (validCard) {
        openCloseCard(card);
        console.log(card);
        return card;
    }
});

// don't change classes if not card
function validCard(card) {
    card.classList.contains('card');
}

function openCloseCard(card) {
    if (card.classList.contains('card')) {
        card.classList.toggle('open');
        card.classList.toggle('show');
    }
}


/*
// iterate through cards
for (let card of cards) {
    // do something
    Array.from(card);
    // tests
    //console.log(card);
}
*/

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/*
 - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) */

/* function openCardList() {
    openCards = [];
    Array.from(card);
} */

/* set up the event listener for a card. If a card is clicked:
  - display the card's symbol (put this functionality in another function that you call from this one)
 */

/*  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
