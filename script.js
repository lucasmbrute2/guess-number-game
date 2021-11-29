'use strict';

const textMessage = document.querySelector('.message')
const score = document.querySelector('.score')
const numberToGuess = Math.trunc(Math.random()*20)+1
let scoreNumber =20
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
            document.querySelector('body').style.backgroundColor ='#60b347';
            
            document.querySelector('.number').style.width= '30rem'
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

