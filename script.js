'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player0E2 = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;


diceEl.classList.add('hidden');

const switchPlayer = function (){
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player0E2.classList.toggle('player--active');
}

/*rolling dice function*/

btnRoll.addEventListener('click', function () {

   if (playing){
      const dice = Math.trunc(Math.random() * 6) + 1;
      console.log(dice);
      
         diceEl.classList.remove('hidden');
         diceEl.src = `dice-${dice}.png `;
      
         if(dice !== 1){
            //add dice to current player //
              currentScore += dice;
              document.getElementById(`current--${activePlayer}`).textContent = currentScore;
              console.log(currentScore);
         } else { 
            //switch to next player//
             switchPlayer();
         }
      
   }

});


btnHold.addEventListener('click', function () {
//add current score to active player // 

scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


// check if players score is > 100//
//then finish the game//
if(scores[activePlayer] >= 100){
   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
   playing = false;
   diceEl.classList.add('hidden');
} else{
//switch to next player //
switchPlayer();
}
});

btnNew.addEventListener('click', function (){
   
 currentScore = 0;
 activePlayer = 0;
 playing = true;

 
 score0El.textContent = 0;
 score1El.textContent = 0;
 current0El.textContent = 0;
 current1El.textContent = 0;

 diceEl.classList.add('hidden');
 player0El.classList.remove('player--winner');
 player0E2.classList.remove('player--winner');
 player0El.classList.add('player--active');
 player0E2.classList.remove('player--active');
 
});
