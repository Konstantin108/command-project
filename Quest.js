'use strict';

class Quest {
    id;
    question;
    answerA;
    answerB;
    answerC;
    answerD;
    correctAnswer;
    img;

    constructor(
        id,
        question,
        answerA,
        answerB,
        answerC,
        answerD,
        correctAnswer,
        img
    ) {
        this.id = id;
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
        this.img = img;
    }
}