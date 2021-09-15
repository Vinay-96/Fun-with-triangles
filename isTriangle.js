const input = document.querySelectorAll('.angle-input');
const isTrianglebtn = document.querySelector('#is-trinagle-btn');
const outputEl = document.querySelector('#output');


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function IsTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));

    if (sumOfAngles === 180) {
        outputEl.innerText = "This is a triangle...!"
    }
    else {
        outputEl.innerText = "This is not a triangle...!"
    }
}
isTrianglebtn.addEventListener("click", IsTriangle);
