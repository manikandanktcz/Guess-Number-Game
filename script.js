'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent ='correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent= 12;
document. querySelector('.score').textContent= 10;

console .log(document.querySelector('.guess').value );
document .querySelector('.guess').value=23;
console.log(document .querySelector('.guess').value);*/


const secretnumber = Math.trunc(Math.random()*20)+1;


let score =20; 
let highscore=0;

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent='20';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor = 'black';

})

document.querySelector('.check').addEventListener
('click',function(){
    const guess =Number (document.querySelector('.guess').value)
    console.log(guess,typeof guess);

    if (!guess){
        document.querySelector('.message').textContent='NO Number!';
    }
    else if (guess===secretnumber){
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector('.message').textContent='correct Number';
   document.querySelector('body').style.backgroundColor ='#60b347';
   document.querySelector('.number').style.width='30rem';
   if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
   }
    }
    

    else if (guess > secretnumber){
        if (score>1){
            document.querySelector('.message').textContent='too high';
            score--;
            document.querySelector('.score').textContent=score;
            score;
        } else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;

        }
        
    }
    else if ( guess<secretnumber){
        if (score>1){
            document.querySelector('.message').textContent='too low';
            score--;
            document.querySelector('.score').textContent=score;
            score;
        } else{
            document.querySelector('.message').textContent='you lost the game';
            document.querySelector('.score').textContent=0;

        }

    

    }
})

