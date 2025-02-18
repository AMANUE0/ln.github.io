let main = document.querySelector(".content");
let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let question3 = document.querySelector(".question-3");
let question4 = document.querySelector(".question-4");
let question5 = document.querySelector(".question-5");
const newQuestion = (indexA, questionA, asnwerCorrectA, answerONEA, answerTWOA, answerTHREEA, ptsA) => {
    let content = document.createElement("section");
    let index = document.createElement("span");
    let question = document.createElement("h2");
    let answer = document.createElement("button");
    let answerONE = document.createElement("button");
    let answerTWO = document.createElement("button");
    let answerTHREE = document.createElement("button");
    let pts = document.createElement("p");

    index.textContent = indexA;
    question.textContent = questionA;
    answer.textContent = asnwerCorrectA;
    answerONE.textContent = answerONEA;
    answerTWO.textContent = answerTWOA;
    answerTHREE.textContent = answerTHREEA;
    pts.textContent = ptsA;

    content.appendChild(index);
    content.appendChild(question);
    content.appendChild(answer);
    content.appendChild(answerONE);
    content.appendChild(answerTWO);
    content.appendChild(answerTHREE);
    return content;
};
let random = Math.floor(Math.random() * 2) + 1

const questions = [
    newQuestion(
        1, 
        "¿Cuál es la molécula responsable de almacenar la información genética en la célula?", 
        "ADN", 
        "ARN", 
        "Proteína", 
        "Lípidos", 
        5
    ),newQuestion(
        2, 
        "¿Qué orgánulo es conocido como la 'central energética' de la célula?", 
        "Mitocondria", 
        "Núcleo", 
        "Ribosoma", 
        "Aparato de Golgi", 
        5
    )
];
let contentMAIN = document.querySelector(".content");
for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 2) + 1
    contentMAIN.appendChild(questions[random])
    

}
document.body.innerHTML += random;
