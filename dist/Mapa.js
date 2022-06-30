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
        if (posicionNueva.x < 0 ||
            posicionNueva.x > 5 ||
            posicionNueva.y < 0 ||
            posicionNueva.y > 6) {
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
    verificarSiHayCuboCerca() {
        let posicionJugador = Object.assign({}, this.posicionJugador);
        let posicionCubo;
        for (let i = 0; i < this.cubos.length; i++) {
            posicionCubo = Object.assign({}, this.posicionCubos[i]);
            if ((posicionJugador.y - 1 === posicionCubo.y &&
                posicionJugador.x === posicionCubo.x) ||
                (posicionJugador.y + 1 === posicionCubo.y &&
                    posicionJugador.x === posicionCubo.x) ||
                (posicionJugador.x - 1 === posicionCubo.x &&
                    posicionJugador.y === posicionCubo.y) ||
                (posicionJugador.x + 1 === posicionCubo.x &&
                    posicionJugador.y === posicionCubo.y)) {
                return {
                    hayCuboCerca: true,
                    cubo: this.cubos[i],
                };
            }
        }
        return {
            hayCuboCerca: false,
            cubo: null,
        };
    }
    picar() {
        const { hayCuboCerca, cubo } = this.verificarSiHayCuboCerca();
        if (hayCuboCerca) {
            console.log("picar");
            //this.jugador.picar(cubo);
        }
        else {
            console.log("No hay cubo cerca");
        }
    }
}
exports.Mapa = Mapa;
