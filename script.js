const app =
  document.getElementById("app");

const ernesto =
  document.getElementById("ernesto");

const texto =
  document.getElementById("subtitulo");

const mensaje =
  document.getElementById("mensaje");

const burbuja =
  document.getElementById("burbuja");

const agua =
  document.getElementById("agua");

const lluvia =
  document.getElementById("lluvia");


const btnSaludar =
  document.getElementById("btnSaludar");

const btnHablar =
  document.getElementById("btnHablar");

const btnBailar =
  document.getElementById("btnBailar");

const btnCaminar =
  document.getElementById("btnCaminar");

const btnLluvia =
  document.getElementById("btnLluvia");

const btnNoche =
  document.getElementById("btnNoche");

const btnAgua =
  document.getElementById("btnAgua");


let puntos = 0;

let bailando = false;

let caminando = false;

let esNoche = false;

let estaLloviendo = false;


// ======================================
// FRASES
// ======================================

const frases = [

  "¡Hola! Soy Ernesto Pérez.",

  "¡Qué hermoso está nuestro páramo!",

  "¡El agua es vida!",

  "¡Cuidemos los frailejones!",

  "¡Protejamos nuestra naturaleza!",

  "¡Los páramos son muy importantes!",

  "¡Qué bonito es Colombia!",

  "¡Vamos a cuidar el agua!",

  "¡Un saludo verde para todos!"
];


// ======================================
// HABLAR
// ======================================

function hablar(frase) {

  texto.textContent =
    frase;

  mensaje.textContent =
    frase;

  burbuja.textContent =
    frase;

  burbuja.classList.add(
    "visible"
  );


  if (
    "speechSynthesis"
    in window
  ) {

    speechSynthesis.cancel();


    const voz =
      new SpeechSynthesisUtterance(
        frase
      );


    voz.lang =
      "es-CO";

    voz.pitch =
      1.2;

    voz.rate =
      .9;

    voz.volume =
      1;


    ernesto.classList.add(
      "hablando"
    );


    voz.onend = () => {

      ernesto.classList.remove(
        "hablando"
      );

    };


    speechSynthesis.speak(
      voz
    );

  }

}


// ======================================
// SALUDAR
// ======================================

btnSaludar.addEventListener(
  "click",
  () => {

    ernesto.classList.add(
      "saludando"
    );

    hablar(
      "¡Hola! ¡Qué alegría verte por aquí!"
    );


    setTimeout(() => {

      ernesto.classList.remove(
        "saludando"
      );

    }, 2000);

  }
);


// ======================================
// HABLAR
// ======================================

btnHablar.addEventListener(
  "click",
  () => {

    const numero =
      Math.floor(
        Math.random()
        * frases.length
      );

    hablar(
      frases[numero]
    );

  }
);


// ======================================
// BAILAR
// ======================================

btnBailar.addEventListener(
  "click",
  () => {

    bailando =
      !bailando;


    if (bailando) {

      ernesto.classList.add(
        "bailando"
      );

      hablar(
        "¡Vamos a bailar!"
      );

    } else {

      ernesto.classList.remove(
        "bailando"
      );

      hablar(
        "¡Qué divertido!"
      );

    }

  }
);


// ======================================
// CAMINAR
// ======================================

btnCaminar.addEventListener(
  "click",
  () => {

    caminando =
      !caminando;


    if (caminando) {

      ernesto.classList.add(
        "caminando"
      );

      hablar(
        "¡Vamos a explorar el páramo!"
      );

    } else {

      ernesto.classList.remove(
        "caminando"
      );

      hablar(
        "¡Me quedo aquí un momento!"
      );

    }

  }
);


// ======================================
// NOCHE
// ======================================

btnNoche.addEventListener(
  "click",
  () => {

    esNoche =
      !esNoche;


    if (esNoche) {

      app.classList.add(
        "noche"
      );

      btnNoche.textContent =
        "☀️ Día";

      hablar(
        "¡Llegó la noche al páramo!"
      );

    } else {

      app.classList.remove(
        "noche"
      );

      btnNoche.textContent =
        "🌙 Noche";

      hablar(
        "¡Buenos días, páramo!"
      );

    }

  }
);


// ======================================
// LLUVIA
// ======================================

function crearLluvia() {

  lluvia.innerHTML =
    "";


  for (
    let i = 0;
    i < 90;
    i++
  ) {

    const gota =
      document.createElement(
        "div"
      );


    gota.className =
      "gota-lluvia";


    gota.style.left =
      Math.random()
      * 100
      + "%";


    gota.style.animationDelay =
      Math.random()
      * 1
      + "s";


    gota.style.opacity =
      .3 +
      Math.random()
      * .7;


    lluvia.appendChild(
      gota
    );

  }

}


crearLluvia();


btnLluvia.addEventListener(
  "click",
  () => {

    estaLloviendo =
      !estaLloviendo;


    if (estaLloviendo) {

      lluvia.classList.add(
        "activa"
      );

      btnLluvia.textContent =
        "☀️ Parar lluvia";

      hablar(
        "¡Está lloviendo! El páramo está feliz."
      );

    } else {

      lluvia.classList.remove(
        "activa"
      );

      btnLluvia.textContent =
        "🌧️ Lluvia";

      hablar(
        "La lluvia terminó."
      );

    }

  }
);


// ======================================
// CREAR GOTAS DE AGUA
// ======================================

function crearGota() {

  const gota =
    document.createElement(
      "div"
    );


  gota.className =
    "gota";

  gota.textContent =
    "💧";


  gota.style.left =
    (10 + Math.random() * 80)
    + "%";


  gota.style.top =
    (20 + Math.random() * 55)
    + "%";


  document
    .getElementById("escenario")
    .appendChild(gota);


  gota.addEventListener(
    "click",
    () => {

      puntos++;

      agua.textContent =
        puntos;


      gota.remove();


      mensaje.textContent =
        "💧 ¡Encontraste agua!";


      hablar(
        "¡Encontraste una gota de agua!"
      );

    }
  );


  setTimeout(() => {

    if (
      document.body.contains(
        gota
      )
    ) {

      gota.remove();

    }

  }, 6000);

}


btnAgua.addEventListener(
  "click",
  () => {

    crearGota();

    mensaje.textContent =
      "💧 ¡Busca la gota y haz clic sobre ella!";

  }
);


// ======================================
// PARPADEO AUTOMÁTICO
// ======================================

function parpadear() {

  ernesto.classList.add(
    "parpadeando"
  );


  setTimeout(() => {

    ernesto.classList.remove(
      "parpadeando"
    );

  }, 180);

}


setInterval(
  parpadear,
  3500
);


// ======================================
// OCULTAR BURBUJA
// ======================================

setInterval(
  () => {

    if (
      !speechSynthesis.speaking
    ) {

      burbuja.classList.remove(
        "visible"
      );

    }

  },
  5000
);


// ======================================
// MENSAJE INICIAL
// ======================================

setTimeout(
  () => {

    hablar(
      "¡Hola! Soy Ernesto. ¡Bienvenido al páramo!"
    );

  },
  1000
);