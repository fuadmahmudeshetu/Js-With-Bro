
const quizData = [
    {
    question: "What is the capital of Ethiopia",
    options: ["Berlin","Madrid","Paris","Addis Ababa"],
    answer: "Addis Ababa"
    },
    {
    question: "Which language is used for web development",
    options: ["Python","HTML","Java","C++"],
    answer: "HTML"
    },
    {
    question: "Who wrote 'Hamlet'?",
    options: ["Dickens","Shakespear","Twain","Austine"],
    answer: "Shakestpear"
    },
    {
    question: "What is the largest planet in our solar system?",
    options: ["Earth","Mars","Jupiter","Saturn"],
    answer: "Jupiter"
    },
    {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Ethiopia","China","Japan","South korea"],
    answer: "Japan"
    },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const timerEl = document.getElementById('time');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');


function loadQuestion(){
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }

    clearInterval(timerInterval);
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    startTimer();

    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = '';

    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener('click', ()=>{
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    timerEl.textContent = timeLeft;

    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex';
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';
    loadQuestion();
});

loadQuestion();