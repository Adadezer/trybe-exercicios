"use strict";
// Crie um type para um objeto que represente um pássaro.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.makeSum = exports.itsBird = void 0;
function itsBird(p) {
    if (p.pena === true && p.bico === true && p.asas === true)
        return 'é um pássaro';
    return 'não é um pássaro';
}
exports.itsBird = itsBird;
function makeSum(s) {
    console.log(`o valor da soma é ${s.x + s.y}`);
}
exports.makeSum = makeSum;
function Address(e) {
    console.log(`Rua: ${e.rua} número ${e.numero}, bairro: ${e.bairro}`);
}
exports.Address = Address;
