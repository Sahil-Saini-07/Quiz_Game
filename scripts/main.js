"use strict";
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
let jsonObj = {
    "easy": [{
            "Question": "Who was the first President of India",
            "Options": "Dr. Rajendra Prasad,ABJ Abdul Kalam,Indira Gandhi,Lala Rajpat Rai",
            "Answer": "Dr. Rajendra Prasad"
        }],
    "intermediate": [{
            "Question": "Who made Linux kernel?",
            "Options": "Guido van Rossum,Dennis Ritchie,Tim Berners-Lee,Linus Torvalds",
            "Answer": "Linus Torvalds"
        }],
    "difficult": [{
            "Question": "The Aapki Beti scheme is associated to which of the following state governments?",
            "Options": "Uttar Pradesh,Rajasthan,Chhattisgarh,Madhya Pradesh",
            "Answer": "Rajasthan"
        }]
};
class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    getQuestion() {
        return this.question;
    }
    getOptions() {
        return this.options;
    }
    getAnswer() {
        return this.answer;
    }
}
let easyQuestions = [];
let intermediateQuestions = [];
let difficultQuestions = [];
console.log(jsonObj.easy);
getEntries(jsonObj.easy, easyQuestions);
getEntries(jsonObj.intermediate, intermediateQuestions);
getEntries(jsonObj.difficult, difficultQuestions);
function getEntries(obj, array) {
    var entry = obj[0];
    var question = entry.Question;
    var answer = entry.Answer;
    var options = entry.Options;
    var questionObject = new Question(question, options, answer);
    array.push(questionObject);
    console.log(array);
}
