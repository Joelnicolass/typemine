"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuboPiedra = exports.CuboTierra = exports.Cubo = void 0;
class Cubo {
    constructor(resistencia, hp) {
        this.resistencia = resistencia;
        this.hp = hp;
    }
    destruir() {
        console.log("Cubo destruido");
    }
    reducirHp(hp) {
        if (hp > 0) {
            this.hp -= hp / this.resistencia;
        }
        if (this.hp <= 0) {
            this.destruir();
        }
    }
    get getHp() {
        return this.hp;
    }
}
exports.Cubo = Cubo;
class CuboTierra extends Cubo {
    constructor(resistencia, hp) {
        super(resistencia, hp);
    }
}
exports.CuboTierra = CuboTierra;
class CuboPiedra extends Cubo {
    constructor(resistencia, hp) {
        super(resistencia, hp);
    }
}
exports.CuboPiedra = CuboPiedra;
