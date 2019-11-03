var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
//var btnElement = document.getElementsByClassName('btn');

var beforeStartElement = document.getElementById('beforeStart');
var timerElement = document.getElementById('timer');



var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
   {
     title: "The condition in an if / else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
     answer: "parentheses"
   },
   {
     title: "JavaScript has a extension of ________.",
     choices: ["Js", "Java", "JavaScript", "Html"],
     answer: "Js"
   },
   {
     title: "What is the use of document.getElementById().value in javascript?",
     choices: ["To take value from a textbox", "To input some value into Javascript", "To take value from any form tool", "None of the above"],
     answer: "To take value from any form tool"
   },
   {
     title: "My favourite color is _____ .",
     choices: ["Blue", "Yellow", "Red", "Purple"],
     answer: "Yellow"
   }
];

//Countdown timer
var counter = 0;
var timeLeft = 75;

function setUpTime(){
  var timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft + " Second Left";

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      alert("timer over");
    }

  }, 1000);
}

//start function will start the quiz. before button is pressed all the answer options will be hidden
//after it is pressed the options appear and the welcome disappears.
function start() {
  //  var answerButtonsElement = document.getElementById('answer-buttons');
    if (questionContainerElement.style.display === "none") {
        questionContainerElement.style.display = "block";
        beforeStartElement.style.display = "none";
        
        startButton.style.display = "none"; //start button dissapears after clicked
        showQuestion();
        setUpTime();
    } 
  }

var currentQuestionIndex = 0;

function showQuestion(){
    questionElement.innerHTML = questions[currentQuestionIndex].title;
    btn1.innerHTML = questions[currentQuestionIndex].choices[0];
    btn2.innerHTML = questions[currentQuestionIndex].choices[1];
    btn3.innerHTML = questions[currentQuestionIndex].choices[2];
    btn4.innerHTML = questions[currentQuestionIndex].choices[3];


    }


function checkAnswer(){
  console.log(event.target.innerHTML);
 // console.log(questions[0].answer);
  if(event.target.innerHTML != questions[currentQuestionIndex].answer){
    alert("Wrong");
    currentQuestionIndex++;
    showQuestion();
    quizEnd();
    timeLeft = timeLeft - 10;
  }else if(event.target.innerHTML == questions[currentQuestionIndex].answer) {
    alert("right");
    currentQuestionIndex++;
    showQuestion();
    //quizEnd();
  }
}

// //trying to create a end quiz message
// function quizEnd(){
//   for(currentQuestionIndex = 0; currentQuestionIndex <4; ){
//     if(currentQuestionIndex = 4){
//           alert("Quiz done");
//     }
//   }

  
// }




