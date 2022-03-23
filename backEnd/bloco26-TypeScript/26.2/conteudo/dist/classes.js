"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voo2 = exports.voo1 = exports.casa2 = exports.casa1 = exports.cachorro2 = exports.cachorro1 = void 0;
// Crie uma classe cujo objeto represente um Cachorro.
class Cachorro {
    constructor(nome, raca) {
        this._nome = nome;
        this._raca = raca;
    }
    latir() {
        console.log(`${this._nome} da raca ${this._raca} latiu`);
    }
}
exports.cachorro1 = new Cachorro('Bethoween', 'São Bernardo');
exports.cachorro2 = new Cachorro('Lessie', 'Collie');
// Crie uma classe cujo objeto represente uma Casa.
class Casa {
    constructor(comodos, moradores) {
        this._comodos = comodos;
        this._moradores = moradores;
    }
    informar() {
        console.log(`A casa tem ${this._comodos} cômodos, e moram ${this._moradores} pessoas la dentro`);
    }
}
exports.casa1 = new Casa(5, 4);
exports.casa2 = new Casa(10, 8);
class Voo {
    constructor(origem, destino, passageiros) {
        this._origem = origem;
        this._destino = destino;
        this._passageiros = passageiros;
    }
    infoVoo() {
        console.log(`o voo com ${this._passageiros} passageiros sai de ${this._origem} com destino à ${this._destino}`);
    }
}
exports.voo1 = new Voo('São Paulo', 'Brasília', 50);
exports.voo2 = new Voo('Minas Gerais', 'Rio de Janeiro', 30);
