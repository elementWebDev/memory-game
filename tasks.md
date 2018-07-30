# Memory Game

<!--
    courtesy of:
    Project Planning Tutorial

    Prepared by Pascal Meers
    - diagram on last page -

    Modified by Ivan Huddleston
-->

<!-- Step 1  -->

## (1) cardDeck --> 2

- [ ] holds 16 cards

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