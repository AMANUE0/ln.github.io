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
                puntaje += 4;
                selected.classList.add("correct");
            } else {
                selected.classList.add("incorrect");
                correctAnswer.classList.add("correct");
            }
        }
    });
    const resultado = document.createElement("div");
    resultado.classList.add("resultado");
    resultado.textContent = `Tu calificación es: ${puntaje} / 112`;
    document.body.appendChild(resultado);
    if (puntaje === 112) {
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
    new Pregunta("¿Qué es la célula?", "Es la unidad estructural y funcional básica de todos los seres vivos.", 
                 "Es una estructura que forma los tejidos de los seres vivos.", 
                 "Es el componente más grande de un organismo.", 
                 "Es una unidad que sólo se encuentra en los animales."),
                 
    new Pregunta("¿Qué características tiene la célula?", "La célula es la unidad estructural y funcional de los seres vivos. Posee una membrana, citoplasma y material genético.", 
                 "Es una estructura que contiene ADN y agua.", 
                 "Tiene una membrana y proteínas en su interior.", 
                 "Es la unidad más pequeña de la vida."),
                 
    new Pregunta("¿Qué es la homeostasis?", "Es el proceso de mantener el equilibrio interno del organismo, regulando sus funciones y condiciones internas.", 
                 "Es el proceso de división celular.", 
                 "Es el equilibrio entre el cuerpo y el ambiente externo.", 
                 "Es el proceso de renovación de células."),
                 
    new Pregunta("¿Qué es la salud?", "Es el estado en el que el cuerpo humano funciona normalmente, sin enfermedades y con un buen equilibrio físico, mental y social.", 
                 "Es la capacidad de defenderse de las enfermedades.", 
                 "Es la ausencia de enfermedades en el cuerpo.", 
                 "Es el estado de bienestar físico y mental."),
                 
    new Pregunta("¿Qué es la enfermedad?", "Es una alteración del estado de salud del cuerpo, que impide que sus funciones se desarrollen correctamente.", 
                 "Es la falta de nutrientes en el cuerpo.", 
                 "Es una disfunción de algún sistema del cuerpo.", 
                 "Es una infección causada por bacterias."),
                 
    new Pregunta("Características de los seres vivos", "1. Están formados por una o más células. 2. Presentan metabolismo. 3. Mantienen la homeostasis. 4. Responden a los estímulos. 5. Poseen ácido desoxirribonucleico como material genético. 6. Crecen. 7. Se reproducen. 8. Evolucionan.", 
                 "Son seres que tienen una forma específica.", 
                 "Son seres que sólo se reproducen asexualmente.", 
                 "Son seres que tienen un solo tipo de célula."),
                 
    new Pregunta("Es la unidad estructural y funcional de todo ser vivo: La célula", "Verdadero", 
                 "Falso", 
                 "", 
                 ""),
                 
    new Pregunta("¿Qué descubrió Séneca en el siglo 1 d.C.?", "Descubrió que, al utilizar un recipiente esférico transparente lleno de agua, era posible ver la letra más grande y clara.", 
                 "Descubrió las primeras bacterias.", 
                 "Demostró que los seres vivos se componen de células.", 
                 "Descubrió la teoría celular."),
                 
    new Pregunta("¿Cuándo se crearon las lupas (primeros microscopios)?", "En el año 1000", 
                 "En el siglo XVI.", 
                 "En el siglo XIX.", 
                 "En el siglo XII."),
                 
    new Pregunta("¿Qué es un microscopio compuesto?", "Es un microscopio con más de una lente.", 
                 "Es un microscopio de alta resolución.", 
                 "Es un microscopio que se usa para ver objetos grandes.", 
                 "Es un microscopio que sólo tiene una lente."),
                 
    new Pregunta("¿Qué dice la teoría celular?", "Todos los seres vivos, sin importar sus diferencias, tienen en común que están constituidos por células.", 
                 "Las células son una parte opcional de los organismos.", 
                 "Las células son exclusivas de los animales.", 
                 "Las células no tienen función en los seres vivos."),
                 
    new Pregunta("¿Qué es la célula?", "Es la unidad estructural y funcional básica de todos los seres vivos.", 
                 "Es un órgano dentro de los seres vivos.", 
                 "Es una parte del sistema nervioso.", 
                 "Es la estructura que compone los huesos."),
                 
    new Pregunta("Características de las células", "Son unidades separadas que constan de una membrana, todas las células tienen citoplasma y material genético.", 
                 "Las células no tienen membrana.", 
                 "Las células sólo tienen núcleo.", 
                 "Las células no tienen citoplasma."),
                 
    new Pregunta("Características de las células procariotas", "Fueron los primeros organismos del planeta y aún hoy son extraordinariamente abundantes. Son unicelulares.", 
                 "Son multicelulares.", 
                 "Son organismos que poseen núcleo.", 
                 "Son organismos complejos."),
                 
    new Pregunta("Categorías de las células procariotas", "Bacterias y Arqueas.", 
                 "Bacterias y Algas.", 
                 "Hongos y Bacterias.", 
                 "Algas y Protozoos."),
                 
    new Pregunta("Tamaño de procariotas", "1-2 micras", 
                 "10-20 micras.", 
                 "50-60 micras.", 
                 "0.1 micras."),
                 
    new Pregunta("Características de células eucariotas", "Son más complejas que las procariotas y poseen un núcleo.", 
                 "Son más simples que las procariotas.", 
                 "No tienen núcleo.", 
                 "Son organismos unicelulares."),
                 
    new Pregunta("¿Qué son las vesículas?", "Son pequeños organelos semejantes a sacos que surgen de la membrana plasmática o del sistema endomembranoso.", 
                 "Son partes del núcleo celular.", 
                 "Son estructuras que almacenan energía.", 
                 "Son partículas que forman el ADN."),
                 
    new Pregunta("¿Qué es el aparato de Golgi?", "Es un conjunto especializado de sacos membranosos y aplanados interconectados, semejante a hot cakes empalmados.", 
                 "Es la parte de la célula que produce energía.", 
                 "Es un organelo involucrado en la división celular.", 
                 "Es una estructura del citoplasma que se encarga de almacenar proteínas."),
                 
    new Pregunta("¿Qué son las vacuolas?", "Son como las vesículas, organelos semejantes a sacos membranosos, pero con un mayor tamaño y más especializadas.", 
                 "Son estructuras que forman las membranas.", 
                 "Son organelos que realizan la fotosíntesis.", 
                 "Son parte del sistema nervioso de las células."),
                 
    new Pregunta("¿Qué es la mitocondria?", "Es un organelo conformado por una membrana, donde la membrana externa es lisa y la interna forma una serie de pliegues llamados crestas.", 
                 "Es la estructura que controla la célula.", 
                 "Es el sitio donde se realiza la fotosíntesis.", 
                 "Es el organelo responsable de almacenar ADN."),
                 
    new Pregunta("¿Qué son los cloroplastos?", "Son organelos que están conformados por una membrana doble.", 
                 "Son estructuras en las que se realiza la respiración celular.", 
                 "Son estructuras que almacenan energía en forma de glucosa.", 
                 "Son partes del aparato digestivo de las células."),
                 
    new Pregunta("Transporte celular", "Para que la célula se mantenga con vida debe intercambiar materiales con su entorno y comunicarse con otras células.", 
                 "Las células no necesitan intercambio de materiales.", 
                 "Las células sólo intercambian materiales con el núcleo.", 
                 "Las células no se comunican entre sí."),
                 
    new Pregunta("¿Cuál es el transporte activo?", "Es el proceso en el que el movimiento se da de una zona de baja concentración a una de alta, y la célula invierte energía.", 
                 "Es el movimiento sin necesidad de energía.", 
                 "Es un proceso de difusión sin gasto energético.", 
                 "Es un transporte de nutrientes hacia fuera de la célula."),
                 
    new Pregunta("¿Cuál es el transporte pasivo?", "Es el proceso donde no se requiere energía para mover las sustancias.", 
                 "Es el proceso en el que la célula necesita energía para absorber nutrientes.", 
                 "Es el proceso que ocurre solo con agua.", 
                 "Es el movimiento de una molécula en contra de su concentración."),
                 
    new Pregunta("¿Qué es la ósmosis?", "Es el fenómeno de difusión del agua a través de una membrana semipermeable que separa dos soluciones con diferentes concentraciones de soluto.", 
                 "Es el paso de moléculas a través de la membrana.", 
                 "Es el transporte de partículas grandes.", 
                 "Es un tipo de difusión del oxígeno."),
                 
    new Pregunta("¿Qué es la difusión?", "Es el proceso mediante el cual se produce el movimiento de las moléculas desde un lugar donde esa molécula está en mayor concentración.", 
                 "Es el proceso de transporte activo de moléculas.", 
                 "Es el movimiento de agua a través de una membrana.", 
                 "Es el intercambio de gases en los pulmones."),
                 
    new Pregunta("Conductas para tener una vida saludable", "1. Consumir una dieta equilibrada. 2. Tener una higiene personal adecuada. 3. Mantener un patrón y calidad de sueño adecuado. 4. Realizar ejercicio. 5. Evitar fumar, consumir adicciones. 6. Evitar el estrés. 7. Mantener actitud positiva.", 
                 "Mantenerse sedentario y evitar el ejercicio.", 
                 "Consumir alimentos procesados y evitar la actividad física.", 
                 "Mantener un estilo de vida activo y saludable."),
                 
    new Pregunta("¿Qué es el transporte activo?", "Es el proceso en el que el movimiento se da de una zona de baja concentración a una de alta, y la célula invierte energía.", 
                 "Es un proceso pasivo que no requiere energía.", 
                 "Es un proceso que se da solo con agua.", 
                 "Es un tipo de transporte de materiales a través del núcleo.")
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

