// Created elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");

//Quiz questions/ create our questions
var questionIndex = 0;
let questions = [
  {
    question: "What does HTML stand for?",
    choices: ["A", "B", "C", "D"],
    correct: "A",
  },
  {
    question: "What does CSS stand for?",
    choices: ["A", "B", "C", "D"],
    correct: "B",
  },
  {
    question: "What does JS stand for?",
    choices: ["A", "B", "C", "D"],
    correct: "C",
  },
];

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

start.addEventListener("click", startQuiz);

function startQuiz() {
  start.style.display = "none";
  quiz.style.display = "block";

  showQuestion();
}
//Display Questions and Answers
function showQuestion() {
  var CurrentQuestion = questions[questionIndex];
  questionEl.textContent = CurrentQuestion.question;
  choicesEl.textContent = "";
  CurrentQuestion.choices.forEach(function (choice, i) {
    var choicebtn = document.createElement("button");
    choicebtn.setAttribute("class", "choice");
    choicebtn.setAttribute("value", choice);
    choicebtn.textContent = i + 1 + "." + choice;
    choicebtn.onclick = nextQuestion;
    choicesEl.appendChild(choicebtn);
  });
}

//Move to next question and end quiz
function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}
function endQuiz() {
  quiz.style.display = "none";
  console.log("click");
}

//Timer Counts down and stops at 0
function timer() {
  var sec = 10;
  var timer = setInterval(function () {
    document.getElementById("TimerDisplay").innerHTML = "00:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

timer();
