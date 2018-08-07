const deck = document.querySelector('.deck');

const openCards = [];

// Event listener
deck.addEventListener('click', () => {
    const card = event.target;

    if (validCard) {
        openCloseCard(card);
        let openCards = Array.from(this);
        console.log(openCards);
        // return card;
    }
    playerTurn();
    checkMatch();

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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Array_from_an_Array-like_object_(arguments)
// TODO: call this // v-- openCards
function playerTurn(openCards) {
    if (openCards.length < 1) {
        // openCards.From(card);
        console.log(openCards);
    } else if (openCards.length === 2) {
        checkMatch(openCards[0], openCards[1]);
        openCards.push(card);
    } else if (openCards < 2) {
        card++;
        openCards.push(card);
    } else {
        openCards = [];
    }
}

function checkMatch(card, openCards) {
    if (openCards[0] === openCards[1]) {
        card.classList.toggle('match');
    } else {
        openCards = [];
    }
}

console.log(openCards);



// WIP:
const deckObj = {
    deck: document.querySelector('.deck');
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
