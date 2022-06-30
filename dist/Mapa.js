"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapa = exports.Direccion = void 0;
var Direccion;
(function (Direccion) {
    Direccion["ARRIBA"] = "ARRIBA";
    Direccion["ABAJO"] = "ABAJO";
    Direccion["IZQUIERDA"] = "IZQUIERDA";
    Direccion["DERECHA"] = "DERECHA";
})(Direccion = exports.Direccion || (exports.Direccion = {}));
class Mapa {
    constructor(jugador, pico, cubos) {
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
    ubicarCubos(cubo) {
        let posicion = { x: 0, y: 0 };
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
    ubicarJugador() {
        let posicion = { x: 0, y: 0 };
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
    moverJugador(direccion) {
        let posicionAnterior = Object.assign({}, this.posicionJugador);
        let posicionNueva = Object.assign({}, this.posicionJugador);
        console.log(posicionNueva);
        switch (direccion) {
            case Direccion.ARRIBA:
                posicionNueva.y--;
                break;
            case Direccion.ABAJO:
                posicionNueva.y++;
                break;
            case Direccion.IZQUIERDA:
                posicionNueva.x--;
                break;
            case Direccion.DERECHA:
                posicionNueva.x++;
                break;
        }
        // verificar si existe la posicion
        if (posicionNueva.x < 0 ||
            posicionNueva.x > 5 ||
            posicionNueva.y < 0 ||
            posicionNueva.y > 5) {
            console.log("No se puede mover");
            return;
        }
        if (this.mapa[posicionNueva.x][posicionNueva.y] === 0) {
            console.log("Movimiento permitido");
            console.log(posicionAnterior);
            console.log(posicionNueva);
            this.actualizarMapa(posicionAnterior, posicionNueva);
            this.posicionJugador = posicionNueva;
        }
        else {
            console.log("No se puede mover");
        }
    }
    actualizarMapa(posicionAnterior, posicionNueva) {
        console.log("se ejecuta");
        this.mapa[posicionAnterior.x][posicionAnterior.y] = 0;
        this.mapa[posicionNueva.x][posicionNueva.y] = "j";
        console.log(this.mapa[posicionNueva.x][posicionNueva.y]);
        console.log(this.mapa[posicionAnterior.x][posicionAnterior.y]);
    }
    verMapa() {
        console.log(this.posicionJugador);
        console.table(this.mapa);
    }
}
exports.Mapa = Mapa;
