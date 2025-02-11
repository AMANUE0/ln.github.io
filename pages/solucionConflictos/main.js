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
    // 1
    new Pregunta("¿Por qué nació la justicia?", 
        "La justicia nació de la necesidad de mantener la armonía entre dos o más personas.", 
        "Para imponer normas estrictas sin excepciones.", 
        "Para beneficiar solo a un grupo social.", 
        "Para castigar a los infractores sin juicio."),
    
    // 2
    new Pregunta("¿Qué es la justicia?", 
        "La justicia es el conjunto de pautas y criterios que establecen un marco adecuado para las relaciones entre personas e instituciones, autorizando, prohibiendo y permitiendo acciones específicas en la interacción de estas.", 
        "Un sistema que solo protege a los ciudadanos con recursos.", 
        "Un mecanismo de control gubernamental absoluto.", 
        "Un conjunto de normas que rigen solo en situaciones excepcionales."),
    
    // 3
    new Pregunta("¿Qué son los 'Derechos Humanos'?", 
        "Los 'Derechos Humanos' son normas que reconocen y protegen la dignidad de todos los seres humanos.", 
        "Reglas que varían según cada país y pueden ser ignoradas.", 
        "Leyes opcionales dependiendo del gobierno en turno.", 
        "Derechos que aplican solo en ciertos continentes."),
    
    // 4
    new Pregunta("¿Cómo rigen los 'Derechos Humanos' las relaciones en la sociedad?", 
        "Los 'Derechos Humanos' rigen la manera en que los individuos viven en sociedad y se relacionan entre sí, al igual que sus relaciones con el Estado y las obligaciones del Estado hacia ellos.", 
        "Son recomendaciones sin obligación de cumplimiento.", 
        "Regulan solo los asuntos económicos de los ciudadanos.", 
        "Aplican solo en caso de conflictos internacionales."),
    
    // Características de los derechos humanos
    // 5
    new Pregunta("¿Qué significa que los derechos humanos sean universales e inalienables?", 
        "Los derechos humanos son universales e inalienables. Todas las personas tienen derecho a ellos.", 
        "Pueden ser eliminados si el gobierno lo decide.", 
        "Aplican solo a quienes cumplan ciertos requisitos.", 
        "Son revocables dependiendo del contexto político."),
    
    // 6
    new Pregunta("¿Qué implica la indivisibilidad de los derechos humanos?", 
        "Los derechos humanos son indivisibles.", 
        "Solo algunos derechos son esenciales y deben cumplirse.", 
        "Pueden ser otorgados de manera parcial.", 
        "Dependen exclusivamente del contexto económico."),
    
    // 7
    new Pregunta("¿Qué significa la interdependencia de los derechos humanos?", 
        "El cumplimiento de un derecho a menudo depende, total o parcialmente, del cumplimiento de otros derechos.", 
        "Cada derecho puede ser ejercido de manera aislada.", 
        "No es necesario garantizar todos los derechos al mismo tiempo.", 
        "Un derecho puede eliminar a otro si es más importante."),
    
    // 8
    new Pregunta("¿Qué garantiza la participación e inclusión en los derechos humanos?", 
        "Todas las personas y todos los pueblos tienen derecho a contribuir, disfrutar y participar activa y libremente en el desarrollo civil, político, económico, social y cultural.", 
        "Que solo las personas educadas tengan voz en la política.", 
        "Que el gobierno decida quién puede o no participar.", 
        "Que las personas se limiten a cumplir las leyes sin opinar."),
    
    // 9
    new Pregunta("¿Cuál es el deber de los Estados respecto a los derechos humanos?", 
        "Los Estados y otros garantes de derechos deben respetar las normas y los principios jurídicos consagrados en los instrumentos de derechos humanos.", 
        "Aplicarlos únicamente cuando sean convenientes.", 
        "Ignorar las denuncias si afectan la estabilidad política.", 
        "Limitar el acceso a ciertos derechos por razones de seguridad."),
    
    // Artículos 17 y 8
    // 10
    new Pregunta("¿Qué establece el artículo 17 de la Constitución Mexicana?", 
        "Toda persona tiene derecho a que se le administre justicia por tribunales que estarán expeditos para impartirla en los plazos y términos que fijen las leyes.", 
        "Los juicios pueden demorarse indefinidamente según el caso.", 
        "Solo ciertos grupos tienen acceso a una defensa legal rápida.", 
        "La justicia puede ser denegada por falta de recursos."),
    
    // 11
    new Pregunta("¿Qué derecho menciona el artículo 8 de la Convención Americana sobre Derechos Humanos?", 
        "Toda persona tiene derecho a ser oída, con las debidas garantías y dentro de un plazo razonable.", 
        "Solo quienes tengan abogados pueden ser escuchados en juicio.", 
        "El tiempo del juicio depende exclusivamente del juez.", 
        "Los testigos deciden si una persona tiene derecho a defensa."),
    
    // 12
    new Pregunta("¿Qué es la justicia expedita?", 
        "Es la que el juez o los tribunales imparten despejada de todo obstáculo burocrático.", 
        "Un sistema judicial sin normas preestablecidas.", 
        "Una justicia limitada solo a los delitos menores.", 
        "Un derecho que depende de la disponibilidad de recursos."),
    
    // 13
    new Pregunta("¿Cuál es el aspecto formal de la justicia expedita?", 
        "Obligación de las autoridades de dar respuesta de manera pronta, completa, imparcial y gratuita.", 
        "Que los jueces tomen decisiones sin pruebas suficientes.", 
        "Que los procesos sean largos y complejos.", 
        "Que las sentencias sean negociadas entre las partes."),
    
    // 14
    new Pregunta("¿Cuál es el aspecto material de la justicia expedita?", 
        "Es la obligación de la autoridad de hacer cumplir sus resoluciones.", 
        "Permitir que las resoluciones se cumplan solo si hay presión mediática.", 
        "Que las resoluciones sean optativas según el caso.", 
        "Que solo se cumplan resoluciones favorables al Estado."),
    // 15. Métodos alternos de la Solución de Conflictos
new Pregunta(
    "¿Qué son los métodos alternos de solución de conflictos?", 
    "El conflicto es un fenómeno natural en toda sociedad, es decir, se trata de un hecho social consustancial a la vida en sociedad.", 
    "Estrategias para ignorar los problemas hasta que desaparezcan.", 
    "Formas de negociación solo entre gobiernos.", 
    "Maneras de evadir la justicia formal."
),

// 16. Problema
new Pregunta(
    "¿Qué es un problema en términos de conflictos?", 
    "Es un estado de tensión o malestar que surge entre dos personas o más.", 
    "Un desacuerdo sin consecuencias relevantes.", 
    "Un debate intelectual sin impacto en la realidad.", 
    "Una situación sin posibilidad de resolución."
),

// 17. Conflicto
new Pregunta(
    "¿Qué caracteriza un conflicto?", 
    "Es una cuestión de difícil solución entre dos o más personas donde ambas tienen o creen tener la razón.", 
    "Un problema siempre provocado por una sola persona.", 
    "Una disputa sin opciones de solución.", 
    "Un enfrentamiento basado en diferencias de idioma."
),

// 18. Conflicto latente
new Pregunta(
    "¿Cómo se define un conflicto latente?", 
    "Son los conflictos que existen, pero las personas implicadas no son conscientes de ellos.", 
    "Es un conflicto que estalla de manera inmediata.", 
    "Es un problema que solo afecta a una persona.", 
    "Es una situación sin importancia real."
),

// 19. Conflicto explícito o manifiesto
new Pregunta(
    "¿Qué es un conflicto explícito o manifiesto?", 
    "Conflictos que son aparentes y reconocidos por las personas implicadas.", 
    "Un desacuerdo interno sin impacto externo.", 
    "Un problema que solo se percibe con el tiempo.", 
    "Una discusión sin relevancia en la sociedad."
),

// 20. Conflicto intrapersonal
new Pregunta(
    "¿Qué es un conflicto intrapersonal?", 
    "Son aquellos que surgen en el interior de la persona y están relacionados con los valores que posee o con cuestiones personales y/o íntimas.", 
    "Un enfrentamiento entre dos personas desconocidas.", 
    "Un problema legal entre empresas.", 
    "Un desacuerdo entre naciones."
),

// 21. Conflicto interpersonal
new Pregunta(
    "¿Qué es un conflicto interpersonal?", 
    "Son aquellos que surgen entre dos personas por la intervención de una tercera persona.", 
    "Una disputa sin impacto en la relación entre las partes.", 
    "Un problema que solo se da en el ámbito laboral.", 
    "Un conflicto que solo involucra a desconocidos."
),

// 22. Conflicto intragrupal
new Pregunta(
    "¿Qué es un conflicto intragrupal?", 
    "Son los que desarrollan enfrentamientos entre diferentes subgrupos dentro de un grupo mayor.", 
    "Un conflicto entre dos países con culturas similares.", 
    "Un problema que surge entre empresas distintas.", 
    "Un desacuerdo que solo ocurre en redes sociales."
),

// 23. Conflicto intergrupal
new Pregunta(
    "¿Qué es un conflicto intergrupal?", 
    "Son aquellos conflictos que tienen lugar entre dos grupos definidos.", 
    "Un desacuerdo interno dentro de una misma comunidad.", 
    "Una disputa sin importancia entre dos sectores empresariales.", 
    "Un problema que solo se da en grupos familiares."
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

