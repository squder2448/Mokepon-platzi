// Variables globales
let ataqueJugador;
let ataqueEnemigo;

// Constantes para los tipos de ataques
const ATAQUES = {
    PYRO: 'PYRO',
    HYDRO: 'HYDRO',
    GEO: 'GEO'
};

// Función para inicializar el juego
function iniciarJuego() {
    let botonElementoJugador = document.getElementById('boton-elemento');
    botonElementoJugador.addEventListener('click', seleccionarElementoJugador);

    let botonPyro = document.getElementById('boton-pyro');
    botonPyro.addEventListener('click', ataquePyro);
    let botonHydro = document.getElementById('boton-hydro');
    botonHydro.addEventListener('click', ataqueHydro);
    let botonGeo = document.getElementById('boton-geo');
    botonGeo.addEventListener('click', ataqueGeo);
}

// Función para seleccionar el elemento del jugador
function seleccionarElementoJugador() {
    let inputFuego = document.getElementById('fuego');
    let inputAgua = document.getElementById('agua');
    let inputTierra = document.getElementById('tierra');
    let elementoSpanJugador = document.getElementById('elemento-jugador');

    if (inputFuego.checked) {
        elementoSpanJugador.innerHTML = 'fuego';
    } else if (inputAgua.checked) {
        elementoSpanJugador.innerHTML = 'agua';
    } else if (inputTierra.checked) {
        elementoSpanJugador.innerHTML = 'tierra';
    } else {
        alert("Por favor selecciona un elemento");
        return;
    }

    seleccionarElementoEnemigo();
}

// Función para seleccionar el elemento del enemigo
function seleccionarElementoEnemigo() {
    let elementoAleatorio = aleatorio(1, 3);
    let elementoSpanEnemigo = document.getElementById('elemento-enemigo');

    if (elementoAleatorio === 1) {
        elementoSpanEnemigo.innerHTML = 'fuego';
    } else if (elementoAleatorio === 2) {
        elementoSpanEnemigo.innerHTML = 'agua';
    } else {
        elementoSpanEnemigo.innerHTML = 'tierra';
    }
}

// Funciones de los diferentes ataques
function ataquePyro() {
    ataqueJugador = ATAQUES.PYRO;
    ataqueEnemigoAleatorio();
}

function ataqueHydro() {
    ataqueJugador = ATAQUES.HYDRO;
    ataqueEnemigoAleatorio();
}

function ataqueGeo() {
    ataqueJugador = ATAQUES.GEO;
    ataqueEnemigoAleatorio();
}

// Función para generar el ataque del enemigo aleatoriamente
function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio === 1) {
        ataqueEnemigo = ATAQUES.PYRO;
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = ATAQUES.HYDRO;
    } else {
        ataqueEnemigo = ATAQUES.GEO;
    }
    
    combate();
}

// Función para determinar el resultado del combate
function combate() {
    let resultado;
    
    if (ataqueEnemigo === ataqueJugador) {
        resultado = "EMPATE";
    } else if (
        (ataqueJugador === ATAQUES.PYRO && ataqueEnemigo === ATAQUES.GEO) ||
        (ataqueJugador === ATAQUES.HYDRO && ataqueEnemigo === ATAQUES.PYRO) ||
        (ataqueJugador === ATAQUES.GEO && ataqueEnemigo === ATAQUES.HYDRO)
    ) {
        resultado = "GANASTE";
    } else {
        resultado = "PERDISTE";
    }
    
    crearMensaje(resultado);
}

// Función para crear y mostrar el mensaje del resultado
function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu elemento atacó con ${ataqueJugador}, el elemento de tu enemigo escogió ${ataqueEnemigo}. ${resultado}`;
    seccionMensajes.appendChild(parrafo);
}

// Función para generar números aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Inicializar el juego cuando se cargue la página
window.addEventListener('load', iniciarJuego);