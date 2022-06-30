import { Jugador } from "./Jugador";
import { Cubo } from "./Cubo";
import { Pico } from "./Pico";

export interface Posicion {
  x: number;
  y: number;
}

export enum Direccion {
  ARRIBA = "ARRIBA",
  ABAJO = "ABAJO",
  IZQUIERDA = "IZQUIERDA",
  DERECHA = "DERECHA",
}

export class Mapa {
  private jugador: Jugador;
  private cubos: Cubo[];
  private pico: Pico;
  private mapa: number[][] | string[][];
  private posicionJugador: Posicion;
  private posicionCubos: Posicion[];

  constructor(jugador: Jugador, pico: Pico, cubos: Cubo[]) {
    this.jugador = jugador;
    this.pico = pico;
    this.mapa = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.cubos = cubos;

    this.posicionJugador = this.ubicarJugador();
    this.posicionCubos = [];
    for (let i = 0; i < cubos.length; i++) {
      this.posicionCubos[i] = this.ubicarCubos(cubos[i]);
    }
  }

  private ubicarCubos(cubo: Cubo): Posicion {
    let posicion: Posicion = { x: 0, y: 0 };
    while (true) {
      posicion.x = Math.floor(Math.random() * 6);
      posicion.y = Math.floor(Math.random() * 6);
      if (this.mapa[posicion.x][posicion.y] === 0) {
        this.mapa[posicion.x][posicion.y] = "c";
        break;
      }
    }
    return posicion;
  }

  private ubicarJugador(): Posicion {
    let posicion: Posicion = { x: 0, y: 0 };
    while (true) {
      posicion.x = Math.floor(Math.random() * 6);
      posicion.y = Math.floor(Math.random() * 6);

      if (this.mapa[posicion.x][posicion.y] === 0) {
        this.mapa[posicion.x][posicion.y] = "j";
        break;
      }
    }
    return posicion;
  }

  public moverJugador(direccion: Direccion): void {
    let posicion = this.posicionJugador;
    switch (direccion) {
      case Direccion.ARRIBA:
        posicion.y--;
        break;
      case Direccion.ABAJO:
        posicion.y++;
        break;
      case Direccion.IZQUIERDA:
        posicion.x--;
        break;
      case Direccion.DERECHA:
        posicion.x++;
        break;
    }

    // verificar si existe la posicion
    if (posicion.x < 0 || posicion.x > 5 || posicion.y < 0 || posicion.y > 6) {
      console.log("No se puede mover");
      return;
    }

    if (this.mapa[posicion.x][posicion.y] === 0) {
      console.log("Movimiento permitido");
      this.actualizarMapa(this.posicionJugador, posicion);
      this.posicionJugador = posicion;
    } else {
      console.log("No se puede mover");
    }
  }

  private actualizarMapa(
    posicionAnterior: Posicion,
    posicionNueva: Posicion
  ): void {
    console.log("se ejecuta");
    console.log(posicionAnterior);
    this.mapa[posicionAnterior.x][posicionAnterior.y] = "j";
    this.mapa[posicionAnterior.x][posicionAnterior.y] = 0;
    console.log(this.mapa[posicionNueva.x][posicionNueva.y]);
    console.log(this.mapa[posicionAnterior.y][posicionAnterior.x]);
  }

  verMapa(): void {
    console.log(this.posicionJugador);
    console.table(this.mapa);
  }
}
