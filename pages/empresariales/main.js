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
    resultado.textContent = `Tu calificación es: ${puntaje} / 100`;
    document.body.appendChild(resultado);
    if (puntaje === 100) {
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
    // 1
    new Pregunta("Es el conjunto de características que te permiten desarrollar cualidades extraordinarias.", 
        "Filosofía del emprendedor", 
        "Emprendimiento", 
        "Negocio exitoso", 
        "Liderazgo",
    ),  
    
    // 2
    new Pregunta("Es un individuo que tiene la virtud de descubrir cómo, cuándo, y dónde se presentan las posibilidades de desarrollar ideas de negocios.", 
        "Emprendedor", 
        "Inversionista", 
        "Especialista", 
        "Empresario",
    ),
    
    // 3
    new Pregunta("Es una persona que por concesión o por contrato ejecuta una obra o explota un servicio público. Este debe tener características de emprendedor.", 
        "Empresario", 
        "Emprendedor", 
        "Inversionista", 
        "Visionario",
    ),
    
    // 4
    new Pregunta("Es aquella persona que, a partir de su espíritu emprendedor e iniciativa, emprende nuevos proyectos o genera ideas en una empresa que no es la suya.", 
        "Intrapreneur", 
        "Entrepreneur", 
        "Empresario", 
        "Emprendedor",
    ),
    
    // 5
    new Pregunta("Es el individuo que emprende su proyecto en un entorno propio y del cual espera obtener para sí mismo los beneficios del emprendimiento.", 
        "Entrepreneur", 
        "Intrapreneur", 
        "Empresario", 
        "Inversionista",
    ),
    
    // 6
    new Pregunta("Una de las habilidades del emprendedor es ser visionario, es decir, ser una persona capaz de ver más allá de sus horizontes inmediatos e identificar posibilidades para un rumbo nuevo.", 
        "Visión emprendedora", 
        "Intuición", 
        "Rastreador", 
        "Líder",
    ),
    
    // 7
    new Pregunta("Siempre está buscando donde hacer negocios; se caracteriza por su poca aversión al riesgo.", 
        "Visionario", 
        "Inversionista", 
        "Especialista", 
        "Emprendedor",
    ),
    
    // 8
    new Pregunta("Es aquel que tiene un capital y decide crear una empresa; busca la rentabilidad por encima de todo.", 
        "Inversionista", 
        "Empresario", 
        "Visionario", 
        "Intrapreneur",
    ),
    
    // 9
    new Pregunta("Tiene un perfil más técnico y una visión aguda para detectar donde se están cometiendo errores para mejorar, busca la forma de hacer algo diferente.", 
        "Especialista", 
        "Intrapreneur", 
        "Inversionista", 
        "Visionario",
    ),
    
    // 10
    new Pregunta("Lo caracteriza su capacidad de influir, ya que es capaz de convencer a sus colaboradores y empujarlos hacia el objetivo.", 
        "Persuasivo", 
        "Líder", 
        "Visionario", 
        "Emprendedor",
    ),
    
    // 11
    new Pregunta("Su gran dosis de intuición le hace ir más allá de lo que aparenta ante nuestra visión.", 
        "Intuitivo", 
        "Visionario", 
        "Rastreador", 
        "Especialista",
    ),
    
    // 12
    new Pregunta("Tiene una mente bastante racional y analítica que le permite detectar errores o situaciones donde se hacen las cosas de manera poco práctica, para transformarlas en oportunidades de negocio.", 
        "Rastreador", 
        "Visionario", 
        "Especialista", 
        "Intuitivo",
    ),
    
    // 13
    new Pregunta("Posee una gran capacidad de adaptación; sabe aprovechar los contratiempos.", 
        "Al azar", 
        "Rastreador", 
        "Persuasivo", 
        "Visionario",
    ),
    
    // 14
    new Pregunta("La visión nos debe dar respuesta a la pregunta.", 
        "¿Qué queremos crear?", 
        "¿Qué es un negocio?", 
        "¿Cómo emprender?", 
        "¿Qué es un proyecto?",
    ),
    
    // 15
    new Pregunta("Un proyecto de vida es un plan personal a lo largo o mediano plazo, que se piensa seguir con el paso de los años.", 
        "Proyecto de vida personal", 
        "Plan estratégico", 
        "Emprendimiento", 
        "Iniciativa personal",
    ),
    
    // 16
    new Pregunta("Se diseña con el fin de cumplir determinados objetivos o metas concretas y se fundamenta en gustos personales, valores o habilidades.", 
        "Propósito del proyecto de vida", 
        "Misión", 
        "Objetivos de vida", 
        "Metas profesionales",
    ),
    
    // 17
    new Pregunta("Ser su propio jefe, hacer algo que se disfruta, tener la oportunidad de ser creativo, tener la libertad de fijar su propio horario, tener un puesto seguro, hacer más dinero, ser reconocido dentro de la comunidad.", 
        "¿Qué se puede esperar de ser su propio jefe?", 
        "¿Qué se espera de ser emprendedor?", 
        "Ser exitoso en el negocio", 
        "Alcanzar la estabilidad económica",
    ),
    
    // 18
    new Pregunta("Es la capacidad de organizar, manejar y asumir los riesgos de los negocios de una empresa, de ser emprendedor.", 
        "Emprendedurismo", 
        "Liderazgo", 
        "Innovación", 
        "Visión",
    ),
    
    // 19
    new Pregunta("Es acometer y comenzar una obra, un negocio, un empeño, especialmente si encierran dificultad o peligro.", 
        "Emprender", 
        "Invertir", 
        "Gestionar", 
        "Organizar",
    ),
    
    // 20
    new Pregunta("Conjunto de valores, creencias y formas de actuar y expresarse en torno a un ecosistema de emprendimiento, que proporciona a las personas las habilidades necesarias para enfrentarse con éxito a los constantes cambios que se producen en el medio.", 
        "Ecosistema de emprendimiento", 
        "Cultura empresarial", 
        "Innovación social", 
        "Mentalidad emprendedora",
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

