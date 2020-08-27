export class QuizObject {
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
 