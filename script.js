'use strict';

const textMessage = document.querySelector('.message')
let text = document.querySelector('.message')
const numberToGuess = Math.trunc(Math.random()*20)+1
const score = document.querySelector('.score')
let scoreNumber =20
// document.querySelector('.number').textContent = 40
// document.querySelector('.guess').value = 40
document.querySelector('.number').textContent = numberToGuess

document.querySelector('.check').addEventListener('click',()=>{
    const guess = +document.querySelector('.guess').value;
    if(!guess){
        text.textContent = 'No number!'
    }
    if(scoreNumber>0){
        if (guess === numberToGuess){
            textMessage.textContent = 'Sucess!'
        }else if(guess>numberToGuess){
            textMessage.textContent= "Too High"
            scoreNumber --
            score.textContent = scoreNumber
        }else{
            textMessage.textContent="Too low"
            scoreNumber --
            score.textContent = scoreNumber
        }
    }else{
        textMessage.textContent = 'You lost the game!'
    }
})

