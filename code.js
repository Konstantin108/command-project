// 'use strict';
//
// const main = document.querySelector('.main');
//
// let reverseData = data.reverse();
//
// function getCollection(data) {
//     let arr = [];
//     for (let item of data) {
//
//         item = new Quest(
//             item.id,
//             item.question,
//             item.answerA,
//             item.answerB,
//             item.answerC,
//             item.answerD,
//             item.correctAnswer,
//             item.img
//         )
//         arr.push(item);
//     }
//     return arr;
// }
//
// let resArr = getCollection(reverseData);
//
// function render(quest){
//
// }

'use strict';

const main = document.querySelector('.main');

const data = data.json;

let reverseData = data.reverse();

function getCollection(data) {
    let arr = [];
    for (let item of data) {

        item = new Quest(
            item.id,
            item.question,
            item.answerA,
            item.answerB,
            item.answerC,
            item.answerD,
            item.correctAnswer,
            item.img
        )
        arr.push(item);
    }
    return arr;
}

let resArr = getCollection(reverseData);

function render(quest){

}