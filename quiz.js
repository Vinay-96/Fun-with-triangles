const quizForm = document.querySelector(".Quiz-Form");
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ['90°', 'right angled'];

function calculateScore() {
    let score = 0;
    let index = 0;
    const FormResult = new FormData(quizForm);
    for (let value of FormResult.values()) {
        if (value === correctAnswers[index]) {
            score += 1;
        }
        index += 1;
    }
    outputEl.innerText = "Your score is " + score
}



submitAnswerBtn.addEventListener('click', calculateScore)