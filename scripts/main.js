import { QuizObject } from './QuizObject.js';
import { jsonObj } from './jsonObj.js';
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel[DifficultyLevel["EASY"] = 0] = "EASY";
    DifficultyLevel[DifficultyLevel["MEDIUM"] = 1] = "MEDIUM";
    DifficultyLevel[DifficultyLevel["DIFFICULT"] = 2] = "DIFFICULT";
})(DifficultyLevel || (DifficultyLevel = {}));
let easyQuestions = []; //list holding easy level questions
let intermediateQuestions = []; //list holding medium level questions 
let difficultQuestions = []; //list holding difficult level questions
let questionDOMElement; //reference question div
let questionOptionsList; //reference to option divs
let currentQuestion; //question currently visible to user
let counter = 0; //counter to track progress
let globalTimer; //global timer
document.addEventListener("DOMContentLoaded", function (event) {
    //getting QuizObject objects 
    getEntries(jsonObj.easy, easyQuestions);
    getEntries(jsonObj.intermediate, intermediateQuestions);
    getEntries(jsonObj.difficult, difficultQuestions);
    questionDOMElement = document.getElementById("question");
    questionOptionsList = document.getElementsByClassName("option");
    document.getElementById("playAgainButton").addEventListener("click", function () {
        location.reload();
    });
    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {
        questionOptionsList[iterator].addEventListener("click", function (event) {
            evaluateOption(event.target);
        });
    }
    selectQuestion(DifficultyLevel.EASY);
});
/**
 * DESCRIPTION : This function populates QuizObject in respective lists.
 * @param obj
 * @param array
 */
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
/**
 * DESCRIPTION : This function evaluates selected option. If option is correct move to next question
 * else restart the game.
 * @param eventTarget
 */
function evaluateOption(eventTarget) {
    clearTimeout(globalTimer);
    var selectedOptionText = eventTarget.dataset.value;
    console.log(counter);
    var progressDot = document.getElementById("progress-" + counter);
    if (selectedOptionText == currentQuestion.getAnswer()) {
        eventTarget.classList.add("correct-answer");
        progressDot.classList.add("correct-answer");
        globalTimer = setTimeout(function () {
            if (counter < 4) {
                selectQuestion(DifficultyLevel.EASY);
            }
            else if ((counter >= 4) && (counter < 7)) {
                selectQuestion(DifficultyLevel.MEDIUM);
            }
            else if ((counter >= 7) && (counter < 10)) {
                selectQuestion(DifficultyLevel.DIFFICULT);
            }
            else {
                displayResult(true);
            }
        }, 1000);
    }
    else {
        eventTarget.classList.add("incorrect-answer");
        progressDot.classList.add("incorrect-answer");
        globalTimer = setTimeout(function () {
            displayResult(false);
        }, 1000);
    }
}
/**
 * DESCRIPTION : Function to select question based on difficulty level.
 * @param difficulty
 */
function selectQuestion(difficulty) {
    let quizObject = new QuizObject("", "", "");
    let randomIndex = 0;
    switch (difficulty) {
        case DifficultyLevel.EASY:
            randomIndex = getRandomIndex(easyQuestions);
            quizObject = easyQuestions[randomIndex];
            easyQuestions.splice(randomIndex, 1);
            break;
        case DifficultyLevel.MEDIUM:
            randomIndex = getRandomIndex(intermediateQuestions);
            quizObject = intermediateQuestions[randomIndex];
            intermediateQuestions.splice(randomIndex, 1);
            break;
        case DifficultyLevel.DIFFICULT:
            randomIndex = getRandomIndex(difficultQuestions);
            quizObject = difficultQuestions[randomIndex];
            difficultQuestions.splice(randomIndex, 1);
            break;
        default:
            console.log("default");
    }
    currentQuestion = quizObject;
    counter += 1;
    printQuestion(quizObject);
}
/**
 * DESCRIPTION : Function to print question or update html.
 * @param quizObject
 */
function printQuestion(quizObject) {
    questionDOMElement.innerText = quizObject.getQuestion();
    let optionArray = quizObject.getOptions().split(",");
    for (var iterator = 0; iterator < questionOptionsList.length; iterator++) {
        questionOptionsList[iterator].innerText = (iterator + 1) + ". " + optionArray[iterator];
        questionOptionsList[iterator].dataset.value = optionArray[iterator];
        questionOptionsList[iterator].classList.remove("correct-answer");
    }
}
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function displayResult(wonGame) {
    let quizContainer = document.getElementById("quizContainerDiv");
    let resultDiv = document.getElementById("resultDiv");
    let resultText = document.getElementById("resultText");
    quizContainer.classList.add("d-none");
    resultDiv.classList.remove("d-none");
    if (wonGame) {
        resultText.innerText = "You Won";
    }
    else {
        resultText.innerText = "You Lost";
    }
}
