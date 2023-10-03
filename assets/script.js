var timerEl = document.getElementById('countdown');

function countdown() {
  var timeLeft = 5;

 
  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {

      timerEl.textContent = timeLeft + ' seconds remaining';

      timeLeft--;
    } 
    
    })
  }

var question1 = document.getElementById("answer1");
var question2 = document.getElementById("answer2");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedAnswer = document.getElementById("saved-question");


function saveAnswers() {

  var questionAnswers = {
    question1: question1.value,
    question2: question2.value,
    comment: comment.value.trim()
  };

  localStorage.setItem("questionsAnswers", JSON.stringify(questionAnswers));
}


function renderAnswers() {
 
  var questionsAnswers = JSON.parse(localStorage.getItem(questionsAnswers));

  if (questionsAnswers !== null) {
  document.getElementById("saved-question").innerHTML = questionsAnswers.question;
  document.getElementById("saved-questions").innerHTML = questionsAnswers.questions;
  document.getElementById("saved-questionss").innerHTML = lquestionsAnswers.questionss;

  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  saveAnswers();
  renderAnswers();
});

 
function init() {

  renderAnswers();
}
countdown();
init();