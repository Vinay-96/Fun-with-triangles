const side = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');


function calculateSumOfSquare (a,b){
   const sumOfSquare = a*a + b*b;
   return sumOfSquare;
}
function calculateHypotenuse (){
    const sumOfSquare = calculateSumOfSquare(Number(side[0].value),Number(side[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    outputEl.innerText = "The Length of hypotenuse " + lengthOfHypotenuse;
}



hypotenuseBtn.addEventListener('click', calculateHypotenuse)



