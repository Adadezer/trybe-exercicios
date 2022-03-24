"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aviao = exports.leao = exports.carro = void 0;
exports.carro = {
    nome: 'Strada',
    marca: 'Fiat',
    cor: 'Vermelho',
    ligar() {
        return `o ${this.nome} ${this.cor} foi ligado`;
    }
};
exports.leao = {
    especie: 'Leão',
    subfamilia: 'Pantherinae',
    rugir() {
        return `o ${this.especie} rugiu`;
    }
};
exports.aviao = {
    companhia: 'Azul',
    modelo: '12 Embraer 190',
    decolar() {
        return `o avião ${this.modelo} da ${this.companhia} acabou de decolar`;
    }
};
