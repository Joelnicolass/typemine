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
    let posicionAnterior: Posicion = { ...this.posicionJugador };
    let posicionNueva: Posicion = { ...this.posicionJugador };
    console.log(posicionNueva);
    switch (direccion) {
      case Direccion.ARRIBA:
        posicionNueva.x--;
        break;
      case Direccion.ABAJO:
        posicionNueva.x++;
        break;
      case Direccion.IZQUIERDA:
        posicionNueva.y--;
        break;
      case Direccion.DERECHA:
        posicionNueva.y++;
        break;
    }

    // verificar si existe la posicion
    if (
      posicionNueva.x < 0 ||
      posicionNueva.x > 5 ||
      posicionNueva.y < 0 ||
      posicionNueva.y > 6
    ) {
      console.log("No se puede mover");
      return;
    }

    if (this.mapa[posicionNueva.x][posicionNueva.y] === 0) {
      console.log("Movimiento permitido");

      console.log(posicionAnterior);
      console.log(posicionNueva);

      this.actualizarMapa(posicionAnterior, posicionNueva);
      this.posicionJugador = posicionNueva;
    } else {
      console.log("No se puede mover");
    }
  }

  private actualizarMapa(
    posicionAnterior: Posicion,
    posicionNueva: Posicion
  ): void {
    console.log("se ejecuta");

    this.mapa[posicionAnterior.x][posicionAnterior.y] = 0;
    this.mapa[posicionNueva.x][posicionNueva.y] = "j";

    console.log(this.mapa[posicionNueva.x][posicionNueva.y]);
    console.log(this.mapa[posicionAnterior.x][posicionAnterior.y]);
  }

  verMapa(): void {
    console.log(this.posicionJugador);
    console.table(this.mapa);
  }

  private verificarSiHayCuboCerca(): {
    hayCuboCerca: boolean;
    cubo: Cubo | null;
    posicionCubo: Posicion | null;
  } {
    let posicionJugador: Posicion = { ...this.posicionJugador };
    let posicionCubo: Posicion;
    for (let i = 0; i < this.cubos.length; i++) {
      posicionCubo = { ...this.posicionCubos[i] };
      if (
        (posicionJugador.y - 1 === posicionCubo.y &&
          posicionJugador.x === posicionCubo.x) ||
        (posicionJugador.y + 1 === posicionCubo.y &&
          posicionJugador.x === posicionCubo.x) ||
        (posicionJugador.x - 1 === posicionCubo.x &&
          posicionJugador.y === posicionCubo.y) ||
        (posicionJugador.x + 1 === posicionCubo.x &&
          posicionJugador.y === posicionCubo.y)
      ) {
        return {
          hayCuboCerca: true,
          cubo: this.cubos[i],
          posicionCubo,
        };
      }
    }
    return {
      hayCuboCerca: false,
      cubo: null,
      posicionCubo: null,
    };
  }

  public picar(): void {
    const { hayCuboCerca, cubo, posicionCubo } = this.verificarSiHayCuboCerca();
    if (hayCuboCerca) {
      const hpCubo = this.jugador.picar(cubo!);
      if (hpCubo <= 0) {
        this.cubos.filter((cubo) => cubo !== cubo);
        this.posicionCubos.filter(
          (posicionCubo) => posicionCubo !== posicionCubo
        );

        this.mapa[posicionCubo!.x][posicionCubo!.y] = 0;
      }
    } else {
      console.log("No hay cubo cerca");
    }
  }
}
