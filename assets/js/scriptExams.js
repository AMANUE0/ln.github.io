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
    resultado.textContent = `Tu calificación es: ${puntaje} / 160`;
    document.body.appendChild(resultado);
    if (puntaje === 160) {
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
    new Pregunta("¿Que es la Abstracciòn?", 
        "Es un concepto clave en la POO. Permite moldear elementos del mundo real.", 
        "Implica ocultar los detalles internos de un objeto y proporcionar una interfaz publica para interactuar con el.", 
        "Permite crear nuevas clases basadas en clases existentes.", 
        "Son como planos o plantillas que definen la estructura y el comportamiendo de los objetos."),
       
    // 2
    new Pregunta("¿Cuál es la función principal de la Barra de Menús en Visual Studio?",  
        "Permitir acceder a opciones como 'Archivo', 'Editar' y 'Proyecto'",  
        "Mostrar errores del código",  
        "Organizar archivos y carpetas del proyecto",  
        "Editar propiedades de los controles"),  

    // 3
    new Pregunta("¿Dónde se encuentra normalmente el Explorador de Soluciones en Visual Studio?",  
        "En el lado derecho de la ventana",  
        "En la parte superior junto a la barra de herramientas",  
        "En la parte inferior dentro de la ventana de salida",  
        "En una pestaña dentro del editor de código"),  

    // 4
    new Pregunta("¿Qué función cumple la Ventana de Propiedades en Visual Studio?",  
        "Permite modificar las propiedades de los elementos seleccionados",  
        "Muestra la estructura del proyecto con archivos y carpetas",  
        "Muestra mensajes de compilación y errores",  
        "Permite escribir y editar el código fuente"),  

    // 5
    new Pregunta("¿Para qué sirve la Ventana de Salida en Visual Studio?",  
        "Muestra mensajes de compilación, advertencias y errores",  
        "Permite alternar entre archivos abiertos",  
        "Contiene iconos y botones de acceso rápido",  
        "Permite modificar las propiedades de los controles"),  

    // 6
    new Pregunta("¿Qué herramienta en Visual Studio permite arrastrar y soltar controles en formularios?",  
        "El Diseñador de Formularios",  
        "El Explorador de Soluciones",  
        "La Ventana de Propiedades",  
        "La Barra de Estado"),  

    // 7
    new Pregunta("¿Dónde se pueden ver y alternar entre archivos abiertos en Visual Studio?",  
        "En las pestañas del editor de código",  
        "En la Barra de Estado",  
        "En la Ventana de Propiedades",  
        "En la Ventana de Salida"),  

    // 8
    new Pregunta("¿Qué permite hacer la herramienta de Búsqueda y Reemplazo en Visual Studio?",  
        "Encontrar texto en el código y modificarlo rápidamente",  
        "Organizar archivos y carpetas en el proyecto",  
        "Ejecutar el código sin errores",  
        "Modificar las propiedades de los controles en los formularios"),
    // 9
    new Pregunta("¿Qué son los eventos en C#?",  
        "Mecanismos que permiten a una clase notificar a otras cuando ocurren ciertas acciones",  
        "Funciones que ejecutan código automáticamente en segundo plano",  
        "Variables que almacenan referencias a métodos",  
        "Objetos que permiten crear interfaces gráficas en C#"),  

    // 10
    new Pregunta("¿Qué papel desempeña el Editor (Publicador) del Evento en C#?",  
        "Es el objeto que genera y dispara el evento",  
        "Es el objeto que escucha los eventos y responde a ellos",  
        "Es el método que maneja los eventos cuando ocurren",  
        "Es una función especial de C# que se ejecuta al iniciar la aplicación"),  

    // 11
    new Pregunta("¿Cómo se llaman los objetos que se registran para recibir notificaciones de eventos en C#?",  
        "Suscriptores u oyentes",  
        "Editores del evento",  
        "Invocadores de métodos",  
        "Desencadenadores de acciones"),  

    // 12
    new Pregunta("¿Qué es un manejador de eventos en C#?",  
        "Un método que se ejecuta cuando ocurre un evento",  
        "Una clase especial para gestionar eventos en la aplicación",  
        "Un tipo de variable que almacena eventos",  
        "Un método que crea eventos dinámicamente"),  

    // 13
    new Pregunta("¿Qué concepto en C# se usa para conectar eventos con manejadores de eventos?",  
        "Delegados",  
        "Interfaces",  
        "Instancias de clase",  
        "Constructores"),  

    // 14
    new Pregunta("¿Cómo se declara un evento en C#?",  
        "Usando la palabra clave 'event'",  
        "Con el operador '=>' en una expresión lambda",  
        "Mediante el uso de una interfaz específica",  
        "Creando una clase con un método estático"),  

    // 15
    new Pregunta("¿Qué sucede cuando se invoca un evento en C#?",  
        "Se ejecutan todos los manejadores de eventos registrados para ese evento",  
        "Se crean nuevas instancias del objeto suscriptor",  
        "Se borra la suscripción de los oyentes activos",  
        "Se finaliza la ejecución de la aplicación"),  
    // 16
    new Pregunta("¿Qué permiten los eventos en C#?",  
        "Crear aplicaciones interactivas y modulares mediante la comunicación entre componentes",  
        "Ejecutar código de manera automática sin intervención del usuario",  
        "Crear instancias de clases dinámicamente en tiempo de ejecución",  
        "Manipular estructuras de datos sin necesidad de código explícito"),  

    // 17
    new Pregunta("¿Cuál de los siguientes es un evento común en un control Button en Windows Forms?",  
        "Click",  
        "Load",  
        "KeyPress",  
        "SelectionChanged"),  

    // 18
    new Pregunta("¿Qué es un manejador de eventos en C#?",  
        "Un método que se ejecuta en respuesta a un evento específico",  
        "Un objeto que administra el ciclo de vida de un formulario",  
        "Una clase encargada de validar la entrada del usuario",  
        "Un tipo de dato utilizado para almacenar eventos en memoria"),  

    // 19
    new Pregunta("¿Cuál es el flujo básico de los eventos en Windows Forms?",  
        "Se genera el evento → Se ejecuta el manejador de eventos → Se responde a la acción",  
        "Se responde a la acción → Se genera el evento → Se ejecuta el manejador de eventos",  
        "Se ejecuta el manejador de eventos → Se genera el evento → Se responde a la acción",  
        "Se genera el evento → Se responde a la acción → Se ejecuta el manejador de eventos"),  

    // 20
    new Pregunta("¿Qué permite hacer un evento personalizado en C#?",  
        "Definir acciones específicas que no están predefinidas en los controles estándar",  
        "Modificar los eventos preexistentes de los controles en Windows Forms",  
        "Deshabilitar eventos en componentes del formulario",  
        "Eliminar eventos predeterminados y reemplazarlos por nuevos"),  

    // 21
    new Pregunta("¿Cuál de los siguientes eventos se usa para detectar cuando un usuario cambia la selección en un ListBox?",  
        "SelectionChanged",  
        "KeyPress",  
        "MouseEnter",  
        "FormClosing"),  

    // 22
    new Pregunta("¿Qué evento se usa para detectar cuando el usuario escribe en un cuadro de texto?",  
        "TextChanged",  
        "Click",  
        "Load",  
        "SelectionChanged"),  

    // 23
    new Pregunta("¿Para qué se usa el evento KeyPress en un cuadro de texto?",  
        "Capturar la entrada del teclado y realizar validaciones",  
        "Detectar clics del usuario dentro del formulario",  
        "Controlar el estado de las casillas de verificación",  
        "Administrar el ciclo de vida del formulario"),  

    // 24
    new Pregunta("¿Cuál de los siguientes eventos se usa para detectar cuando un usuario marca o desmarca un CheckBox?",  
        "CheckChanged",  
        "MouseLeave",  
        "KeyPress",  
        "SelectionChanged"),  

    // 25
    new Pregunta("¿Qué permite el evento Drag & Drop en C#?",  
        "Implementar la funcionalidad de arrastrar y soltar elementos entre controles",  
        "Ejecutar código en respuesta a un clic del usuario",  
        "Capturar eventos del teclado en tiempo real",  
        "Deshabilitar la interacción del usuario con el formulario"),  

    // 26
    new Pregunta("¿Cuál es la función del evento Timer Tick en Windows Forms?",  
        "Ejecutar tareas a intervalos regulares",  
        "Detectar cuando un usuario presiona una tecla",  
        "Capturar eventos del mouse dentro del formulario",  
        "Manejar el cierre de la aplicación"),  

    // 27
    new Pregunta("¿Qué eventos se utilizan para manejar el cierre de un formulario en Windows Forms?",  
        "FormClosing y FormClosed",  
        "Load y Unload",  
        "Closed y Opened",  
        "Start y End"), 
    // 28
    new Pregunta("¿En qué se basa la Programación Orientada a Objetos (POO)?",  
        "En crear objetos que representan entidades del mundo real, con atributos y métodos",  
        "En la secuencialidad de las instrucciones en el código",  
        "En la manipulación directa de datos y estructuras complejas",  
        "En el uso de funciones sin clases ni objetos"),  

    // 29
    new Pregunta("¿Qué es una clase en POO?",  
        "Una plantilla que define la estructura y comportamiento de los objetos",  
        "Un tipo de objeto que almacena datos",  
        "Una función que ejecuta acciones específicas",  
        "Un conjunto de objetos de una misma categoría"),  

    // 30
    new Pregunta("¿Qué permite la abstracción en POO?",  
        "Simplificar y modelar elementos del mundo real enfocándose en sus características esenciales",  
        "Ocultar la implementación interna de los objetos",  
        "Crear nuevas clases a partir de clases existentes",  
        "Permitir que objetos respondan de manera diferente a la misma operación"),  

    // 31
    new Pregunta("¿Qué es la encapsulación en POO?",  
        "Ocultar los detalles internos de un objeto y proporcionar una interfaz pública para interactuar con él",  
        "Crear jerarquías de clases basadas en clases existentes",  
        "Permitir que objetos de diferentes clases respondan de manera única a una misma operación",  
        "Definir atributos y métodos de los objetos para que sean accesibles desde fuera de la clase"),  

    // 32
    new Pregunta("¿Qué promueve la herencia en POO?",  
        "La reutilización de código y la creación de jerarquías de clases",  
        "La ocultación de datos sensibles dentro de los objetos",  
        "La creación de objetos sin necesidad de clases",  
        "La creación de interfaces comunes para todos los objetos"),  

    // 33
    new Pregunta("¿Qué permite el polimorfismo en POO?",  
        "Que objetos de diferentes clases respondan de manera única a una misma operación",  
        "Crear nuevas clases sin reutilizar código",  
        "Reemplazar métodos y atributos de las clases base",  
        "Definir una estructura uniforme para todos los objetos"),  

    // 34
    new Pregunta("¿Cuál es una de las ventajas de la POO?",  
        "Modularidad, reutilización de código y mantenimiento más fácil",  
        "Mayor flexibilidad en el uso de funciones sin clases",  
        "Reducción de la complejidad al no usar objetos",  
        "Menor uso de memoria en aplicaciones pequeñas"),  

    // 35
    new Pregunta("¿Qué es C# Windows Forms?",  
        "Una tecnología para crear aplicaciones de escritorio interactivas en Windows",  
        "Un framework para desarrollar aplicaciones web",  
        "Una plataforma para aplicaciones móviles multiplataforma",  
        "Un sistema operativo para crear interfaces de usuario"),  

    // 36
    new Pregunta("¿Qué tipo de aplicaciones se pueden desarrollar con Windows Forms?",  
        "Aplicaciones de escritorio con interfaces gráficas",  
        "Aplicaciones web interactivas",  
        "Juegos en línea multijugador",  
        "Aplicaciones móviles multiplataforma"),  

    // 37
    new Pregunta("¿Cuál es una de las principales características de C# Windows Forms?",  
        "Un diseñador visual para crear interfaces de usuario arrastrando y soltando controles",  
        "Especificidad para crear aplicaciones web en lugar de aplicaciones de escritorio",  
        "Falta de compatibilidad con bases de datos",  
        "No permite la creación de múltiples ventanas en una misma aplicación"),  

    // 38
    new Pregunta("¿Qué tipo de controles se pueden utilizar en Windows Forms?",  
        "Botones, etiquetas, cajas de texto, cuadros de lista, barras de progreso y más",  
        "Solo botones y etiquetas",  
        "Solo cuadros de texto y cuadros de lista",  
        "Controles limitados a solo formularios y menús"),  

    // 39
    new Pregunta("¿Qué tipo de eventos se pueden manejar en Windows Forms?",  
        "Eventos como clic en un botón, cambio de texto en un cuadro de texto, etc.",  
        "Solo eventos relacionados con la interacción de mouse",  
        "Solo eventos relacionados con la interacción de teclado",  
        "Eventos del sistema operativo, como apagado y reinicio"),  

    // 40
    new Pregunta("¿Qué permite la persistencia de datos en Windows Forms?",  
        "Conectar con bases de datos y almacenar datos de forma persistente",  
        "Solo almacenar datos en memoria durante la ejecución",  
        "Crear interfaces de usuario sin conexión a bases de datos",  
        "Realizar cálculos sin utilizar bases de datos"),  

   
        
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

