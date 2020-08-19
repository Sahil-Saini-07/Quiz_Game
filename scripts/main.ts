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

let easyQuestions:QuizObject[] = [];
let intermediateQuestions:QuizObject[] =[];
let difficultQuestions:QuizObject[] = [];
let questionDOMElement:HTMLElement;
let questionOptionsList:HTMLCollection;
let currentQuestion: QuizObject;
let counter:number = 0;


document.addEventListener("DOMContentLoaded", function(event) {
   getEntries(jsonObj.easy, easyQuestions);
   getEntries(jsonObj.intermediate, intermediateQuestions);
   getEntries(jsonObj.difficult, difficultQuestions);
  
   questionDOMElement = document.getElementById("question")!;
   questionOptionsList = document.getElementsByClassName("option");

   for (var iterator:number=0; iterator < questionOptionsList.length; iterator++) {
      questionOptionsList[iterator].addEventListener("click", function(event:Event) {
        evaluateOption(event.target);
      });
   }

   selectQuestion(DifficultyLevel.EASY);

});


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


function evaluateOption(eventTarget:any) {
   var selectedOptionText:string = (eventTarget as HTMLElement).dataset.value!;
   console.log(counter);
   var progressDot = document.getElementById("progress-"+counter)!;
   if(selectedOptionText == currentQuestion.getAnswer()) {
      (eventTarget as HTMLElement).classList.add("correct-answer");
      progressDot.classList.add("correct-answer") ;
      setTimeout(function() {
         if(counter> 4 && counter < 8) {
            selectQuestion(DifficultyLevel.MEDIUM);
         } else if (counter >= 8) {
            selectQuestion(DifficultyLevel.DIFFICULT);
         } else if(counter == 10){
           alert("You won"); //reload
           location.reload();
         }
         else{
            selectQuestion(DifficultyLevel.EASY);
         }
         

      },1000)
   } else {
      (eventTarget as HTMLElement).classList.add("incorrect-answer");
      progressDot.classList.add("incorrect-answer") ;
      setTimeout(function() {
         alert("Game over");
         location.reload(); //temporary fix
      },1000)

   } 
}


function selectQuestion(difficulty:number) {
   let quizObject:QuizObject = new QuizObject("", "","");

   switch(difficulty) {
      case DifficultyLevel.EASY:
         quizObject = easyQuestions[ Math.floor(Math.random() * easyQuestions.length)];
         easyQuestions.slice(0,1);
         break;
      case DifficultyLevel.MEDIUM :
         quizObject = intermediateQuestions[ Math.floor(Math.random() * intermediateQuestions.length)];
         intermediateQuestions.slice(0,1);
         break;
      
      case DifficultyLevel.DIFFICULT :
         quizObject = difficultQuestions[ Math.floor(Math.random() * intermediateQuestions.length)];
         difficultQuestions.slice(0,1);
         break;

      default:
         console.log("default");
   }
   currentQuestion = quizObject;
   counter += 1;
   printQuestion(quizObject);
}


function printQuestion(quizObject: QuizObject) {
   (questionDOMElement as HTMLElement).innerText = quizObject.getQuestion();
   let optionArray: string[] = quizObject.getOptions().split(",");
   for(var iterator:number=0; iterator < questionOptionsList.length; iterator++) {
      (questionOptionsList[iterator] as HTMLElement).innerText = (iterator + 1) + ". " +  optionArray[iterator];
      (questionOptionsList[iterator] as HTMLElement).dataset.value = optionArray[iterator];
      (questionOptionsList[iterator] as HTMLElement).classList.remove("correct-answer");
   }

}