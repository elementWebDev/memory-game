const deck = document.querySelector('.deck');
const card = document.querySelectorAll('.card li');

// empty array for open cards
let openCards = [];

// Event listener
deck.addEventListener('click', function () {
    const card = event.target;

    openCards = Array.from(document.querySelectorAll('open'));
    console.log(card, ' card in event');
    if (validCard) {
        openCloseCard(card);
        playerTurn(card);
        openCards = openCards.push(card.className);
        // return card;
        //checkOpen();
        //checkMatch();
    }
    //setTimeout();
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

function playerTurn(openCards) {

    console.log('playerTurn check 1'); // log check1

    if (openCards.length === 2) {
        checkMatch();
        openCards = openCards.push(card.className);
        console.log('playerTurn 2'); // log check2

    } else if (openCards.length < 2) {
        openCards = openCards.push(card.className);
        console.log('playerTurn check 3'); // log check3

    } else {
        openCards = [];
        console.log('playerTurn check 4'); // log check4
    }
}

function checkMatch(openCards) {
    if (openCards[0] === openCards[1]) {
        // log check
        console.log('checkMatch check 1');
        openCards.classList.toggle('match'); // toggle match

        openCards.classList.toggle('open', false); // remove open
        openCards.classList.toggle('show', false); // remove show
        // log check
        console.log('checkMatch check 2');
    } else {
        //console.log('checkMatch check else');
        openCards = [];
    }
}

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
