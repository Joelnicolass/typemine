"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, pico) {
        this.nombre = nombre;
        this.pico = pico;
    }
    picar(cubo) {
        const hp = cubo.reducirHp(this.pico.getFuerza);
        return hp;
    }
}
exports.Jugador = Jugador;
