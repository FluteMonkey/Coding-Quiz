//variable to reference DOM elements
var questionsEl = document.getElementById("question");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("get_started");
var initialsEl = document.getElementById("initials");

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
      var currentQuestion = questions[questionIndex];

      //update current question title
      var titleEl = document.getElementById("question-title");
      //pull question from object array
      titleEl.textContent = currentQuestion.title;
      //clear old choices
      choicesEl.innerHTML = "";
      //creat new choices
      currentQuestion.choices.forEach(function(choice, j){
          //create a new button
          var option = document.createElement("button");
          option.setAttribute("class", "choice");
          option.setAttribute("value", choice);

          option.textContent = j + 1 +". " + choice;

          option.onclick = questionSelect;

          choicesEl.appendChild(option);
      })
  }

  function questionSelect() {
      //check if answer was right
      if (this.value !== questions[questionIndex].answer) {
        //penalize time if question was wrong  
        time -= 20;
          //returns time to 0 if it would fall below
          if (time < 0) {
              time = 0;
          }
          timerEl.textContent = time;
      }
      questionIndex++

      if (questionIndex === questions.length) {
          endQuiz();
      } else {
          getQuestion();
      }
  }

  function endQuiz() {
      //show end screen
      var endScreenEl = document.getElementById("end-screen");
      endScreenEl.removeAttribute("class");
      //hide questions
      questionsEl.setAttribute("class", "hidden");
      //show score
      var finalScoreEl = document.getElementById("final-score");
      finalScoreEl.textContent = time
      //stop timer
      clearInterval(timerId);
  }

  function clockTick() {
    time--;
    timerEl.textContent = time;
  }

  function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "highscores.html";
    }
  }

  startBtn.onclick = quizStart;

  submitBtn.onclick = saveHighscore;