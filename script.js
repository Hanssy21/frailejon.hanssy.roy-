const ernesto =
  document.getElementById("ernesto");

const texto =
  document.getElementById("texto");

const boca =
  document.getElementById("boca");

const burbuja =
  document.getElementById("burbuja");


const botonHola =
  document.getElementById("hola");

const botonBailar =
  document.getElementById("bailar");

const botonHablar =
  document.getElementById("hablar");


// =================================
// FRASES DE ERNESTO
// =================================

const frases = [

  "¡Hola! Soy Ernesto Pérez.",

  "¡Qué bonito está nuestro páramo!",

  "¡Los frailejones ayudan a cuidar el agua!",

  "¡Cuidemos la naturaleza!",

  "¡Colombia es maravillosa!",

  "¡Protejamos nuestros páramos!",

  "¡Un abrazo verde para todos!",

  "¡Hay que cuidar el agua!",

  "¡Viva la naturaleza!"
];


// =================================
// FUNCIÓN PARA HABLAR
// =================================

function hablar(frase) {

  // Mostrar texto arriba

  texto.textContent = frase;


  // Mostrar burbuja

  burbuja.textContent = frase;

  burbuja.classList.add("visible");


  // Comprobar si el navegador
  // tiene síntesis de voz

  if (!("speechSynthesis" in window)) {

    console.log(
      "Este navegador no tiene síntesis de voz."
    );

    return;
  }


  // Detener una voz anterior

  window.speechSynthesis.cancel();


  // Crear voz

  const voz =
    new SpeechSynthesisUtterance(frase);


  // Español colombiano

  voz.lang = "es-CO";


  // Voz alegre

  voz.pitch = 1.25;


  // Velocidad

  voz.rate = 0.9;


  // Volumen

  voz.volume = 1;


  // Cuando comienza

  voz.onstart = () => {

    ernesto.classList.add("hablando");

  };


  // Cuando termina

  voz.onend = () => {

    ernesto.classList.remove("hablando");

  };


  // Si ocurre un error

  voz.onerror = () => {

    ernesto.classList.remove("hablando");

  };


  // Hablar

  window.speechSynthesis.speak(voz);
}


// =================================
// BOTÓN SALUDAR
// =================================

botonHola.addEventListener(
  "click",
  () => {

    ernesto.classList.add(
      "saludando"
    );


    hablar(
      "¡Hola, amiguito! ¡Soy Ernesto Pérez!"
    );


    setTimeout(() => {

      ernesto.classList.remove(
        "saludando"
      );

    }, 1800);

  }
);


// =================================
// BOTÓN HABLAR
// =================================

botonHablar.addEventListener(
  "click",
  () => {

    const numero =
      Math.floor(
        Math.random() *
        frases.length
      );


    hablar(
      frases[numero]
    );

  }
);


// =================================
// BOTÓN BAILAR
// =================================

let bailando = false;


botonBailar.addEventListener(
  "click",
  () => {

    bailando = !bailando;


    if (bailando) {

      ernesto.classList.add(
        "bailando"
      );


      hablar(
        "¡A bailar en el páramo!"
      );

    } else {

      ernesto.classList.remove(
        "bailando"
      );


      hablar(
        "¡Eso estuvo divertido!"
      );

    }

  }
);


// =================================
// OCULTAR BURBUJA
// =================================

setTimeout(() => {

  burbuja.classList.remove(
    "visible"
  );

}, 4000);