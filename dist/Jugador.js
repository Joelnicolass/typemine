"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, pico) {
        this.nombre = nombre;
        this.pico = pico;
    }
    picar(cubo) {
        cubo.reducirHp(this.pico.getFuerza);
    }
}
exports.Jugador = Jugador;
