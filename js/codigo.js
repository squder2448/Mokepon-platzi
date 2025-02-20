// Aquí aprendí a usar funciones. 
// Una función es un bloque de código que se define una vez y se puede reutilizar varias veces.
// Esto permite evitar repetir las mismas líneas de código y hacerlo más legible y eficiente.
// Las funciones pueden recibir "parámetros" para trabajar con datos específicos, 
// y su resultado se obtiene al "invocarlas".

// Esta función genera un número aleatorio entre dos valores dados (min y max, ambos inclusivos).
// Se utiliza para simular la elección aleatoria de la computadora.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Esta función convierte un número (la jugada) en su representación como texto (Piedra, Papel o Tijera).
// Ayuda a simplificar y reutilizar el código para mostrar las elecciones de jugador y computadora.
function eleccion(jugada) {
     let resultado = "";
         if (jugada == 1) {
        resultado = "Piedra 🥌";
 } else if (jugada == 2) {
        resultado = "Papel 📋";
  } else if (jugada == 3) {
         resultado = "Tijera ✂";
 } else {
         resultado = "Mal elegido"; // Maneja casos en los que la entrada no es válida.
     }
         return resultado;
}

// 1 representa Piedra, 2 representa Papel, y 3 representa Tijera.
// Variables para almacenar las elecciones del jugador y la computadora, 
// así como los conteos de triunfos y derrotas.
    let jugador = 0;
    let pc = 0;
    let triunfos = 0;
    let perdidas = 0;

// Bucle principal del juego: Se repite hasta que el jugador gana 3 veces o pierde 3 veces.
// Este bucle permite mantener la lógica del juego activa mientras ninguna de las dos condiciones se cumpla.
    while (triunfos < 3 && perdidas < 3) {
// Generar una elección aleatoria para la computadora.
     pc = aleatorio(1, 3);

// Solicitar la elección del jugador mediante un cuadro de diálogo.
     jugador = prompt("Elige: 1 para 🥌, 2 para 📋 ó 3 para ✂");

// Mostrar las elecciones de ambos jugadores utilizando la función `eleccion`.
      alert("PC elige: " + eleccion(pc));
      alert("Tú eliges: " + eleccion(jugador));

// COMBATE
// Aquí aprendí a usar condicionales para decidir el resultado del juego.
// También aprendí a combinar operadores lógicos (&&) y comparadores (==) para evaluar condiciones complejas.
      if (pc == jugador) {
        alert("EMPATE");
           } else if (jugador == 1 && pc == 3) {
        alert("GANASTE");
             triunfos += 1; // Incrementa los triunfos del jugador.
            } else if (jugador == 2 && pc == 1) {
        alert("GANASTE");
        triunfos += 1;
            } else if (jugador == 3 && pc == 2) {
        alert("GANASTE");
        triunfos += 1;
            } else {
        alert("PERDISTE");
        perdidas += 1; // Incrementa las derrotas del jugador.
             }
            }

        // Mensaje final que resume los resultados del jugador tras terminar el juego.
        alert("Ganaste " + triunfos + " veces, y perdiste " + perdidas + " veces.");