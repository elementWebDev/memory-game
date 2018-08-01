# Memory Game

    courtesy of:
    Project Planning Tutorial

    Prepared by Pascal Meers
    - diagram on last page -

    [memory game resources](https://www.diigo.com/outliner/fii42b/Udacity-Memory-Game-Project-(project-%232)?key=dwj0y5x9cw)

    Modified by @taskmaster (Ivan Huddleston - elementWebDev)


<!-- Step 1  -->

## (1) cardDeck --> 2

- [x] holds 16 cards

<!-- const deck = document.querySelector('.deck');

/* function createCardList(card) {
    card.document.createElement('ul');
    card.document.createElement('li');
    card.document.createElement('i');
    console.log(card);
} */
<!-- /*
// array of cards with similar icons next to each other for easier testing
const icons = [
    'fa-diamond',
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-anchor',
    'fa-bolt',
    'fa-bolt',
    'fa-leaf',
    'fa-leaf',
    'fa-bicycle',
    'fa-bicycle',
    'fa-bomb',
    'fa-bomb',
    'fa-cube',
    'fa-cube'
];
 */ -->
---

<!-- Step 2 -->

## (2) cardList --> 3.1 || 3.2

create

- [ ] ul
- [ ] li
- [ ] i

add class to
- [ ] i
- [ ] li

append
- [ ] i to li
- [ ] li to ul

--
- [ ] eventListener click


---

<!-- Step 3 -->
## (3.1) cardClicked --> 4

- [ ] store in a temp array
- [ ] remove event listener
- [ ] add class open

## (3.2) secondCardClicked --> 4

- [ ] store in temp array
- [ ] remove event listener
- [ ] add class open

---

<!-- Step 4 -->
## (4) tempArray

- [ ] cardOne
- [ ] cardTwo
- [ ] check cards for match
-
- [ ] cards match -> 5.1
- [ ] cards dont match -> 5.2

## (5.1) isMatch -> 6

- [ ] push to match array
- [ ] empty temp array

## (5.2) noMatch -> 2

- [ ] remove class open
- [ ] add event listener back
- [ ] empty temp array

## (6) matchedArray

- [ ] check length of array
- [ ] if full (meaning 8 pairs) end game

## (7) endGame

- [ ] reset all variables
- [ ] show modal
