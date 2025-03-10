document.querySelectorAll(".reactive").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".reactive").forEach(btn => {
            btn.classList.remove("active", "wrong", "selected");
        });

        button.classList.add("selected");
    });
});

let header = document.querySelector("header");
class Pregunta {
    constructor(ask, answerCorrect, option1, option2, option3) {
        this.ask = ask;
        this.answerCorrect = answerCorrect;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.element = null;
    }

    create() {
        const content = document.createElement("section");
        const question = document.createElement("h3");
        const options = document.createElement("ul");
        const answerONE = document.createElement("button");
        const answerTWO = document.createElement("button");
        const answerTHREE = document.createElement("button");
        const answerFOUR = document.createElement("button");

        options.classList.add("options");
        question.classList.add("question");
        content.classList.add("contentQuestion");
        question.textContent = this.ask;
        answerONE.textContent = this.answerCorrect;
        answerTWO.textContent = this.option1;
        answerTHREE.textContent = this.option2;
        answerFOUR.textContent = this.option3;

        answerONE.dataset.correct = "true";
        answerTWO.dataset.correct = "false";
        answerTHREE.dataset.correct = "false";
        answerFOUR.dataset.correct = "false";

        const buttons = [answerONE, answerTWO, answerTHREE, answerFOUR];
        this.shuffleArray(buttons);

        buttons.forEach(button => {
            button.classList.add("reactive");
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
            });
            options.appendChild(button);
        });

        content.appendChild(question);
        content.appendChild(options);

        this.element = content;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

function calificarExamen() {
    let puntaje = 0;
    document.querySelectorAll(".preguntas section").forEach(section => {
        const selected = section.querySelector(".selected");
        const correctAnswer = section.querySelector("[data-correct='true']");
        if (selected) {
            if (selected.dataset.correct === "true") {
                puntaje += 5;
                selected.classList.add("correct");
            } else {
                selected.classList.add("incorrect");
                correctAnswer.classList.add("correct");
            }
        }
    });
    const resultado = document.createElement("div");
    resultado.classList.add("resultado");
    resultado.textContent = `Tu calificación es: ${puntaje} / 115`;
    document.body.appendChild(resultado);
    if (puntaje === 115) {
        let cien = document.createElement("img");
        cien.classList.add("revolucion-industrial");
        cien.src = "../../imagenes/revolucion.webp"
        
        resultado.appendChild(cien)
    }
    // Desplazar la página a la sección de resultado
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });

    document.querySelectorAll(".reactive").forEach(button => {
        button.disabled = true;
    });
    document.querySelector(".finish").disabled = true;
}


function reiniciarExamen() {
    document.querySelector(".preguntas").innerHTML = "";
    document.querySelectorAll(".resultado").forEach(res => res.remove());
    document.querySelector(".finish").disabled = false;

    shuffleArray(preguntas);
    preguntas.forEach(pregunta => pregunta.create());
    preguntas.forEach(pregunta => document.querySelector(".preguntas").appendChild(pregunta.element));
    header.scrollIntoView({ behavior: "smooth", block: "start" });

}

const preguntas = [
    // 1. Be going to - Negativo
    new Pregunta(
        "Choose the correct negative sentence.",
        "She is not going to travel next week.",
        "She not going to travel next week.",
        "She isn't go to travel next week.",
        "She going to not travel next week."
    ),

    // 2. Will - Negativo
    new Pregunta(
        "Choose the correct negative sentence using 'will'.",
        "He will not pass the exam if he doesn't study.",
        "He not will pass the exam if he doesn't study.",
        "He don't will pass the exam if he doesn't study.",
        "He won't passes the exam if he doesn't study."
    ),

    // 3. Be going to - Pregunta
    new Pregunta(
        "Which sentence is a correct question?",
        "Are they going to visit us tomorrow?",
        "They are going to visit us tomorrow?",
        "Is they going to visit us tomorrow?",
        "Going to visit us tomorrow they?"
    ),

    // 4. Will - Pregunta
    new Pregunta(
        "Which sentence is a correct question?",
        "Will she come to the party?",
        "She will come to the party?",
        "Will comes she to the party?",
        "She will to come the party?"
    ),

    // 5. Be going to - Pregunta con Short Answer
    new Pregunta(
        "Are you going to study tonight? (Short Answer)",
        "Yes, I am.",
        "Yes, I do.",
        "Yes, I will.",
        "Yes, I going."
    ),

    // 6. Will - Pregunta con Short Answer
    new Pregunta(
        "Will they help us with the project? (Short Answer)",
        "No, they won’t.",
        "No, they don’t.",
        "No, they not.",
        "No, they isn't."
    ),

    // 7. Conditional 1 - Pregunta con Short Answer
    new Pregunta(
        "If it rains, will you take an umbrella? (Short Answer)",
        "Yes, I will.",
        "Yes, I do.",
        "Yes, I going to.",
        "Yes, I take."
    ),

    // 8. Conditional 1 - Negativo
    new Pregunta(
        "Choose the correct negative sentence.",
        "If you don’t eat, you will not have energy.",
        "If you doesn’t eat, you won’t has energy.",
        "If you not eat, you won’t have energy.",
        "If you don’t eat, you won’t had energy."
    ),

    // 9. Be going to - Pregunta con respuesta negativa
    new Pregunta(
        "Is she going to buy a new car? (Short Answer)",
        "No, she isn’t.",
        "No, she not.",
        "No, she don’t.",
        "No, she won't."
    ),

    // 10. Will - Pregunta con respuesta negativa
    new Pregunta(
        "Will you visit your grandmother this weekend? (Short Answer)",
        "No, I won’t.",
        "No, I doesn’t.",
        "No, I am not.",
        "No, I didn't."
    ),

    // 11. Be going to - Predicción en negativo
    new Pregunta(
        "Look at the dark clouds! It ______ rain today.",
        "isn’t going to",
        "won’t",
        "not going to",
        "doesn’t going to"
    ),

    // 12. Will - Predicción negativa sin evidencia
    new Pregunta(
        "I think she ______ pass the test. She hasn’t studied at all.",
        "won’t",
        "isn’t going to",
        "doesn’t",
        "not will"
    ),

    // 13. Conditional 1 - Pregunta con negación
    new Pregunta(
        "If you don’t practice, will you improve? (Short Answer)",
        "No, I won’t.",
        "No, I don’t.",
        "No, I not.",
        "No, I doesn’t."
    ),

    // 14. Conditional 0 - Negación en hechos generales
    new Pregunta(
        "If you don’t drink water, you ______ survive.",
        "won’t",
        "isn’t going to",
        "not will",
        "doesn’t"
    ),
    new Pregunta(
        "Which sentence correctly uses 'be going to'?",
        "She is going to study for the exam tonight.",
        "She going to study for the exam tonight.",
        "She is go to study for the exam tonight.",
        "She will going to study for the exam tonight."
    ),

    // 2. Will vs Be going to - Diferencia de uso
    new Pregunta(
        "Which sentence shows a spontaneous decision?",
        "I will help you with your homework!",
        "I am going to help you with your homework!",
        "I going to help you with your homework!",
        "I am will help you with your homework!"
    ),

    // 3. Be going to - Planes futuros
    new Pregunta(
        "Lisa ______ (visit) her grandmother next weekend. Complete the sentence.",
        "Lisa is going to visit her grandmother next weekend.",
        "Lisa will visit her grandmother next weekend.",
        "Lisa visits her grandmother next weekend.",
        "Lisa going to visit her grandmother next weekend."
    ),

    // 4. Will - Promesas
    new Pregunta(
        "Choose the sentence that expresses a promise.",
        "I will always be there for you.",
        "I am going to be there for you.",
        "I be going to be there for you.",
        "I am will be there for you."
    ),

    // 5. Conditional 0 - Verdades generales
    new Pregunta(
        "Choose the correct sentence that follows the Zero Conditional structure.",
        "If you heat water to 100°C, it boils.",
        "If you will heat water to 100°C, it boils.",
        "If you heated water to 100°C, it boils.",
        "If you heat water to 100°C, it will boils."
    ),

    // 6. Conditional 1 - Posibilidades reales en el futuro
    new Pregunta(
        "If you don't study, ______.",
        "you will fail the exam.",
        "you fail the exam.",
        "you would fail the exam.",
        "you fails the exam."
    ),

    // 7. Be going to - Predicciones con evidencia
    new Pregunta(
        "Look at the sky! It ______ rain soon.",
        "is going to",
        "will",
        "goes to",
        "is will"
    ),

    // 8. Historia con preguntas
    new Pregunta(
        "John is planning his summer. He has already bought his flight ticket to Spain and booked a hotel. What can we say about his trip?",
        "He is going to travel to Spain this summer.",
        "He will travel to Spain this summer.",
        "He traveling to Spain this summer.",
        "He goes to travel to Spain this summer."
    ),

    // 9. Will - Predicciones sin evidencia
    new Pregunta(
        "I think technology ______ a lot in the next 20 years.",
        "will change",
        "is going to change",
        "changes",
        "is changes"
    ),

    // 10. Conditional 1 - Situaciones reales
    new Pregunta(
        "If you eat too much candy, ______.",
        "you will get a stomachache.",
        "you get a stomachache.",
        "you would get a stomachache.",
        "you getting a stomachache."
    ),

    // 11. Historia con preguntas
    new Pregunta(
        "Anna is looking at the weather forecast. It says it's going to be sunny tomorrow. What will she probably do?",
        "She is going to go to the beach.",
        "She will go to the beach.",
        "She goes to the beach.",
        "She going to go to the beach."
    ),

    // 12. Will - Decisiones espontáneas
    new Pregunta(
        "Someone is knocking on the door. What will you say?",
        "'I will open it!'",
        "'I am going to open it!'",
        "'I opening it!'",
        "'I opens it!'"
    ),

    // 13. Conditional 0 - Hechos científicos
    new Pregunta(
        "If the sun sets, it ______ night.",
        "becomes",
        "become",
        "will becomes",
        "will become"
    ),

    // 14. Conditional 1 - Posibles consecuencias
    new Pregunta(
        "If you don't wear sunscreen, ______.",
        "you will get sunburned.",
        "you get sunburned.",
        "you getting sunburned.",
        "you will gets sunburned."
    ),
    new Pregunta(
        "Which sentence expresses a future plan?",
        "She is going to meet her friends later.",
        "She meets her friends later.",
        "She will meet her friends later.",
        "She is meet her friends later."
    ),

    // 2. Will - Uso para predicciones
    new Pregunta(
        "Choose the correct sentence for a prediction.",
        "I think it will snow tomorrow.",
        "I think it snows tomorrow.",
        "I think it is snow tomorrow.",
        "I think it snow tomorrow."
    ),

    // 3. Be going to - Uso para intenciones
    new Pregunta(
        "Which sentence shows an intention?",
        "I am going to start a new project next week.",
        "I start a new project next week.",
        "I will start a new project next week.",
        "I starting a new project next week."
    ),

    // 4. Will - Uso para promesas
    new Pregunta(
        "Which sentence expresses a promise?",
        "I will always love you.",
        "I am going to always love you.",
        "I always love you.",
        "I will loving you."
    ),

    // 5. Conditional 1 - Real possibilities in the future
    new Pregunta(
        "If I study hard, ______.",
        "I will pass the exam.",
        "I pass the exam.",
        "I would pass the exam.",
        "I passed the exam."
    ),

    // 6. Conditional 1 - Condicional con negación
    new Pregunta(
        "If you don’t hurry, ______.",
        "you will miss the bus.",
        "you miss the bus.",
        "you would miss the bus.",
        "you missed the bus."
    ),

    // 7. Conditional 0 - Uso para hechos generales
    new Pregunta(
        "If you mix red and blue, ______ purple.",
        "you get",
        "you will get",
        "you got",
        "you will gets"
    ),

    // 8. Will - Pregunta con negación
    new Pregunta(
        "Which sentence is the negative form of 'She will come tomorrow'?",
        "She will not come tomorrow.",
        "She not will come tomorrow.",
        "She won't comes tomorrow.",
        "She doesn't will come tomorrow."
    ),

    // 9. Be going to - Pregunta sobre futuro inmediato
    new Pregunta(
        "What is she going to do after work?",
        "She is going to go home.",
        "She goes home.",
        "She will go home.",
        "She is going home."
    ),

    // 10. Conditional 1 - Uso con 'if' y 'will'
    new Pregunta(
        "If you ask me, I ______ help you.",
        "will",
        "would",
        "is going to",
        "am"
    ),

    // 11. Be going to - Uso con planes
    new Pregunta(
        "They ______ visit the museum tomorrow.",
        "are going to",
        "will",
        "is going to",
        "going to"
    ),

    // 12. Conditional 1 - Consecuencias de una acción
    new Pregunta(
        "If you don’t water the plants, ______.",
        "they will die.",
        "they die.",
        "they would die.",
        "they dies."
    ),

    // 13. Will - Predicción sin evidencia
    new Pregunta(
        "I think it ______ rain later.",
        "will",
        "won’t",
        "is",
        "is going to"
    ),

    // 14. Conditional 0 - Uso para hechos científicos
    new Pregunta(
        "If you add sugar to tea, ______ it sweeter.",
        "it makes",
        "it will make",
        "it make",
        "it will makes"
    ),

    // 15. Will - Decisión espontánea
    new Pregunta(
        "Someone asks you for help. What will you say?",
        "I will help you.",
        "I am helping you.",
        "I help you.",
        "I helped you."
    ),
    new Pregunta(
        "What are you going to do this evening?",
        "I am going to watch a movie.",
        "I watch a movie.",
        "I will watch a movie.",
        "I going to watch a movie."
    ),
    
    // 49. Will - Uso para decisiones espontáneas
    new Pregunta(
        "You forgot to bring your umbrella. What will you do?",
        "I will buy one.",
        "I am buy one.",
        "I buy one.",
        "I will buying one."
    ),
];



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(preguntas);
preguntas.forEach(pregunta => pregunta.create());
preguntas.forEach(pregunta => document.querySelector(".preguntas").appendChild(pregunta.element));

const botonFinalizar = document.createElement("button");
botonFinalizar.classList.add("finish");
botonFinalizar.textContent = "Calificar";

botonFinalizar.addEventListener("click", calificarExamen);
document.body.appendChild(botonFinalizar);

const botonReiniciar = document.createElement("button");
botonReiniciar.classList.add("restart");
botonReiniciar.textContent = "Reintentar";
botonReiniciar.addEventListener("click", reiniciarExamen);
document.body.appendChild(botonReiniciar);

