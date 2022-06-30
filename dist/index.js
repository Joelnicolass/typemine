"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cubo_1 = require("./Cubo");
const Jugador_1 = require("./Jugador");
const Mapa_1 = require("./Mapa");
const Pico_1 = require("./Pico");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const pico = new Pico_1.Pico(220);
    const player1 = new Jugador_1.Jugador("Nico", pico);
    const cubo1 = new Cubo_1.CuboTierra(1, 100);
    const cubo2 = new Cubo_1.CuboTierra(1, 100);
    const cubo3 = new Cubo_1.CuboPiedra(5, 200);
    const play = new Mapa_1.Mapa(player1, pico, [cubo1, cubo2, cubo3]);
    play.moverJugador(Mapa_1.Direccion.DERECHA);
    // esperar
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    yield delay(1000);
    play.verMapa();
    play.moverJugador(Mapa_1.Direccion.ABAJO);
    yield delay(2000);
    play.verMapa();
    play.moverJugador(Mapa_1.Direccion.IZQUIERDA);
    yield delay(2000);
    play.verMapa();
}))();
