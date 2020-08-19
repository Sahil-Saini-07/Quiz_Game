export class QuizObject {
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
