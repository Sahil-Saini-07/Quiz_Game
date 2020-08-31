import { QuizObject } from './QuizObject';
//import { jsonObj } from './jsonObj';
import $ from 'jquery';

enum DifficultyLevel {
   EASY = 0,
   MEDIUM = 1,
   DIFFICULT = 2
}

interface QuestionInterface {
   Question: string;
   Options: string;
   Answer: string;
}

let jsonObj:any;
let easyQuestions:QuizObject[] = []; //list holding easy level questions
let intermediateQuestions:QuizObject[] =[];  //list holding medium level questions 
let difficultQuestions:QuizObject[] = []; //list holding difficult level questions
let questionDOMElement:JQuery<HTMLElement> //reference question div
let questionOptionsList:JQuery<HTMLElement>; //reference to option divs
let currentQuestion: QuizObject; //question currently visible to user
let counter:number = 0; //counter to track progress
let globalTimer:number; //global timer


$(document).ready(function(event) {
   $.ajax("data.json", {
      error : function (){
         console.log("JSON error");
      },
      success: function (response){
         quizInit(response);
      }
   });
});

/**
 * DESCRIPTION : Function to initalize application
 * @param response 
 */
function quizInit(response:JSON) {
   jsonObj = response;
   getEntries(jsonObj.easy, easyQuestions);
   getEntries(jsonObj.intermediate, intermediateQuestions);
   getEntries(jsonObj.difficult, difficultQuestions);
  
   questionDOMElement = $("#question")!;
   questionOptionsList = $(".option");

  $("#playAgainButton").on("click", function(){
      location.reload();
   });

   questionOptionsList.on("click", function(event) {
        evaluateOption($(this));
   });
   
   selectQuestion(DifficultyLevel.EASY);
}

/**
 * DESCRIPTION : This function populates QuizObject in respective lists.
 * @param obj 
 * @param array 
 */
function getEntries(obj: QuestionInterface[] , array: QuizObject[]):void {
   for(var iterator:number = 0; iterator < obj.length; iterator++) {
      var entry = obj[iterator];
      var question:string =  entry.Question;
      var answer:string = entry.Answer;
      var options:string =entry.Options;
      var questionObject = new QuizObject(question, options, answer);
      array.push(questionObject);
   }
}

/**
 * DESCRIPTION : This function evaluates selected option. If option is correct move to next question
 * else restart the game.
 * @param eventTarget 
 */
function evaluateOption(reference:JQuery<HTMLElement>) {
   clearTimeout(globalTimer);
   var selectedOptionText:string = reference.prop("answer-value");
   var progressDot:JQuery<HTMLElement> = $("#progress-"+counter);
   if(selectedOptionText == currentQuestion.getAnswer()) {
      reference.addClass("correct-answer");
      progressDot.addClass("correct-answer");
      globalTimer = setTimeout(function() {
         if(counter < 4) {
            selectQuestion(DifficultyLevel.EASY);
         } else if ((counter >= 4) && (counter < 7)) {
            selectQuestion(DifficultyLevel.MEDIUM);
         } else if((counter >= 7) && (counter < 10)){
            selectQuestion(DifficultyLevel.DIFFICULT);
         } 
         else {
           displayResult(true);
         }         
      },1000)
   } else {
      reference.addClass("incorrect-answer");
      progressDot.addClass("incorrect-answer") ;
      globalTimer = setTimeout(function() {
         displayResult(false);
      },1000)
   } 
}

/**
 * DESCRIPTION : Function to select question based on difficulty level.
 * @param difficulty 
 */
function selectQuestion(difficulty:number) {
   let quizObject:QuizObject = new QuizObject("", "","");
   let randomIndex:number =0;
   switch(difficulty) {
      case DifficultyLevel.EASY:
         randomIndex = getRandomIndex(easyQuestions);
         quizObject = easyQuestions[randomIndex];
         easyQuestions.splice(randomIndex,1);
         break;
      case DifficultyLevel.MEDIUM :
         randomIndex = getRandomIndex(intermediateQuestions);
         quizObject = intermediateQuestions[randomIndex];
         intermediateQuestions.splice(randomIndex,1);
         break;
      
      case DifficultyLevel.DIFFICULT :
         randomIndex = getRandomIndex(difficultQuestions);
         quizObject = difficultQuestions[randomIndex];
         difficultQuestions.splice(randomIndex,1);
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
function printQuestion(quizObject: QuizObject) {
   questionDOMElement.text(quizObject.getQuestion());
   let optionArray: string[] = quizObject.getOptions().split(",");
   let questionOption;
   for(var iterator:number=0; iterator < questionOptionsList.length; iterator++) {
      questionOption = $(questionOptionsList[iterator]);
      questionOption.text( (iterator + 1) + ". " +  optionArray[iterator] );
      questionOption.prop("answer-value", optionArray[iterator] );
      questionOption.removeClass("correct-answer");
   }

}

function getRandomIndex(array: QuizObject[]){
   return Math.floor(Math.random() * array.length);
}

function displayResult(wonGame:boolean){
   let quizContainer = $("#quizContainerDiv");
   let resultDiv = $("#resultDiv");
   let resultText = $("#resultText");

   quizContainer.addClass("hide-element")
   resultDiv.removeClass("hide-element");
   
   if(wonGame) {
      resultText.text("You Won");
   } else {
      resultText.text("You Lost");
   }
}