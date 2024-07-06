document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.getElementById('quiz-question');
    const quizResult = document.getElementById('quiz-result');
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');
    const optionC = document.getElementById('optionC');
    const optionD = document.getElementById('optionD');
    const quizData = [
        {
            question: "What year was PUBG released?",
            options: {
                A: "2015",
                B: "2016",
                C: "2017",
                D: "2018"
            },
            correctAnswer: "C"
        },
        {
            question: "Which company developed PUBG?",
            options: {
                A: "Epic Games",
                B: "Tencent Games",
                C: "Bluehole",
                D: "Valve"
            },
            correctAnswer: "C"
        },
        {
            question: "What is the maximum number of players in a PUBG match?",
            options: {
                A: "50",
                B: "75",
                C: "100",
                D: "150"
            },
            correctAnswer: "C"
        },
        {
            question: "Which map was introduced first in PUBG?",
            options: {
                A: "Erangel",
                B: "Miramar",
                C: "Sanhok",
                D: "Vikendi"
            },
            correctAnswer: "A"
        },
        {
            question: "What is the name of the mode where players fight to be the last one standing?",
            options: {
                A: "Team Deathmatch",
                B: "War Mode",
                C: "Survival Mode",
                D: "Battle Royale"
            },
            correctAnswer: "D"
        }
    ];
    let currentQuestionIndex = 0;
    function startQuiz() {
        quizContainer.style.display = 'block';
        displayQuestion();
    }
    function displayQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.textContent = `Question: ${currentQuestion.question}`;
        optionA.textContent = `A. ${currentQuestion.options.A}`;
        optionB.textContent = `B. ${currentQuestion.options.B}`;
        optionC.textContent = `C. ${currentQuestion.options.C}`;
        optionD.textContent = `D. ${currentQuestion.options.D}`;
    }
    function checkAnswer(answer) {
        const currentQuestion = quizData[currentQuestionIndex];
        if (answer === currentQuestion.correctAnswer) {
            quizResult.textContent = 'Correct!';
            quizResult.style.color = 'green';
        } else {
            quizResult.textContent = 'Incorrect. Try again!';
            quizResult.style.color = 'red';
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(displayQuestion, 1000);
        } else {
            quizResult.textContent += " Quiz completed!";
            setTimeout(() => { quizContainer.style.display = 'none'; }, 2000);
        }
    }
    window.startQuiz = startQuiz;
    window.checkAnswer = checkAnswer;
});
