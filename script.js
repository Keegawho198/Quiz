var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')



//start function will start the quiz. before button is pressed all the answer options will be hidden
//after it is pressed the options appear.
function start() {
  //  var answerButtonsElement = document.getElementById('answer-buttons');

    if (answerButtonsElement.style.display === "none") {
      answerButtonsElement.style.display = "block";
    } else {
      answerButtonsElement.style.display = "none";
    }
  }