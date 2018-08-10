// list that holds deck
const deck = document.querySelector('.deck');

// define card
const card = document.querySelectorAll('.card li');

// empty array for open cards
let openCards = [];

// Event listener
deck.addEventListener('click', function () {
    const card = event.target;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Array_from_an_Array-like_object_(arguments)
    openCards = Array.from(document.querySelectorAll('open'));

    if (validCard) {
        openCloseCard(card);
        openCards = openCards.push(card);
        console.log(openCards);
        // return card;

        checkOpen();

        playerTurn();
        checkMatch();

    }

});


// don't change classes if not .card
function validCard(card) {
    card.classList.contains('card');
}

// toggle cards
function openCloseCard(card) {
    if (card.classList.contains('card')) {
        card.classList.toggle('open');
        card.classList.toggle('show');
    }
}

function checkMatch(openCards) {
    if (openCards[0] === openCards[1]) {
        // toggle match
        openCards.classList.toggle('match');
        // remove open and show
        openCards.classList.toggle('open', false);
        openCards.classList.toggle('show', false);
    } else {
        openCards = [];
    }
}

function checkOpen(card) {
    if (card.classList.contains('open')) {
        console.log('card open');
        checkMatch();
    }
}

console.log(openCards);

//

function playerTurn(openCards) {
    if (openCards.length === 2) {
        checkMatch();
        openCards.push(openCards);
    } else if (openCards < 2) {
        openCards.push(openCards);
    } else {
        openCards = [];
    }
}






// WIP:
/* const deckObj = {
    deck: document.querySelector('.deck'),
    // if (needed)
    icons: [
        //'fa-diamond',
        'fa-diamond',
        //'fa-paper-plane-o',
        'fa-paper-plane-o',
        //'fa-anchor',
        'fa-anchor',
        //'fa-bolt',
        'fa-bolt',
        //'fa-leaf',
        'fa-leaf',
        //'fa-bicycle',
        'fa-bicycle',
        //'fa-bomb',
        'fa-bomb',
        //'fa-cube',
        'fa-cube'
    ],
    createList: () => {
        card.document.createElement('ul');
        card.document.createElement('li');
        card.document.createElement('i');
        // TODO: append
        console.log(card);
    },
    addClass: function () {
        card.classList.add(''); // add class to i
        card.classList.add(''); // add class to li
        console.log(card);
    }

};
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
