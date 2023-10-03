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


function renderLastGrade() {
 
  var lastGrade = JSON.parse(localStorage.getItem(questionsAnswers));

  if (lastGrade !== null) {
  document.getElementById("saved-question").innerHTML = lastGrade.student;
  document.getElementById("saved-questions").innerHTML = lastGrade.grade;
  document.getElementById("saved-comment").innerHTML = lastGrade.comment;

  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

 
function init() {

  renderLastGrade();
}
countdown();
init();