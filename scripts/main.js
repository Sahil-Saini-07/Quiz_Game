// let response: Promise<any> = fetch("data.json");
// if((response as).ok) {
//     let json = await response.json();
// } 
// import $ from "jquery";
// $(document).ready(function() {
//    console.log("hello");
//    $.ajax({
//       url : "data.json", 
//       error: function(data) {
//         console.log(data);
//       },
//       success : function( data:string ) {
//           console.log(data);
//       }
//   });
// });
import { QuizObject } from './QuizObject.js';
import { jsonObj } from './jsonObj.js';
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel[DifficultyLevel["EASY"] = 0] = "EASY";
    DifficultyLevel[DifficultyLevel["MEDIUM"] = 1] = "MEDIUM";
    DifficultyLevel[DifficultyLevel["DIFFICULT"] = 2] = "DIFFICULT";
})(DifficultyLevel || (DifficultyLevel = {}));
let easyQuestions = [];
let intermediateQuestions = [];
let difficultQuestions = [];
let questionDOMElement;
let questionOptionsList;
let currentQuestion;
let counter = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    getEntries(jsonObj.easy, easyQuestions);
    getEntries(jsonObj.intermediate, intermediateQuestions);
    getEntries(jsonObj.difficult, difficultQuestions);
    questionDOMElement = document.getElementById("question");
    questionOptionsList = document.getElementsByClassName("option");
    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {
        questionOptionsList[iterator].addEventListener("click", function (event) {
            evaluateOption(event.target);
        });
    }
    selectQuestion(DifficultyLevel.EASY);
});
function getEntries(obj, array) {
    for (var iterator = 0; iterator < obj.length; iterator++) {
        var entry = obj[iterator];
        var question = entry.Question;
        var answer = entry.Answer;
        var options = entry.Options;
        var questionObject = new QuizObject(question, options, answer);
        array.push(questionObject);
    }
}
function evaluateOption(eventTarget) {
    var selectedOptionText = eventTarget.dataset.value;
    console.log(counter);
    var progressDot = document.getElementById("progress-" + counter);
    if (selectedOptionText == currentQuestion.getAnswer()) {
        eventTarget.classList.add("correct-answer");
        progressDot.classList.add("correct-answer");
        setTimeout(function () {
            if (counter > 4 && counter < 8) {
                selectQuestion(DifficultyLevel.MEDIUM);
            }
            else if (counter >= 8) {
                selectQuestion(DifficultyLevel.DIFFICULT);
            }
            else if (counter == 10) {
                alert("You won"); //reload
                location.reload();
            }
            else {
                selectQuestion(DifficultyLevel.EASY);
            }
        }, 1000);
    }
    else {
        eventTarget.classList.add("incorrect-answer");
        progressDot.classList.add("incorrect-answer");
        setTimeout(function () {
            alert("Game over");
            location.reload(); //temporary fix
        }, 1000);
    }
}
function selectQuestion(difficulty) {
    let quizObject = new QuizObject("", "", "");
    switch (difficulty) {
        case DifficultyLevel.EASY:
            quizObject = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
            easyQuestions.slice(0, 1);
            break;
        case DifficultyLevel.MEDIUM:
            quizObject = intermediateQuestions[Math.floor(Math.random() * intermediateQuestions.length)];
            intermediateQuestions.slice(0, 1);
            break;
        case DifficultyLevel.DIFFICULT:
            quizObject = difficultQuestions[Math.floor(Math.random() * intermediateQuestions.length)];
            difficultQuestions.slice(0, 1);
            break;
        default:
            console.log("default");
    }
    currentQuestion = quizObject;
    counter += 1;
    printQuestion(quizObject);
}
function printQuestion(quizObject) {
    questionDOMElement.innerText = quizObject.getQuestion();
    let optionArray = quizObject.getOptions().split(",");
    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {
        questionOptionsList[iterator].innerText = (iterator + 1) + ". " + optionArray[iterator];
        questionOptionsList[iterator].dataset.value = optionArray[iterator];
        questionOptionsList[iterator].classList.remove("correct-answer");
    }
}
