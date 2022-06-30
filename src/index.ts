import { keyIn } from "readline-sync";

import { Cubo, CuboTierra, CuboPiedra } from "./Cubo";
import { Jugador } from "./Jugador";
import { Direccion, Mapa } from "./Mapa";
import { Pico } from "./Pico";

(async () => {
  let jugando = true;

  const pico = new Pico(220);
  const player1 = new Jugador("Nico", pico);

  const cubo1 = new CuboTierra(1, 100);
  const cubo2 = new CuboTierra(1, 100);
  const cubo3 = new CuboPiedra(5, 200);

  const play = new Mapa(player1, pico, [cubo1, cubo2, cubo3]);

  // esperar
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);

  while (jugando) {
    // limpiar consola
    console.clear();
    // imprimir mapa
    play.verMapa();
    // mover presionando una tecla
    const key = keyIn(`${player1.nombre} presione una tecla para mover: `, {
      limit: "w a s d q p",
    });
    switch (key) {
      case "w":
        play.moverJugador(Direccion.ARRIBA);
        break;
      case "s":
        play.moverJugador(Direccion.ABAJO);
        break;
      case "a":
        play.moverJugador(Direccion.IZQUIERDA);
        break;
      case "d":
        play.moverJugador(Direccion.DERECHA);
        break;
      case "q":
        jugando = false;
        break;
      case "p":
        play.picar();
        await delay(1000);
        break;
      default:
        break;
    }
  }
})();
