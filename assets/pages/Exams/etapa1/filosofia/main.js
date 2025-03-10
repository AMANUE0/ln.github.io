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
    resultado.textContent = `Tu calificación es: ${puntaje} / 125`;
    document.body.appendChild(resultado);
    if (puntaje === 125) {
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
    
    // --- Verdadero o Falso ---
    new Pregunta(
        "Heraclito establecia que el ser es unico e inmutable.",
        "Falso",
        "Verdad"
    ),
    new Pregunta(
        "El periodo antropologico se enfoco en el estudio de la naturaleza y el origen del cosmos.",
        "Falso",
        "Verdad"
    ),
    new Pregunta(
        "¿La palabra filosofia proviene del vocablo griego 'philos' que significa amor y 'sophia' que significa sabiduría?",
        "Verdad",
        "Falso"
    ),
    new Pregunta(
        "La ciencia tiene como objetivo la busqueda de la verdad, utilizando el metodo cientifico.",
        "Verdad",
        "Falso"
    ),
    new Pregunta(
        "Heraclito fue el filosofo que planteaba que la realidad nace de la lucha de los contrarios.",
        "Verdad",
        "Falso"
    ),
    new Pregunta(
        "En el periodo cosmologico los pensadores griegos se enfocaron en entender la naturaleza y el origen del cosmos.",
        "Verdad",
        "Falso"
    ),
    new Pregunta(
        "La cosmologia estudia la realidad fisica y su relacion con el hombre y sus pensamientos.",
        "Falso",
        "Verdad"
    ),
    new Pregunta(
        "Socrates fue considerado el padre de la filosofia.",
        "Verdad",
        "Falso"
    ),
    // --- Opción múltiple ---
    new Pregunta(
        "Conjunto de saberes, creencias y pautas de conducta de un grupo social.",
        "Cultura",
        "Creencia",
        "Mito",
        "Religión"
    ),
    new Pregunta(
        "Estado de la mente en el que un individuo da por cierto algo sin poseer evidencia de ello.",
        "Creencia",
        "Cultura",
        "Mito",
        "Religión"
    ),
    new Pregunta(
        "Se refiere a eventos que no pueden ser explicados por la experiencia del hombre.",
        "Mito",
        "Cultura",
        "Creencia",
        "Religión"
    ),
    new Pregunta(
        "Sistema solidario de creencias y prácticas que unen una misma comunidad moral.",
        "Religión",
        "Cultura",
        "Mito",
        "Creencia"
    ),
    new Pregunta(
        "Conjunto de ideas y planteamientos que pretenden explicar la realidad mediante el pensamiento lógico y argumentado.",
        "Filosofía",
        "Cultura",
        "Mito",
        "Religión"
    ),
    new Pregunta(
        "Menciona 3 ramas de estudio de la filosofía.",
        "Ontología, Estética y Cosmología",
        "Lógica, Ética, Estética",
        "Cosmología, Ética, Lógica",
        "Ontología, Ética, Cosmología"
    ),
    new Pregunta(
        "Periodos en que se clasifica la filosofía griega.",
        "Cosmológico o presocrático, Antropológico",
        "Antropológico, Lógico",
        "Cosmológico, Moderno",
        "Presocrático, Filosofía Medieval"
    ),
    new Pregunta(
        "Forma de pensar y razonar basada en supuestos informales, erróneos o no justificados.",
        "Pensamiento mágico",
        "Pensamiento lógico",
        "Filosofía",
        "Cosmología"
    ),
    new Pregunta(
        "Estudia la forma correcta de pensar.",
        "Lógica",
        "Ontología",
        "Estética",
        "Cosmología"
    ),
    new Pregunta(
        "Estudia el concepto del 'ser' de forma abstracta.",
        "Ontología",
        "Lógica",
        "Estética",
        "Cosmología"
    ),
    new Pregunta(
        "Periodo en el que se dedicó a las reflexiones del quehacer humano, justicia, vivir bien y actuar bien.",
        "Antropológico",
        "Cosmológico",
        "Presocrático",
        "Moderno"
    ),
    new Pregunta(
        "Filósofo del periodo cosmológico que consideró al agua como arjé, porque ningún ser vivo puede vivir sin ella.",
        "Tales de Mileto",
        "Heráclito",
        "Anaximandro",
        "Pitágoras"
    ),
    new Pregunta(
        "Filósofo del periodo cosmológico que concibe al aire como el arjé, el aliento del mundo, su fuente eterna y divina.",
        "Anaxímenes",
        "Heráclito",
        "Tales de Mileto",
        "Pitágoras"
    ),
    new Pregunta(
        "Escuela filosófica que establece que partículas diminutas son las creadoras del cosmos y lo que percibimos.",
        "Escuela Atomista",
        "Escuela Presocrática",
        "Escuela Platónica",
        "Escuela Pitagórica"
    ),
    new Pregunta(
        "Filósofo del periodo antropológico que establece que el mundo real es el de las realidades inteligibles a las que llamó ideas.",
        "Platón",
        "Aristóteles",
        "Sócrates",
        "Heráclito"
    ),
    new Pregunta(
        "Filósofo que estableció que todo lo material está formado por la mezcla y separación de los 4 elementos.",
        "Empédocles",
        "Anaximandro",
        "Heráclito",
        "Demócrito"
    ),
    new Pregunta(
        "Filósofo que escribió el Mito de la Caverna en donde explica por qué el mundo de las ideas permite entender el mundo real.",
        "Platón",
        "Aristóteles",
        "Sócrates",
        "Heráclito"
    )
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

