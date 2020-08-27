//# Question Count and Results Variables
var questionCount = 0;
var saturnScore = 0;
var jupiterScore = 0;
var marsScore = 0;
var mercuryScore = 0;

//# Variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//# Variables for the second quiz question.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//# Variables for the third quiz question.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//# Variables for the fourth quiz question.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//# Variables for the fifth quiz question.
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//# Variables for the sixth quiz question.
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//# Variable for the result
var result = document.getElementById("result");

//# Variable for restart
var restart = document.getElementById("restart");

//# Event Listeners for first quiz question.
q1a1.addEventListener("click", Saturn);
q1a2.addEventListener("click", Jupiter);
q1a3.addEventListener("click", Mars);
q1a4.addEventListener("click", Mercury);

//# Event Listeners for second quiz question.
q2a1.addEventListener("click", Mercury);
q2a2.addEventListener("click", Saturn);
q2a3.addEventListener("click", Jupiter);
q2a4.addEventListener("click", Mars);

//# Event Listeners for third quiz question.
q3a1.addEventListener("click", Mercury);
q3a2.addEventListener("click", Mars);
q3a3.addEventListener("click", Jupiter);
q3a4.addEventListener("click", Saturn);

//# Event Listeners for fourth quiz question.
q4a1.addEventListener("click", Jupiter);
q4a2.addEventListener("click", Mars);
q4a3.addEventListener("click", Mercury);
q4a4.addEventListener("click", Saturn);

//# Event Listeners for fifth quiz question.
q5a1.addEventListener("click", Jupiter);
q5a2.addEventListener("click", Mars);
q5a3.addEventListener("click", Mercury);
q5a4.addEventListener("click", Saturn);

//# Event Listeners for sixth quiz question.
q6a1.addEventListener("click", Mars);
q6a2.addEventListener("click", Mercury);
q6a3.addEventListener("click", Saturn);
q6a4.addEventListener("click", Jupiter);

//# Event Listener for restarting quiz.
restart.addEventListener("click", Restart);

//# Quiz functions
function Saturn() {
  saturnScore += 1;
  questionCount += 1;
  //alert("one point to Saturn");
  if (questionCount >= 6) {
    updateResult();
  }
}
function Jupiter() {
  jupiterScore += 1;
  questionCount += 1;
  //alert("one point to Jupiter");
  if (questionCount >= 6) {
    updateResult();
  }
}
function Mars() {
  marsScore += 1;
  questionCount += 1;
  //alert("one point to Mars");
  if (questionCount >= 6) {
    updateResult();
  }
}
function Mercury() {
  mercuryScore += 1;
  questionCount += 1;
  //alert("one point to Mercury");
  if (questionCount >= 6) {
    updateResult();
  }
}
function updateResult() {
  if (saturnScore >= 6) {
    result.innerHTML = "Saturn";
  } else if (jupiterScore >= 6) {
    result.innerHTML = "Jupiter";
  } else if (marsScore >= 6) {
    result.innerHTML = "Mars";
  } else if (mercuryScore >= 6) {
    result.innerHTML = "Mercury";
  } else if (saturnScore == 5) {
    result.innerHTML = "Saturn";
  } else if (jupiterScore == 5) {
    result.innerHTML = "Jupiter";
  } else if (marsScore == 5) {
    result.innerHTML = "Mars";
  } else if (mercuryScore == 5) {
    result.innerHTML = "Mercury";
  } else if (saturnScore == 4) {
    result.innerHTML = "Saturn";
  } else if (jupiterScore == 4) {
    result.innerHTML = "Jupiter";
  } else if (marsScore == 4) {
    result.innerHTML = "Mars";
  } else if (mercuryScore == 4) {
    result.innerHTML = "Mercury";
  } else if (saturnScore == 3) {
    result.innerHTML = "Saturn";
  } else if (jupiterScore == 3) {
    result.innerHTML = "Jupiter";
  } else if (marsScore == 3) {
    result.innerHTML = "Mars";
  } else if (mercuryScore == 3) {
    result.innerHTML = "Mercury";
  } else {
    result.innerHTML =
      "Pluto, you're a mix of all personalities so there was a debate on whether you're a planet or not.";
  }
}
function Restart() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  saturnScore = 0;
  jupiterScore = 0;
  marsScore = 0;
  mercuryScore = 0;
}
