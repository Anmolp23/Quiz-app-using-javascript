const quizData = [
    {
        question:
            "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}

];

const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    if (currentQuiz < quizData.length) {
        questionEl.innerText = quizData[currentQuiz].question;
        a_text.innerText = quizData[currentQuiz].a;
        b_text.innerText = quizData[currentQuiz].b;
        c_text.innerText = quizData[currentQuiz].c;
        d_text.innerText = quizData[currentQuiz].d;
    } else {
        quiz.innerText = `Your Score is ${score}`;
        submitBtn.innerText = "Restart";
    }
}

function deselectAnswers() {
    answerEls.forEach((e) => {
        e.checked = false;
    });
    loadQuiz();
}

function getSelected() {
    answerEls.forEach((e) => {
        if (e.checked) {
            if (e.id == quizData[currentQuiz].correct) {
                score++;
            }
        }
    });

    currentQuiz++;
    deselectAnswers();
}

submitBtn.addEventListener("click", () => {

    if (currentQuiz < quizData.length) {
        getSelected();
    }
    else {
        location.reload();
    }
});
