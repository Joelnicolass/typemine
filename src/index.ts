import { Cubo, CuboTierra, CuboPiedra } from "./Cubo";
import { Jugador } from "./Jugador";
import { Direccion, Mapa } from "./Mapa";
import { Pico } from "./Pico";

(async () => {
  const pico = new Pico(220);
  const player1 = new Jugador("Nico", pico);

  const cubo1 = new CuboTierra(1, 100);
  const cubo2 = new CuboTierra(1, 100);
  const cubo3 = new CuboPiedra(5, 200);

  const play = new Mapa(player1, pico, [cubo1, cubo2, cubo3]);
  play.moverJugador(Direccion.DERECHA);

  // esperar
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000);

  play.verMapa();
  play.moverJugador(Direccion.ABAJO);
  await delay(2000);
  play.verMapa();
  play.moverJugador(Direccion.IZQUIERDA);
  await delay(2000);
  play.verMapa();
})();
