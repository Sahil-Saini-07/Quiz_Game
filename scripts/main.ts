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


let  jsonObj = {
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
   question:string;
   options: string;
   answer: string;
      
   constructor(question:string, options:string, answer:string){
    this.question = question;
    this.options = options;
    this.answer = answer;
   }
   
   getQuestion():string {
      return this.question;
   }

   getOptions():string {
        return this.options;
   }

   getAnswer():string {
       return this.answer;
   }
}

interface QuestionInterface {
   Question: string;
   Options: string;
   Answer: string;
}

let easyQuestions:Question[] = [];
let intermediateQuestions:Question[] =[];
let difficultQuestions:Question[] = [];

console.log(jsonObj.easy);
getEntries(jsonObj.easy, easyQuestions);
getEntries(jsonObj.intermediate, intermediateQuestions);
getEntries(jsonObj.difficult, difficultQuestions);

function getEntries(obj: QuestionInterface[] , array: Question[]):void {
   var entry = obj[0];
   var question:string =  entry.Question;
   var answer:string = entry.Answer;
   var options:string =entry.Options;

   var questionObject = new Question(question, options, answer);
   array.push(questionObject);
   console.log(array);
}