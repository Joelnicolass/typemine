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
        }
        else {
            console.log("No se puede mover");
        }
    }
    actualizarMapa(posicionAnterior, posicionNueva) {
        console.log("se ejecuta");
        console.log(posicionAnterior);
        this.mapa[posicionAnterior.x][posicionAnterior.y] = "j";
        this.mapa[posicionAnterior.x][posicionAnterior.y] = 0;
        console.log(this.mapa[posicionNueva.x][posicionNueva.y]);
        console.log(this.mapa[posicionAnterior.y][posicionAnterior.x]);
    }
    verMapa() {
        console.log(this.posicionJugador);
        console.table(this.mapa);
    }
}
exports.Mapa = Mapa;
