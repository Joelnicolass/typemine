import { Pico } from "./Pico";
import { Cubo } from "./Cubo";

export class Jugador {
  nombre: string;
  private pico: Pico;

  constructor(nombre: string, pico: Pico) {
    this.nombre = nombre;
    this.pico = pico;
  }

  picar(cubo: Cubo): number {
    const hp = cubo.reducirHp(this.pico.getFuerza);
    return hp;
  }
}
