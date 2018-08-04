const deck = document.querySelector('.deck');

let openCards = [];

//console.log(deck);

// listen for click
deck.addEventListener('click', () => {
    const card = event.target;
    if (validCard) {
        openCloseCard(card);
        console.log(card);

        // return card;
    }
    playerTurn();
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

function playerTurn(card) {
    if (openCards.length < 2) {
        openCards.push(card);
    } else {
        openCards = [];
    }
}


console.log(openCards);










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
