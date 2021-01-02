'use strict';
//DOm is part of the web api(library) not part of the javascript


let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

};

const ck = function (){
    const guess = Number(document.querySelector(".guess").value);
    if(score>1){

    if(!guess){
        displayMessage('⛔️ No number!')
    }else if(guess > secretNumber){
        displayMessage(" guess is too high");
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess < secretNumber){
        displayMessage(" guess is too low");
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    }}else{
        displayMessage("you exhaust your chance");
        document.querySelector('.score').textContent = 0;
    }
};
//there are two calsses in the check, btn class is the more generic class that applies to all button so we only want the check class
document.querySelector('.check').addEventListener('click', ck);


const ag = function(){
    
 secretNumber = Math.trunc((Math.random() * 20) + 1);
score = 20;
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

};
document.querySelector(".again").addEventListener('click', ag);





