'use strict';

const text = document.querySelector('.message')
const score = document.querySelector('.score')
let numberToGuess = Math.trunc(Math.random()*20)+1
const numberText = document.querySelector('.number')
const body = document.querySelector('body')
let scoreNumber =20
// document.querySelector('.guess').value = 40


document.querySelector('.check').addEventListener('click',()=>{
    const guess = +document.querySelector('.guess').value;
    if(!guess){
        text.textContent = 'No number!'
    }else{
        if(scoreNumber>0){
            if (guess === numberToGuess){
                numberText.textContent = numberToGuess
                
                text.textContent = 'Sucess!'
                
                body.style.backgroundColor ='#60b347';              
                
                numberText.style.width= '30rem'
            }else if(guess>numberToGuess){
                text.textContent= "Too High"
                scoreNumber --
                score.textContent = scoreNumber
            }else{
                text.textContent="Too low"
                scoreNumber --
                score.textContent = scoreNumber
            }
        }else{
            text.textContent = 'You lost the game!'
        }
    }
})

document.querySelector('.again').addEventListener('click',()=>{
    const guess = document.querySelector('.guess');
    numberToGuess = Math.trunc(Math.random()*20)+1
    score.textContent = 20
    guess.value = ''
    text.textContent = 'Start guessing...'
    numberText.textContent='?'
    body.style.backgroundColor = '#222';
    numberText.style.width = '15rem'
})

