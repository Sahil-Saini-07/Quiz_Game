export class QuizObject implements QuestionInterface{
    question:string;
    options: string;
    answer: string;
       
    constructor(question:string, options:string, answer:string){
     this.question = question;
     this.options = options;
     this.answer = answer;
    }
    
    get getQuestion():string {
       return this.question;
    }
 
    get getOptions():string {
         return this.options;
    }
 
    get getAnswer():string {
        return this.answer;
    }
 }

 export interface QuestionInterface {
    question: string;
    options: string;
    answer: string;
 }
 