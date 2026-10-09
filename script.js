/* =========================================
   ELEMENTOS
========================================= */

const escenario =
  document.getElementById("escenario");

const pagina =
  document.querySelector(".pagina");

const ernesto =
  document.getElementById("ernesto");

const ernesta = 
  document.getElementById("ernesta");

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

const btnErnesto = 
  document.getElementById("btnErnesto");

const btnErnesta = 
  document.getElementById("btnErnesta");

const btnMision = 
  document.getElementById("btnMision");


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

let personajeActivo = "ernesto";
let indiceMision = 0;


/* =========================================
   HABLAR
========================================= */

function hablar(texto) {
  if (!textoDialogo || !dialogo) {
    console.error("No se encontraron los elementos del diálogo.");
    return;
  }

  textoDialogo.textContent = texto;
  dialogo.classList.add("visible");

  // Actualizar el nombre que aparece en la burbuja.
  const nombreDialogo = dialogo.querySelector("strong");

  if (nombreDialogo) {
    nombreDialogo.textContent =
      personajeActivo === "ernesta"
        ? "Frilejona Ernesta Pérez"
        : "Ernesto Pérez";
  }

  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-CO";
    voz.rate = 0.88;
    voz.pitch = personajeActivo === "ernesta" ? 1.3 : 1.05;

    hablando = true;

    const personaje = personajeActivo === "ernesta"
      ? document.getElementById("ernesta")
      : document.getElementById("ernesto");

    if (personaje) {
      personaje.classList.add("hablando");
    }

    voz.onend = () => {
      hablando = false;

      if (personaje) {
        personaje.classList.remove("hablando");
      }
    };

    voz.onerror = () => {
      hablando = false;

      if (personaje) {
        personaje.classList.remove("hablando");
      }
    };

    speechSynthesis.speak(voz);
  }
}
/* =========================================
   SELECCION DE PERSONAJE 
========================================= */
function seleccionarPersonaje(nombre) {
  personajeActivo = nombre;
  document.getElementById("nombrePersonaje").textContent =
  nombre === "ernesta"
    ? "Frilejona Ernesta Pérez"
    : "Ernesto Pérez";

  const ernestoElemento = document.getElementById("ernesto");
  const ernestaElemento = document.getElementById("ernesta");

  // Mostrar solamente el personaje seleccionado
  ernestoElemento.hidden = nombre !== "ernesto";
  ernestaElemento.hidden = nombre !== "ernesta";

  escenario.classList.toggle(
    "personaje-ernesta",
    nombre === "ernesta"
  );

  btnErnesto.classList.toggle(
    "personajeSeleccionado",
    nombre === "ernesto"
  );

  btnErnesta.classList.toggle(
    "personajeSeleccionado",
    nombre === "ernesta"
  );

  btnErnesto.setAttribute(
    "aria-pressed",
    String(nombre === "ernesto")
  );

  btnErnesta.setAttribute(
    "aria-pressed",
    String(nombre === "ernesta")
  );

  hablar(
    nombre === "ernesta"
      ? "¡Soy Frilejona Ernesta Pérez! No podemos ignorar lo que ocurre bajo nuestros pies. El fracking utiliza fluidos a presión para fracturar rocas y sus operaciones pueden generar riesgos para el agua, el suelo y los ecosistemas. ¡El páramo necesita protección!"
      : "¡Soy Ernesto Pérez, guardián del páramo! Mira ese pozo bajo la montaña. El fracking puede consumir agua, producir residuos y generar riesgos de contaminación. Las empresas que desarrollan estas actividades deben cumplir las normas ambientales y prevenir los daños. ¡Protejamos nuestras fuentes de vida!"
  );
}
/* =========================================
   EVENTOS DEL SELECTOR DE PERSONAJES
========================================= */

btnErnesto.addEventListener("click", () => {
  seleccionarPersonaje("ernesto");
});

btnErnesta.addEventListener("click", () => {
  seleccionarPersonaje("ernesta");
});
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
// PEGA AQUÍ EL BLOQUE DE MISIONES AMBIENTALES
const misionesAmbientales = [
  {
    titulo: "💧 Misión 1: El agua bajo nuestros pies",
    icono: "💧",
    mensaje:
      "¡Observa el agua subterránea! Las operaciones de fracking " +
      "requieren agua y pueden generar fluidos residuales. " +
      "Una fuga o una gestión inadecuada puede poner en riesgo " +
      "el suelo y los recursos hídricos. ¡Proteger el agua " +
      "del páramo debe ser una prioridad!",
    ernesta:
      "¡El agua no es un recurso desechable! Si se contamina, " +
      "las comunidades y los ecosistemas pueden sufrir las consecuencias. " +
      "Debemos exigir estudios hidrogeológicos, monitoreo y controles " +
      "antes de permitir actividades que puedan ponerla en riesgo."
  },
  {
    titulo: "🪨 Misión 2: Las fracturas de la roca",
    icono: "🪨",
    mensaje:
      "¡Mira las fracturas rojas junto al pozo! Representan " +
      "las fracturas que se buscan generar en determinadas rocas. " +
      "El riesgo depende de la geología, las fallas, la integridad " +
      "de los pozos y el manejo de los fluidos. Si estos procesos " +
      "se controlan mal, pueden afectar el entorno.",
    ernesta:
      "¡La montaña no es un laboratorio sin consecuencias! " +
      "Las fracturas y las fallas geológicas deben estudiarse " +
      "cuidadosamente. No todas las fracturas contaminan el agua, " +
      "pero ignorar la geología y los posibles caminos de migración " +
      "sería irresponsable."
  },
  {
    titulo: "⚠️ Misión 3: Residuos y sustancias",
    icono: "⚠️",
    mensaje:
      "El fracking genera aguas residuales que pueden contener " +
      "sales, sustancias utilizadas en la operación y componentes " +
      "procedentes de la formación rocosa. Un almacenamiento, " +
      "transporte o tratamiento deficiente puede causar impactos " +
      "en el suelo y el agua. ¡Los residuos deben manejarse con rigor!",
    ernesta:
      "¡Los residuos no desaparecen por enterrarlos o esconderlos! " +
      "Necesitamos conocer su composición, su tratamiento, " +
      "su destino final y los planes de respuesta ante derrames. " +
      "El agua y la biodiversidad merecen una protección real."
  },
  {
    titulo: "🏢 Misión 4: Empresas y responsabilidad",
    icono: "🏢",
    mensaje:
      "Las multinacionales y demás empresas que desarrollan " +
      "proyectos extractivos pueden obtener beneficios económicos, " +
      "pero deben cumplir las normas, prevenir daños y responder " +
      "por sus obligaciones ambientales. Investiga los permisos, " +
      "los estudios publicados y los mecanismos de vigilancia.",
    ernesta:
      "¡Los intereses económicos no deben estar por encima " +
      "de la protección ambiental! Las empresas deben rendir cuentas, " +
      "transparentar los riesgos y cumplir sus obligaciones. " +
      "Evaluemos las pruebas de cada proyecto y exijamos controles " +
      "independientes y participación de las comunidades."
  },
  {
    titulo: "🛡️ Misión 5: Defender el páramo",
    icono: "🛡️",
    mensaje:
      "Los páramos son ecosistemas estratégicos para la regulación " +
      "del agua y albergan una biodiversidad adaptada a condiciones " +
      "de alta montaña. Frente a proyectos que puedan afectarlos, " +
      "se necesitan estudios rigurosos, prevención, vigilancia " +
      "y decisiones que respeten las normas de protección aplicables.",
    ernesta:
      "¡Defender el páramo es defender la vida! No debemos esperar " +
      "a que ocurra un daño para preguntar cómo se protegerá el agua. " +
      "La prevención, la ciencia y la participación ciudadana " +
      "son fundamentales para cuidar este ecosistema."
  }
];

btnMision.addEventListener("click", () => {
  const mision = misionesAmbientales[indiceMision];

  // Abrir el subsuelo y activar el escenario de riesgo.
  escenario.classList.add("explorando", "riesgo-fracking");

  // Actualizar la información educativa.
  mostrarInfo(
    mision.titulo,
    mision.mensaje,
    mision.icono
  );

  // Mostrar la alerta ambiental existente.
  alerta.style.display = "flex";

  textoAlerta.textContent =
    "Riesgo ambiental potencial: los impactos dependen " +
    "de las condiciones geológicas, el diseño del proyecto, " +
    "la operación y el manejo de sus residuos. " +
    "La prevención y la vigilancia son esenciales.";

  // Cada personaje aporta su propio diálogo.
  hablar(
    personajeActivo === "ernesta"
      ? mision.ernesta
      : mision.mensaje
  );

  // Desplazar la vista hacia el escenario para ver el pozo.
  escenario.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  indiceMision = (indiceMision + 1) % misionesAmbientales.length;

  btnMision.textContent =
    indiceMision === 0
      ? "🔎 Repetir misiones"
      : `🔎 Siguiente misión (${indiceMision + 1}/${misionesAmbientales.length})`;
});


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
   PARPADEO DE ERNESTO Y ERNESTA
========================================= */

setInterval(() => {
  const personaje =
    personajeActivo === "ernesta" ? ernesta : ernesto;

  if (!personaje || personaje.hidden) return;

  personaje.classList.add("parpadeando");

  setTimeout(() => {
    personaje.classList.remove("parpadeando");
  }, 180);
}, 3500);


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
