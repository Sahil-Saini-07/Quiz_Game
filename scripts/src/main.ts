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
let questionDOMElement:HTMLElement; //reference question div
let questionOptionsList:HTMLCollection; //reference to option divs
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
  
   questionDOMElement = document.getElementById("question")!;
   questionOptionsList = document.getElementsByClassName("option");


   document.getElementById("playAgainButton")!.addEventListener("click", function(){
      location.reload();
   });

   for (var iterator:number=0; iterator < questionOptionsList.length; iterator++) {
      questionOptionsList[iterator].addEventListener("click", function(event:Event) {
        evaluateOption(event.target);
      });
   }

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
function evaluateOption(eventTarget:any) {
   clearTimeout(globalTimer);
   var selectedOptionText:string = (eventTarget as HTMLElement).dataset.value!;
   console.log(counter);
   var progressDot = document.getElementById("progress-"+counter)!;
   if(selectedOptionText == currentQuestion.getAnswer()) {
      (eventTarget as HTMLElement).classList.add("correct-answer");
      progressDot.classList.add("correct-answer") ;
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
      (eventTarget as HTMLElement).classList.add("incorrect-answer");
      progressDot.classList.add("incorrect-answer") ;
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
   (questionDOMElement as HTMLElement).innerText = quizObject.getQuestion();
   let optionArray: string[] = quizObject.getOptions().split(",");
   for(var iterator:number=0; iterator < questionOptionsList.length; iterator++) {
      (questionOptionsList[iterator] as HTMLElement).innerText = (iterator + 1) + ". " +  optionArray[iterator];
      (questionOptionsList[iterator] as HTMLElement).dataset.value = optionArray[iterator];
      (questionOptionsList[iterator] as HTMLElement).classList.remove("correct-answer");
   }

}

function getRandomIndex(array: QuizObject[]){
   return Math.floor(Math.random() * array.length);
}

function displayResult(wonGame:boolean){
   let quizContainer = document.getElementById("quizContainerDiv")!;
   let resultDiv = document.getElementById("resultDiv")!;
   let resultText = document.getElementById("resultText")!;

   quizContainer.classList.add("hide-element")
   resultDiv.classList.remove("hide-element");
   
   if(wonGame) {
      resultText.innerText = "You Won";
   } else {
      resultText.innerText = "You Lost";
   }
}