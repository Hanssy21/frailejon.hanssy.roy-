/* =========================================
   ELEMENTOS
========================================= */

const escenario =
  document.getElementById("escenario");

const pagina =
  document.querySelector(".pagina");

const ernesto =
  document.getElementById("ernesto");

const dialogo =
  document.getElementById("dialogo");

const textoDialogo =
  document.getElementById("textoDialogo");

const contadorAgua =
  document.getElementById("contadorAgua");

const tituloInfo =
  document.getElementById("tituloInfo");

const textoInfo =
  document.getElementById("textoInfo");

const alerta =
  document.getElementById("alerta");

const textoAlerta =
  document.getElementById("textoAlerta");

const lluvia =
  document.getElementById("lluvia");


/* =========================================
   BOTONES
========================================= */

const btnParamo =
  document.getElementById("btnParamo");

const btnAgua =
  document.getElementById("btnAgua");

const btnFracking =
  document.getElementById("btnFracking");

const btnProteccion =
  document.getElementById("btnProteccion");

const btnHablar =
  document.getElementById("btnHablar");

const btnLluvia =
  document.getElementById("btnLluvia");

const btnNoche =
  document.getElementById("btnNoche");

const btnExplorar =
  document.getElementById("btnExplorar");

const btnMensajeFinal =
  document.getElementById("btnMensajeFinal");


/* =========================================
   VARIABLES
========================================= */

let agua =
  0;

let amenaza =
  false;

let noche =
  false;

let lluviaActiva =
  false;

let hablando =
  false;


/* =========================================
   HABLAR
========================================= */

function hablar(texto) {

  textoDialogo.textContent =
    texto;

  dialogo.classList.add(
    "visible"
  );


  if (
    "speechSynthesis"
    in window
  ) {

    speechSynthesis.cancel();

    const voz =
      new SpeechSynthesisUtterance(
        texto
      );

    voz.lang =
      "es-CO";

    voz.rate =
      .88;

    voz.pitch =
      1.15;

    hablando =
      true;

    ernesto.classList.add(
      "hablando"
    );

    voz.onend =
      () => {

        hablando =
          false;

        ernesto.classList.remove(
          "hablando"
        );

      };

    speechSynthesis.speak(
      voz
    );

  }

}


/* =========================================
   INFORMACIÓN
========================================= */

function mostrarInfo(
  titulo,
  texto,
  icono = "🌿"
) {

  tituloInfo.textContent =
    titulo;

  textoInfo.textContent =
    texto;

  document.querySelector(
    ".infoIcono"
  ).textContent =
    icono;

}


/* =========================================
   PÁRAMO
========================================= */

btnParamo.addEventListener(
  "click",
  () => {

    mostrarInfo(

      "🏔️ ¿Qué es un páramo?",

      "Los páramos son ecosistemas de alta montaña. "
      + "En Colombia son especialmente importantes "
      + "por sus funciones ecológicas y por su relación "
      + "con la regulación y provisión del agua.",

      "🏔️"

    );


    alerta.classList.remove(
      "activa"
    );


    hablar(
      "Los páramos son ecosistemas increíbles. "
      + "¡Son fundamentales para el agua!"
    );

  }
);


/* =========================================
   AGUA
========================================= */

btnAgua.addEventListener(
  "click",
  () => {

    mostrarInfo(

      "💧 El agua del páramo",

      "El suelo, la vegetación, los humedales "
      + "y otros componentes del páramo participan "
      + "en procesos que ayudan a almacenar, regular "
      + "y mantener el agua.",

      "💧"

    );


    crearGotaAgua();


    hablar(
      "¡El agua es uno de los grandes tesoros "
      + "de nuestros páramos!"
    );

  }
);


/* =========================================
   FRACKING
========================================= */

btnFracking.addEventListener(
  "click",
  () => {

    amenaza =
      true;


    escenario.classList.add(
      "amenaza"
    );


    mostrarInfo(

      "🛢️ ¿Por qué preocupa el fracking?",

      "El fracking utiliza grandes cantidades de agua "
      + "y requiere la inyección de fluidos a presión "
      + "para fracturar determinadas formaciones rocosas. "
      + "Su actividad también implica infraestructura, "
      + "manejo de residuos y sustancias. Por eso existen "
      + "preocupaciones sobre sus posibles impactos "
      + "ambientales y sobre la necesidad de proteger "
      + "las fuentes de agua y los ecosistemas.",

      "🛢️"

    );


    textoAlerta.textContent =

      "El páramo es un ecosistema especialmente "
      + "valioso. Frente a actividades que puedan "
      + "generar impactos sobre el agua, el suelo "
      + "o la biodiversidad, la prevención, el "
      + "control y la protección ambiental son fundamentales.";


    alerta.style.display =
      "flex";


    hablar(

      "¡Atención! El fracking puede generar "
      + "riesgos ambientales que debemos conocer. "
      + "El agua y los ecosistemas necesitan protección."

    );


    btnExplorar.textContent =
      "🔎 Ver la amenaza bajo tierra";

  }
);


/* =========================================
   PROTECCIÓN
========================================= */

btnProteccion.addEventListener(
  "click",
  () => {

    amenaza =
      false;


    escenario.classList.remove(
      "amenaza"
    );


    escenario.classList.remove(
      "explorando"
    );


    mostrarInfo(

      "🛡️ Proteger el páramo",

      "Proteger los páramos significa cuidar "
      + "el agua, conservar la biodiversidad, "
      + "evitar la degradación del ecosistema "
      + "y tomar decisiones ambientales basadas "
      + "en la prevención y la evidencia.",

      "🛡️"

    );


    hablar(

      "¡Muy bien! El páramo y el agua "
      + "merecen nuestra protección."

    );


    btnExplorar.textContent =
      "🔎 Explorar el subsuelo";

  }
);


/* =========================================
   HABLAR CON ERNESTO
========================================= */

btnHablar.addEventListener(
  "click",
  () => {

    const mensajes = [

      "¡Hola! Soy Ernesto Pérez.",

      "¡Cuidemos nuestros páramos!",

      "El agua es vida.",

      "Los frailejones ayudan al ecosistema del páramo.",

      "¡Colombia tiene unos ecosistemas maravillosos!",

      "No olvidemos que proteger la naturaleza "
      + "también significa proteger el agua."

    ];


    const aleatorio =
      mensajes[
        Math.floor(
          Math.random()
          * mensajes.length
        )
      ];


    hablar(
      aleatorio
    );

  }
);


/* =========================================
   CREAR LLUVIA
========================================= */

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
        "span"
      );

    gota.className =
      "gota";


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


/* =========================================
   LLUVIA
========================================= */

btnLluvia.addEventListener(
  "click",
  () => {

    lluviaActiva =
      !lluviaActiva;


    lluvia.classList.toggle(
      "activa",
      lluviaActiva
    );


    btnLluvia.textContent =
      lluviaActiva
        ? "☀️ Parar lluvia"
        : "🌧️ Lluvia";


    if (lluviaActiva) {

      hablar(
        "¡Está lloviendo en el páramo!"
      );

    } else {

      hablar(
        "La lluvia ha terminado."
      );

    }

  }
);


/* =========================================
   NOCHE
========================================= */

btnNoche.addEventListener(
  "click",
  () => {

    noche =
      !noche;


    pagina.classList.toggle(
      "noche",
      noche
    );


    btnNoche.textContent =
      noche
        ? "☀️ Día"
        : "🌙 Noche";


    hablar(

      noche
        ? "La noche llega al páramo."
        : "¡Ha vuelto el día!"

    );

  }
);


/* =========================================
   EXPLORAR SUBSUELO
========================================= */

btnExplorar.addEventListener(
  "click",
  () => {

    const abierto =
      escenario.classList.toggle(
        "explorando"
      );


    if (abierto) {

      btnExplorar.textContent =
        "⬆️ Ocultar subsuelo";


      if (amenaza) {

        hablar(

          "Aquí puedes observar por qué "
          + "la protección del agua subterránea "
          + "es una preocupación ambiental."

        );

      } else {

        hablar(

          "Mira bajo nuestros pies. "
          + "El suelo y el agua también forman "
          + "parte del ecosistema."

        );

      }

    } else {

      btnExplorar.textContent =
        amenaza
          ? "🔎 Ver la amenaza bajo tierra"
          : "🔎 Explorar el subsuelo";

    }

  }
);


/* =========================================
   GOTAS DE AGUA
========================================= */

function crearGotaAgua() {

  const gota =
    document.createElement(
      "button"
    );


  gota.textContent =
    "💧";

  gota.className =
    "gotaInteractiva";


  gota.style.position =
    "absolute";

  gota.style.zIndex =
    "200";

  gota.style.left =
    (10 + Math.random() * 80)
    + "%";

  gota.style.top =
    (20 + Math.random() * 45)
    + "%";

  gota.style.border =
    "0";

  gota.style.background =
    "transparent";

  gota.style.fontSize =
    "35px";

  gota.style.cursor =
    "pointer";


  escenario.appendChild(
    gota
  );


  gota.addEventListener(
    "click",
    () => {

      agua++;

      contadorAgua.textContent =
        agua;


      gota.remove();


      hablar(
        "¡Encontraste agua! 💧"
      );


      if (
        agua >= 5
      ) {

        hablar(

          "¡Excelente! "
          + "Has encontrado cinco gotas. "
          + "¡Ahora eres un guardián del agua!"

        );

      }

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
    8000
  );

}


/* =========================================
   PARPADEO
========================================= */

setInterval(
  () => {

    ernesto.classList.add(
      "parpadeando"
    );


    setTimeout(
      () => {

        ernesto.classList.remove(
          "parpadeando"
        );

      },
      180
    );

  },
  3500
);


/* =========================================
   MENSAJE FINAL
========================================= */

btnMensajeFinal.addEventListener(
  "click",
  () => {

    agua += 3;

    contadorAgua.textContent =
      agua;


    hablar(

      "¡Gracias por ayudar a proteger "
      + "el páramo! 🌿💧🇨🇴"

    );


    document.querySelector(
      ".final"
    ).style.transform =
      "scale(1.02)";

    setTimeout(
      () => {

        document.querySelector(
          ".final"
        ).style.transform =
          "";

      },
      300
    );

  }
);


/* =========================================
   MENSAJE INICIAL
========================================= */

setTimeout(
  () => {

    hablar(

      "¡Hola! Soy Ernesto Pérez. "
      + "¡Bienvenido al páramo!"

    );

  },
  1000
);
