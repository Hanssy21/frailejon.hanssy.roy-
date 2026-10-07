// ==========================================
// ELEMENTOS
// ==========================================

const app =
  document.querySelector(".app");

const escenario =
  document.getElementById("escenario");

const frailejon =
  document.getElementById("frailejon");

const burbuja =
  document.getElementById("burbuja");

const subtitulo =
  document.getElementById("subtitulo");

const mensaje =
  document.getElementById("mensaje");

const aguaTexto =
  document.getElementById("agua");

const lluvia =
  document.getElementById("lluvia");


// ==========================================
// BOTONES
// ==========================================

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


// ==========================================
// COMPROBAR ELEMENTOS
// ==========================================

const elementos = {

  app,
  escenario,
  frailejon,
  burbuja,
  subtitulo,
  mensaje,
  aguaTexto,
  lluvia,
  btnSaludar,
  btnHablar,
  btnBailar,
  btnCaminar,
  btnLluvia,
  btnNoche,
  btnAgua

};


Object.entries(elementos)
  .forEach(
    ([nombre, elemento]) => {

      if (!elemento) {

        console.error(
          `No existe el elemento: ${nombre}`
        );

      }

    }
  );


// ==========================================
// VARIABLES
// ==========================================

let puntos =
  0;

let bailando =
  false;

let caminando =
  false;

let noche =
  false;

let lloviendo =
  false;


// ==========================================
// FRASES
// ==========================================

const frases = [

  "¡Hola! Soy Ernesto Pérez.",

  "¡Bienvenido al páramo!",

  "¡El agua es vida!",

  "¡Cuidemos nuestros frailejones!",

  "¡Los páramos son tesoros de Colombia!",

  "¡Tenemos que proteger la naturaleza!",

  "¡Qué bonito está nuestro páramo!",

  "¡Vamos a cuidar el agua!",

  "¡Un saludo verde para todos!"

];


// ==========================================
// FUNCIÓN HABLAR
// ==========================================

function hablar(frase) {

  if (!frase) return;


  subtitulo.textContent =
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
      1.15;

    voz.rate =
      0.9;

    voz.volume =
      1;


    frailejon.classList.add(
      "hablando"
    );


    voz.onend =
      () => {

        frailejon.classList.remove(
          "hablando"
        );

      };


    voz.onerror =
      () => {

        frailejon.classList.remove(
          "hablando"
        );

      };


    speechSynthesis.speak(
      voz
    );

  }

}


// ==========================================
// SALUDAR
// ==========================================

btnSaludar.addEventListener(
  "click",
  () => {

    frailejon.classList.add(
      "saludando"
    );


    hablar(
      "¡Hola! ¡Qué alegría verte!"
    );


    setTimeout(
      () => {

        frailejon.classList.remove(
          "saludando"
        );

      },
      2200
    );

  }
);


// ==========================================
// HABLAR
// ==========================================

btnHablar.addEventListener(
  "click",
  () => {

    const indice =
      Math.floor(
        Math.random()
        * frases.length
      );


    hablar(
      frases[indice]
    );

  }
);


// ==========================================
// BAILAR
// ==========================================

btnBailar.addEventListener(
  "click",
  () => {

    bailando =
      !bailando;


    if (bailando) {

      frailejon.classList.add(
        "bailando"
      );

      btnBailar.textContent =
        "🛑 Parar baile";

      hablar(
        "¡Vamos a bailar!"
      );

    } else {

      frailejon.classList.remove(
        "bailando"
      );

      btnBailar.textContent =
        "💃 Bailar";

      hablar(
        "¡Eso estuvo divertido!"
      );

    }

  }
);


// ==========================================
// CAMINAR
// ==========================================

btnCaminar.addEventListener(
  "click",
  () => {

    caminando =
      !caminando;


    if (caminando) {

      frailejon.classList.add(
        "caminando"
      );

      btnCaminar.textContent =
        "🛑 Parar";

      hablar(
        "¡Vamos a explorar el páramo!"
      );

    } else {

      frailejon.classList.remove(
        "caminando"
      );

      btnCaminar.textContent =
        "🚶 Caminar";

      hablar(
        "¡Qué hermoso lugar!"
      );

    }

  }
);


// ==========================================
// DÍA / NOCHE
// ==========================================

btnNoche.addEventListener(
  "click",
  () => {

    noche =
      !noche;


    if (noche) {

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
        "¡Ha salido el sol!"
      );

    }

  }
);


// ==========================================
// CREAR LLUVIA
// ==========================================

function prepararLluvia() {

  lluvia.innerHTML =
    "";


  for (
    let i = 0;
    i < 100;
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


prepararLluvia();


// ==========================================
// BOTÓN LLUVIA
// ==========================================

btnLluvia.addEventListener(
  "click",
  () => {

    lloviendo =
      !lloviendo;


    if (lloviendo) {

      lluvia.classList.add(
        "activa"
      );

      btnLluvia.textContent =
        "☀️ Parar lluvia";

      hablar(
        "¡Está lloviendo! El páramo recibe agua."
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


// ==========================================
// CREAR GOTA DE AGUA
// ==========================================

function crearGota() {

  const gota =
    document.createElement(
      "div"
    );


  gota.className =
    "gota-agua";

  gota.textContent =
    "💧";


  gota.style.left =
    (10 + Math.random() * 80)
    + "%";


  gota.style.top =
    (20 + Math.random() * 55)
    + "%";


  escenario.appendChild(
    gota
  );


  gota.addEventListener(
    "click",
    () => {

      puntos++;

      aguaTexto.textContent =
        puntos;

      mensaje.textContent =
        "💧 ¡Encontraste agua!";


      gota.remove();


      hablar(
        "¡Muy bien! Encontraste agua."
      );

    }
  );


  setTimeout(
    () => {

      if (
        gota.parentElement
      ) {

        gota.remove();

      }

    },
    7000
  );

}


// ==========================================
// BOTÓN AGUA
// ==========================================

btnAgua.addEventListener(
  "click",
  () => {

    crearGota();


    mensaje.textContent =
      "💧 ¡Busca la gota azul y haz clic sobre ella!";

  }
);


// ==========================================
// PARPADEO AUTOMÁTICO
// ==========================================

function parpadear() {

  frailejon.classList.add(
    "parpadeando"
  );


  setTimeout(
    () => {

      frailejon.classList.remove(
        "parpadeando"
      );

    },
    180
  );

}


setInterval(
  parpadear,
  3500
);


// ==========================================
// MENSAJE INICIAL
// ==========================================

setTimeout(
  () => {

    hablar(
      "¡Hola! Soy Ernesto. ¡Bienvenido al páramo!"
    );

  },
  800
);