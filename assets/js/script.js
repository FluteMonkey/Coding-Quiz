//variable to reference DOM elements
var questionsEl = document.getElementById("question");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("get_started");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// variables to keep track of quiz 
  var questionIndex = 0;
  var time = questions.length * 20;
  var timerId;

  function quizStart() {
      //hiding the start screen
    var startScreenEl = document.getElementById("starting-screen");
    startScreenEl.setAttribute("class", "hidden");
      //unhide questions
      questionsEl.removeAttribute("class");
      //start timer
      timerId = setInterval(clockTick, 1000);
      timerEl.textContent = time;

      getQuestion();
  }

  function getQuestion() {
      // get the question from object array

      //update current question title

      //clear old choices

      //creat new choices
  }

  function questionClick() {
      //check if answer was right

      //penalize time or move on

      //check for more questions
  }

  function endQuiz() {
      //show end screen

      //hide questions

      //show score

      //stop timer
  }

  function clockTick() {
    time--;
    timerEl.textContent = time;
  }

  startBtn.onclick = quizStart;