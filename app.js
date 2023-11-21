const pc1Score = document.getElementById('user-score');
const resultDisplay = document.getElementById('result');
const pc2Score = document.getElementById('pc-score');
const btn = document.querySelector('.start');

let basket = ['rock', 'paper', 'scissors'];
let num1, num2;

btn.addEventListener('click', () =>{
    num1 = randomNum1();
    num2 = randomNum2();

    pc1Score.innerHTML = basket[num1];
    pc2Score.innerHTML = basket[num2];
    getResult();

})


function randomNum1(){
    let random = Math.floor(Math.random() * basket.length);
    return random;
}

function randomNum2(){
    let random = Math.floor(Math.random() * basket.length);
    return random;
}


function getResult() {
    if (num1 === num2) {
        resultDisplay.innerHTML = "DRAW";
    } else if (
        (num1 === 0 && num2 === 2) ||
        (num1 === 1 && num2 === 0) ||
        (num1 === 2 && num2 === 1)
    ) {
        resultDisplay.innerHTML = 'PC1 WINS';
    } else {
        resultDisplay.innerHTML = 'PC2 WINS';
    }
}


// 0 === rock
// 1 === paper
// 2 ===scissors 
