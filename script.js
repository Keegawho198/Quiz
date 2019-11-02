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
    answer: 2 //instead of "alerts", made it into the number of the index
  },
   {
     title: "The condition in an if / else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
     answer: 2
   },
  ///etc.
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

function showQuestion(){
    questionElement.innerHTML = questions[0].title;
    btn1.innerHTML = questions[0].choices[0];
    btn2.innerHTML = questions[0].choices[1];
    btn3.innerHTML = questions[0].choices[2];
    btn4.innerHTML = questions[0].choices[3];
    }


function checkQuestion(correct){
  if(correct != questions[0].answer){
    alert("Wrong");
     timerElement = timeLeft - 10;
  }else if(correct == questions[0].answer) {
    alert("right");
  }
}


    // for(var i =0; i < questions[0].choices; i++){
    //   
    //  // document.getElementById("answer-buttons").innerHTML += "<button>" + questions[0].choices.length + "</button>";
    // }
   // answerButtonsElement.innerText = questions[0].choices
   // answerButtonsElement.setTe = questions[0].choices;

    //questions.push(title); //


// var never = [1,2,3,4,7];

// function please () {
//   for (var i = 0; i < never.length; i++) {
//     document.getElementById("more").innerHTML += "<button>" + never[i] + "</button>";
//   }
// }



//   function showQuestion(questionElement) {
//     questionElement.innerText = questions.title
//     //questions.choices.forEach(answer => {
//     //  const button = document.createElement('button')
//       button.innerText = answer.text
//       button.classList.add('btn')
      
//       button.addEventListener('click', selectAnswer)
//       answerButtonsElement.appendChild(button)
//     })
//   }


  





// var firstName = "firstName";
// var lastname = "lastname";
// var age = 21
// var canVote= true;
// var likes = ["movies", "books", "TV"]




// var child2 = {
//   firstName: "firstname",
//   lastName: "lastName",
//   age: 21,
//   canVote= true,
//   likes = ["movies", "books", "TV"]
// }

// var child1 = {
//   firstName: "firstname",
//   lastName: "lastName",
//   age: 21,
//   canVote= true,
//   likes = ["movies", "books", "TV"]
// }

// var person1 = {
//   firstName: "firstname",
//   lastName: "lastName",
//   age: 21,
//   canVote= true,
//   likes = ["movies", "books", "TV"],
//   children : [
//     {
//     firstName: "firstname",
//     lastName: "lastName",
//     age: 21,
//     canVote:true,
//     likes: ["movies", "books", "TV"]
//     },
//     child2
//   ]
// }

// [
//   {
//     [],
//     {[{}]}
//   },
//   {}
// ]



// person1.children[0].likes[1]  //books




// Object.key
// Array[index]

// Array[index].Key





// var arrOfPerson = [
//   {
//     firstName: "firstname",
//     lastName: "lastName",
//     age: 21,
//     canVote= true,
//     likes = ["movies", "books", "TV"]
//   },
//   person2,
//   person3
// ]





// console.log(person1.firstName, person1.lastName, person1.age)



// console.log(arrOfPerson[1])

// //  {
// //   firstName: "firstname",
// //   d: "lastName",
// //   age: 21,
// //   canVote= true,
// //   likes = ["movies", "books", "TV"]
// // }

// console.log(arrOfPerson[1].lastName);






//0
//Q1
//a1
//choose
//choose right logic for points
//else if 
//increase counter



