const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Colorful Style Sheet", "Computer Style Sheet", "Creative Style Syntax"],
    correct: 0
  },
  {
    question: "Which tag is used to link JavaScript in HTML?",
    answers: ["<js>", "<script>", "<javascript>", "<link>"],
    correct: 1
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const currentQuestion = questions[currentIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";

  currentQuestion.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(i);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].correct;
  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! Correct answer is: ${questions[currentIndex].answers[correct]}`);
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

window.onload = () => {
  loadQuestion();
  nextBtn.style.display = "none";
};
